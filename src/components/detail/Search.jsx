import { useEffect, useState } from "react";
import styled from "styled-components";
import { SearchBox } from "./SearchBox";
import SearchResults from "./SearchResults";
import { fetchMedicine } from "../../query/useGetMedicine";

export function Search() {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    if (query) {
      setSearching(true);
      fetchMedicine(query).then((countries) => {
        setCountries(countries);
        setSearching(false);
      });
    } else {
      setCountries([]);
    }
  }, [query]);

  return (
    <SearchContainer>
      <SearchBox value={query} onChange={(e) => setQuery(e.target.value)} />
      <SearchResults countries={countries} searching={searching} />
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`;
