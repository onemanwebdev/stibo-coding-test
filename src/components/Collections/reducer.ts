import { CollectionState, CollectionReducer } from "../../types";

export const collectionReducer: CollectionReducer = (state, action) => {
  switch (action.type) {
    case "ADD_COLLECTION":
      return {
        ...state,
        collections: [
          ...state.collections,
          {
            name: action.name,
            items: [],
          },
        ],
        activeCollection: {
          name: action.name,
          items: [],
        },
      };
    case "ADD_ITEM": {
      const hasItem = !!state.activeCollection.items.find(
        (item) => item.imgUrl === action.item.imgUrl
      );
      return {
        ...state,
        collections: state.collections.map((collection) =>
          collection.name === state.activeCollection.name
            ? {
                ...collection,
                items: hasItem
                  ? collection.items
                  : [...collection.items, action.item],
              }
            : collection
        ),
        activeCollection: {
          ...state.activeCollection,
          items: hasItem
            ? state.activeCollection.items
            : [...state.activeCollection.items, action.item],
        },
      };
    }
    case "REMOVE_ITEM": {
      return {
        ...state,
        collections: state.collections.map((collection) =>
          collection.name === state.activeCollection.name
            ? {
                ...collection,
                items: collection.items.filter(
                  (item) => item.imgUrl !== action.item.imgUrl
                ),
              }
            : collection
        ),
        activeCollection: {
          ...state.activeCollection,
          items: state.activeCollection.items.filter(
            (item) => item.imgUrl !== action.item.imgUrl
          ),
        },
      };
    }
    case "SWITCH_COLLECTION":
      return {
        ...state,
        activeCollection: {
          ...state.collections.find(
            (collection) => collection.name === action.name
          )!,
        },
      };
    default:
      return state;
  }
};

export const initialState: CollectionState = {
  collections: [
    {
      name: "My collection",
      items: [],
    },
  ],
  activeCollection: {
    name: "My collection",
    items: [],
  },
};
