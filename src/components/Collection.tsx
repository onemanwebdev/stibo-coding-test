import React from "react";

import { CollectionProps, ItemProps } from "../types";

export const Collection: React.FC<CollectionProps> = (props) => {
  const { name, items, removeItem } = props;

  const handleRemoveItem = (item: ItemProps) => () => {
    removeItem(item);
  };

  return (
    <div className="my-fav-pics">
      <header>
        <h2>{name}</h2>
      </header>
      <ul className="my-fav-pics-list">
        {items.length > 0 ? (
          items.map((item) => (
            <li key={item.imgUrl}>
              <img src={item.imgUrl} />
              {item.title}
              <button onClick={handleRemoveItem(item)}>Remove</button>
            </li>
          ))
        ) : (
          <li>
            <span>This collection has no item yet, please add some</span>
          </li>
        )}
      </ul>
    </div>
  );
};
