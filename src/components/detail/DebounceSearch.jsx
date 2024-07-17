import { useEffect, useState } from "react";
import { SearchBox } from "./SearchBox";
import { SearchResults } from "./SearchResults";
import { fetchCountries } from "./countries";

export function DebouncedSearch() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [countries, setCountries] = useState([]);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedQuery(query), 1_000);
    return () => clearTimeout(timeout);
  }, [query]);

  useEffect(() => {
    setSearching(true);
    fetchCountries(debouncedQuery).then((countries) => {
      setCountries(countries);
      setSearching(false);
    });
  }, [debouncedQuery]);

  return (
    <>
      <SearchBox value={query} onChange={(e) => setQuery(e.target.value)} />
      <SearchResults countries={countries} searching={searching} />
    </>
  );
}
