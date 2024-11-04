import styled from "styled-components";
import Card from "../components/Card";
import Filter from "../components/Filter";
import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../services/apiCountries";
import Spinner from "../ui/Spinner";
import Search from "../components/Search";
import SearchFilterMenu from "../components/SearchFilterMenu";

const StyledHomepage = styled.div`
  background-color: var(--color-bg);
  padding: 2.5rem 4rem;
  height: 100%;
`;

const Countries = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
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
  const { isLoading, data: countries } = useQuery<Country[]>({
    queryFn: getCountries,
    queryKey: ["countries"],
  });

  if (isLoading) return <Spinner />;
  console.log("COUNTRIES", countries);

  return (
    <StyledHomepage>
      <SearchFilterMenu>
        <Search />
        <Filter />
      </SearchFilterMenu>

      <Countries>
        {countries?.map((country) => (
          <Card
            key={country.name}
            cap={country.capital}
            reg={country.region}
            country={country.name}
            pop={country.population}
            img={country.flags.png}
          />
        ))}
      </Countries>
    </StyledHomepage>
  );
}
