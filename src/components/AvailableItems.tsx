import React, { FC, useState, useEffect } from "react";

import "./AvailableItems.css";

import { AvailableItemsProps, ItemProps } from "../types";

export const AvailableItems: FC<AvailableItemsProps> = ({
  items: mockItems,
  addItem,
}) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [items, setItems] = useState<ItemProps[]>(mockItems);
  const [searchValue, setSearchValue] = useState<string>("");

  const handleAdd = (item: ItemProps) => () => {
    addItem(item);
  };

  const renderItems = (): React.ReactNode => {
    return items.map((item) => {
      return (
        <li className="available-list-item" key={item.imgUrl}>
          <img src={item.imgUrl} />
          {item.title}
          <button onClick={handleAdd(item)}>Add</button>
        </li>
      );
    });
  };

  const handleSelectTag = (tag: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedTags((prevState) => {
      return prevState.includes(tag)
        ? prevState.filter((stateItem) => tag !== stateItem)
        : [...prevState, tag];
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    {
      setItems(
        selectedTags.length > 0
          ? mockItems.filter((mockItem) =>
              selectedTags.every((selectedTag) =>
                mockItem.tags?.includes(selectedTag)
              )
            )
          : mockItems
      );
    }
  }, [selectedTags]);

  useEffect(() => {
    if (searchValue) {
      if (selectedTags.length > 0) {
        setSelectedTags([]);
      }
      setItems((prevState) =>
        prevState.filter(
          (stateItem) =>
            stateItem.title
              .toLocaleLowerCase()
              .includes(searchValue.toLocaleLowerCase()) ||
            stateItem.tags?.some((tag) =>
              tag.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
            )
        )
      );
    } else {
      setItems(mockItems);
    }
  }, [searchValue]);

  return (
    <div className="available-items">
      <header>
        <h2>All pics</h2>
      </header>
      <div>
        filters:
        {["nature", "sea", "architecture"].map((tag) => {
          const selectedClass = selectedTags.includes(tag) ? "selected" : "";
          return (
            <a
              className={`tag ${selectedClass}`}
              key={tag}
              href=""
              onClick={handleSelectTag(tag)}
            >
              {tag}
            </a>
          );
        })}
      </div>
      <div>
        search:
        <input className="search" value={searchValue} onChange={handleChange} />
        <button onClick={() => setSearchValue("")}>&times;</button>
      </div>
      <ul className="available-items-list">{renderItems()}</ul>
    </div>
  );
};
