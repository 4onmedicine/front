import { useEffect, useState } from "react";
import styled from "styled-components";
import { SearchBox } from "./SearchBox";
import SearchResults from "./SearchResults";
import { fetchMedicine } from "../../query/useGetMedicine";

export function Search() {
  const [query, setQuery] = useState("");
  const [medicines, setMedicines] = useState([]);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    if (query) {
      setSearching(true);
      fetchMedicine(query).then((medicines) => {
        setMedicines(medicines);
        setSearching(false);
      });
    } else {
      setMedicines([]);
    }
  }, [query]);

  return (
    <SearchContainer>
      <SearchBox value={query} onChange={(e) => setQuery(e.target.value)} />
      {query && <SearchResults medicines={medicines} searching={searching} />}
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`;
