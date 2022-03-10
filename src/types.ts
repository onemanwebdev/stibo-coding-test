export interface ItemProps {
  imgUrl: string;
  title: string;
  tags?: string[];
}

export interface CollectionProps extends Collection {
  removeItem: (item: ItemProps) => void;
}

export interface AvailableItemsProps {
  items: ItemProps[];
  addItem: (item: ItemProps) => void;
}

export interface Collection {
  name: string;
  items: ItemProps[];
}

export interface CollectionState {
  collections: Collection[];
  activeCollection: Collection;
}

export type CollectionAction =
  | { type: "ADD_COLLECTION"; name: string }
  | { type: "ADD_ITEM"; item: ItemProps }
  | { type: "REMOVE_ITEM"; item: ItemProps }
  | { type: "SWITCH_COLLECTION"; name: string };

export interface CollectionReducer {
  (state: CollectionState, action: CollectionAction): CollectionState;
}

export interface ModalProps {
  isVisible: boolean;
}
