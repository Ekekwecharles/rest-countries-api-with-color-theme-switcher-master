import styled from "styled-components";
import Card from "../components/Card";
import Filter from "../components/Filter";
import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../services/apiCountries";
import Spinner from "../ui/Spinner";
import Search from "../components/Search";
import SearchFilterMenu from "../components/SearchFilterMenu";
import { useState } from "react";
import { useSearchFilter } from "../context/SearchFilterContext";

const StyledHomepage = styled.div`
  background-color: var(--color-bg);
  padding: 2.5rem 4rem;
  height: 100%;
`;

const Countries = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  gap: 4rem;
  margin-top: 4rem;
`;

interface Country {
  capital: string;
  region: string;
  name: string;
  population: number;
  flags: {
    png: string;
  };
}

export default function Homepage() {
  const [searchValue, setSearchValue] = useState("");

  const { filter } = useSearchFilter();

  const { isLoading, data: countries } = useQuery<Country[]>({
    queryFn: getCountries,
    queryKey: ["countries"],
    staleTime: Infinity,
  });

  if (isLoading) return <Spinner />;

  // Filter the countries based on the search term
  const filteredCountries = countries?.filter(
    (country) =>
      country.name.toLowerCase().includes(searchValue.toLowerCase()) &&
      country.region.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <StyledHomepage>
      <SearchFilterMenu>
        <Search
          searchValue={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Filter />
      </SearchFilterMenu>

      <Countries>
        {filteredCountries?.map((country) => (
          <Card
            key={country.name}
            cap={country.capital}
            reg={country.region}
            name={country.name}
            pop={country.population}
            img={country.flags.png}
            country={country}
          />
        ))}
      </Countries>
    </StyledHomepage>
  );
}
