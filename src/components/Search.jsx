import React from "react";

// const Search = (props) => {
//   const [searchTerm, setSearchTerm] = React.useState("");
//   const { onSearch, search } = props;

//   return (
//     <div>
//       <label htmlFor="search">Search: </label>
//       <input id="search" type="text" onChange={onSearch} value={search} />
//       <p>
//         Searching for <strong>{searchTerm}</strong>.
//       </p>{" "}
//     </div>
//   );
// };

//more concise body

const Search = ({ search, onSearch }) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" onChange={onSearch} value={search} />
  </div>
);

export default Search;
