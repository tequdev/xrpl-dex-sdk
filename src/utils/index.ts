import { Node } from 'xrpl/dist/npm/models/transactions/metadata';
import { CreatedNode, DeletedNode, ModifiedNode } from '../models';

export * from './conversions';
export * from './numbers';

export interface GetOfferNodesOptions {
  showCreated?: boolean;
  showModified?: boolean;
  showDeleted?: boolean;
}

export const getOfferNodesDefaultOptions: GetOfferNodesOptions = {
  showCreated: false,
  showModified: true,
  showDeleted: true,
};

export const getOfferNodes = (affectedNodes: Node[], options: GetOfferNodesOptions = {}) => {
  const { showCreated, showModified, showDeleted } = { ...getOfferNodesDefaultOptions, ...options };
  const createdNodes: CreatedNode['CreatedNode'][] = [];
  const modifiedNodes: ModifiedNode['ModifiedNode'][] = [];
  const deletedNodes: DeletedNode['DeletedNode'][] = [];
  for (const affectedNode of affectedNodes) {
    if (showCreated && affectedNode.hasOwnProperty('CreatedNode')) {
      const { CreatedNode } = affectedNode as CreatedNode;
      if (CreatedNode.LedgerEntryType !== 'Offer') continue;
      createdNodes.push(CreatedNode);
    } else if (showModified && affectedNode.hasOwnProperty('ModifiedNode')) {
      const { ModifiedNode } = affectedNode as ModifiedNode;
      if (ModifiedNode.LedgerEntryType !== 'Offer') continue;
      if (ModifiedNode.FinalFields && ModifiedNode.PreviousFields) {
        modifiedNodes.push(ModifiedNode);
      }
    } else if (showDeleted && affectedNode.hasOwnProperty('DeletedNode')) {
      const { DeletedNode } = affectedNode as DeletedNode;
      if (DeletedNode.LedgerEntryType !== 'Offer') continue;
      deletedNodes.push(DeletedNode);
    }
  }
  return {
    createdNodes,
    modifiedNodes,
    deletedNodes,
  };
};
