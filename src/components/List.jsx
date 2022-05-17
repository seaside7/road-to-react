import React from "react";
import Item from "./Item";

// const List = (props) =>
//   props.list.map((item) => (
//     <div key={item.objectID}>
//       <span>
//         <a href={item.url}>{item.title}</a>
//       </span>
//       <span>{item.author}</span>
//       <span>{item.num_comments}</span>
//       <span>{item.points}</span>
//     </div>
//   ));

// const List = ({ list }) =>
//   list.map((item) => <Item key={item.objectID} item={item} />);

const List = ({ list }) =>
  list.map(({ objectID, ...item }) => <Item key={objectID} {...item} />);

export default List;
