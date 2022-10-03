const serverState = {
  normal: {
    id: 'normalServerState',
    result: {
      state: {
        build_version: '1.9.4',
        complete_ledgers: '30987978-31539761',
        initial_sync_duration_us: '153172658',
        io_latency_ms: 1,
        jq_trans_overflow: '0',
        last_close: {
          converge_time: 2000,
          proposers: 6,
        },
        load_base: 256,
        load_factor: 256,
        load_factor_fee_escalation: 256,
        load_factor_fee_queue: 256,
        load_factor_fee_reference: 256,
        load_factor_server: 256,
        network_id: 1,
        peer_disconnects: '13173',
        peer_disconnects_resources: '47',
        peers: 113,
        pubkey_node: 'n9L2HuFXqzmRFctApnyTzcVukKSw3KfsvrrBUKQsk8Z3s3yRH4cj',
        server_state: 'full',
        server_state_duration_us: '432013354113',
        state_accounting: {
          connected: {
            duration_us: '150100596',
            transitions: '2',
          },
          disconnected: {
            duration_us: '1066263',
            transitions: '2',
          },
          full: {
            duration_us: '432013354113',
            transitions: '1',
          },
          syncing: {
            duration_us: '2005792',
            transitions: '1',
          },
          tracking: {
            duration_us: '5',
            transitions: '1',
          },
        },
        time: '2022-Sep-28 00:03:57.582917 UTC',
        uptime: 432166,
        validated_ledger: {
          base_fee: 10,
          close_time: 717638633,
          hash: '38DC7DE8601F191C9E30E75BB04E9DFB55934C46E6C7BCC4A05A7B19587C9A49',
          reserve_base: 10000000,
          reserve_inc: 2000000,
          seq: 31539761,
        },
        validation_quorum: 5,
      },
    },
    status: 'success',
    type: 'response',
  },
};

export default serverState;
