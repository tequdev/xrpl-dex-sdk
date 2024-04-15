import { EventEmitter2 } from 'eventemitter2';
import { Server as WebSocketServer } from 'ws';

import { Request, XrplError } from 'xrpl';
import { BaseResponse, ErrorResponse } from 'xrpl/dist/npm/models/methods/baseMethod';

import { getFreePort } from './testUtils';

function createResponse(request: { id: number | string }, response: Record<string, unknown>): string {
  if (!('type' in response) && !('error' in response)) {
    throw new XrplError(`Bad response format. Must contain \`type\` or \`error\`. ${JSON.stringify(response)}`);
  }
  return JSON.stringify({ ...response, id: request.id });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- typing is too complicated otherwise
function ping(conn: any, request: any): void {
  setTimeout(() => {
    conn.send(
      createResponse(request, {
        result: {},
        status: 'success',
        type: 'response',
      })
    );
  }, 1000 * 2);
}

export interface PortResponse extends BaseResponse {
  result: {
    port: number;
  };
}

/*
 * We mock out WebSocketServer in these tests and add a lot of custom
 * properties not defined on the normal WebSocketServer object.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- typing is too complicated otherwise
type MockedWebSocketServer = any;

// eslint-disable-next-line @typescript-eslint/promise-function-async -- Not a promise that's returned
export default function createMockRippled(port: number): MockedWebSocketServer {
  const mock = new WebSocketServer({ port }) as MockedWebSocketServer;
  Object.assign(mock, EventEmitter2.prototype);

  mock.responses = {};
  mock.responsesOnce = {};
  mock.suppressOutput = false;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Typing is too complicated otherwise
  mock.on('connection', function (this: MockedWebSocketServer, conn: any) {
    this.socket = conn;
    conn.on('message', function (requestJSON: string) {
      let request;
      try {
        request = JSON.parse(requestJSON);
        if (request.id == null) {
          throw new XrplError(`Request has no id: ${requestJSON}`);
        }
        if (request.command == null) {
          throw new XrplError(`Request has no id: ${requestJSON}`);
        }
        if (request.command === 'ping') {
          ping(conn, request);
        } else if (request.command === 'test_command') {
          mock.testCommand(conn, request);
        } else if (request.command in mock.responses || request.command in mock.responsesOnce) {
          conn.send(createResponse(request, mock.getResponse(request)));
        } else {
          throw new XrplError(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions -- We know it's there
            `No event handler registered in mock rippled for ${request.command}`
          );
        }
      } catch (err) {
        if (!(err instanceof Error)) {
          throw err;
        }

        if (!mock.suppressOutput) {
          // eslint-disable-next-line no-console -- only printed out on error
          console.error(err.message);
        }
        if (request != null) {
          conn.send(
            createResponse(request, {
              type: 'response',
              status: 'error',
              error: err.message,
            })
          );
        }
      }
    });
  });

  /*
   * Adds a mocked response
   * If an object is passed in for `response`, then the response is static for the command
   * If a function is passed in for `response`, then the response can be determined by the exact request shape
   */
  mock.addResponse = function (
    command: string,
    response: Response | ErrorResponse | ((r: Request) => Response | ErrorResponse)
  ): void {
    if (typeof command !== 'string') {
      throw new XrplError('command is not a string');
    }
    if (typeof response === 'object' && !('type' in response) && !('error' in response)) {
      throw new XrplError(`Bad response format. Must contain \`type\` or \`error\`. ${JSON.stringify(response)}`);
    }
    mock.responses[command] = response;
  };

  mock.addResponseOnce = function (
    command: string,
    response: Response | ErrorResponse | ((r: Request) => Response | ErrorResponse)
  ): void {
    if (typeof command !== 'string') {
      throw new XrplError('command is not a string');
    }
    if (typeof response === 'object' && !('type' in response) && !('error' in response)) {
      throw new XrplError(`Bad response format. Must contain \`type\` or \`error\`. ${JSON.stringify(response)}`);
    }
    if (mock.responsesOnce[command]) mock.responsesOnce[command].push(response);
    else mock.responsesOnce[command] = [response];
  };

  mock.getResponse = (request: Request): Record<string, unknown> => {
    if (!(request.command in mock.responses || request.command in mock.responsesOnce)) {
      throw new XrplError(`No handler for ${request.command}`);
    }
    let onceFunctionOrObjectArray = mock.responsesOnce[request.command];
    if (Array.isArray(onceFunctionOrObjectArray) && onceFunctionOrObjectArray.length > 0) {
      const obj = onceFunctionOrObjectArray.shift();
      mock.responsesOnce[request.command] =
        onceFunctionOrObjectArray.length === 0 ? undefined : onceFunctionOrObjectArray;
      if (typeof obj === 'function') return obj(request) as Record<string, unknown>;
      return obj as Record<string, unknown>;
    }
    const functionOrObject = mock.responses[request.command];
    if (typeof functionOrObject === 'function') {
      return functionOrObject(request) as Record<string, unknown>;
    }
    return functionOrObject as Record<string, unknown>;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- typing is too complicated otherwise
  mock.testCommand = function testCommand(conn: any, request: any): void {
    if (request.data.disconnectIn) {
      setTimeout(conn.terminate.bind(conn), request.data.disconnectIn);
      conn.send(
        createResponse(request, {
          status: 'success',
          type: 'response',
          result: {},
        })
      );
    } else if (request.data.openOnOtherPort) {
      getFreePort().then((newPort) => {
        createMockRippled(newPort);
        conn.send(
          createResponse(request, {
            status: 'success',
            type: 'response',
            result: { port: newPort },
          })
        );
      });
    } else if (request.data.closeServerAndReopen) {
      setTimeout(() => {
        conn.terminate();
        mock.close(() => {
          setTimeout(() => {
            createMockRippled(port);
          }, request.data.closeServerAndReopen);
        });
      }, 10);
    } else if (request.data.unrecognizedResponse) {
      conn.send(
        createResponse(request, {
          status: 'unrecognized',
          type: 'response',
          result: {},
        })
      );
    } else if (request.data.closeServer) {
      conn.close();
    } else if (request.data.delayedResponseIn) {
      setTimeout(() => {
        conn.send(
          createResponse(request, {
            status: 'success',
            type: 'response',
            result: {},
          })
        );
      }, request.data.delayedResponseIn);
    }
  };

  return mock;
}
