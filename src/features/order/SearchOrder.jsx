import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-full px-3 py-2 text-sm focus:outline-none
        placeholder:text-stone-400  transition-all duration-300 sm:focus:w-72 w-25 sm:w-64"
      />
    </form>
  );
}

export default SearchOrder;
