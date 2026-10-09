import React, { useEffect, useState } from "react";

export default function DebouncedSearch() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");

  // console.log(search)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search.trim() === "") {
        return;
      }

      setResult(`Searching for: ${search}`);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // console.log(search);

  return (
    <div>
      <h2>Debounced Search</h2>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <p>{result}</p>
    </div>
  );
}
