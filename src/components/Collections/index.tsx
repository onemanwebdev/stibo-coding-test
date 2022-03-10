import React, { useState, useReducer } from "react";

import { AvailableItems } from "../../components/AvailableItems";
import { Collection } from "../../components/Collection";
import { Modal } from "../Modal";

import { items as itemsMock } from "../../mocks/items";

import { ItemProps } from "../../types";

import "./styles.css";

import { collectionReducer, initialState } from "./reducer";

export const Collections: React.VFC = () => {
  const [state, dispatch] = useReducer(collectionReducer, initialState);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const addItem = (item: ItemProps) => {
    dispatch({ type: "ADD_ITEM", item });
  };

  const removeItem = (item: ItemProps) => {
    dispatch({ type: "REMOVE_ITEM", item });
  };

  const switchCollection = (name: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({ type: "SWITCH_COLLECTION", name });
  };

  const addCollection = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalVisible(true);
  };

  const applyNewName = () => {
    dispatch({ type: "ADD_COLLECTION", name: inputValue });
    setIsModalVisible(false);
    setInputValue("");
  };

  return (
    <>
      <AvailableItems items={itemsMock} addItem={addItem} />
      <div className="my-collections">
        <div className="collection-tabs">
          {state.collections.map((collection) => (
            <a
              className="collection-tab"
              onClick={switchCollection(collection.name)}
              href=""
              key={collection.name}
            >
              {collection.name}
            </a>
          ))}
          <a
            className="collection-tab new-collection"
            onClick={addCollection}
            href=""
          >
            Add new collection +
          </a>
        </div>
        <Collection {...state.activeCollection} removeItem={removeItem} />
      </div>
      <Modal isVisible={isModalVisible}>
        Enter collection name:
        <input
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
        />
        <button onClick={applyNewName} disabled={inputValue.length < 3}>
          Apply
        </button>
      </Modal>
    </>
  );
};
