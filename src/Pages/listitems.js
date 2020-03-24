import React from "react";
import { MdDelete } from "react-icons/md";

export default function ListItem(props) {
  // const { items } = props;
  const listItems = props.items.map(item => {
    return (
      <div key={item.key}>
        <input
          type="text"
          value={item.text}
          id={item.key}
          onChange={e => props.setUpdate(e.target.value, item.key)}
        />
        <MdDelete onClick={() => props.deleteitem(item.key)} />
      </div>
    );
  });
  return <div style={{ color: "white" }}>{listItems}</div>;
}
