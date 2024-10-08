import { useEffect, useState } from "react";
import styled from "styled-components";
import MainSearchResults from "./MainSearchResults";
import MainSearchBox from "./MainSearchBox";
import getHomeData from "../../query/get/useGetHome";
import useDebouncedState from "./useDebouncedState";

export function MainSearch({ selectedOption }) {
  const [query, setQuery] = useState("");
  // const debouncedQuery = useDebouncedState(query, 1_000);
  const [medicines, setMedicines] = useState([]);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    if (query) {
      setSearching(true);
      getHomeData(query, selectedOption).then((medicines) => {
        setMedicines(medicines);
        setSearching(false);
      });
    } else {
      setMedicines([]);
    }
  }, [query]);

  return (
    <SearchContainer>
      <MainSearchBox
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        selectedOption={selectedOption}
      />
      {query && (
        <MainSearchResults medicines={medicines} searching={searching} />
      )}
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  //width: 300px;
  font-family: "gmarket-medium";
`;
