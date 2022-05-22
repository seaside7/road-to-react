import React from "react";

const Item = ({ item, onRemoveItem }) => {
  // const handleRemoveItem = () => {
  //   onRemoveItem(item);
  // };

  return (
    <div>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
      <span>
        <button
          type="button"
          onClick={() => {
            // do something else
            // note: avoid using complex logic in JSX
            onRemoveItem(item);
          }}
        >
          Dismiss
        </button>
      </span>
    </div>
  );
};

export default Item;
