import { useEffect, useState } from "react";
import styled from "styled-components";
import MainSearchResults from "./MainSearchResults";
import MainSearchBox from "./MainSearchBox";
import getHomeData from "../../query/get/useGetHome";

export function MainSearch() {
  const [query, setQuery] = useState("");
  const [medicines, setMedicines] = useState([]);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    if (query) {
      setSearching(true);
      getHomeData(query).then((medicines) => {
        setMedicines(medicines);
        setSearching(false);
      });
    } else {
      setMedicines([]);
    }
  }, [query]);

  return (
    <SearchContainer>
      <MainSearchBox value={query} onChange={(e) => setQuery(e.target.value)} />
      {query && (
        <MainSearchResults medicines={medicines} searching={searching} />
      )}
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  position: relative;
  width: 300px;
`;
