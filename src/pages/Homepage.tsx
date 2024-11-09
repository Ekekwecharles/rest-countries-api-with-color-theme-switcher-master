import styled from "styled-components";
import Card from "../components/Card";
import Filter from "../components/Filter";
import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../services/apiCountries";
import Spinner from "../ui/Spinner";
import Search from "../components/Search";
import SearchFilterMenu from "../components/SearchFilterMenu";
import { useEffect, useMemo, useState } from "react";
import { useSearchFilter } from "../context/SearchFilterContext";
import { Country } from "../types";
import Pagination from "../ui/Pagination";
import Error from "./Error";
import { useSearchParams } from "react-router-dom";

const StyledHomepage = styled.div`
  background-color: var(--color-bg);
  padding: 2.5rem 4rem;
  padding-bottom: 4rem;
  height: 100%;
`;

const Countries = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  gap: 4rem;
  margin-top: 4rem;
`;

const SearchNotFound = styled.div`
  font-size: 2rem;
  grid-column: 1/-1;
`;

const COUNTRIES_PER_PAGE = 12;

export default function Homepage() {
  const [searchValue, setSearchValue] = useState("");
  const { filter } = useSearchFilter();

  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = parseInt(searchParams.get("page") || "1", 10);
  const [currentPage, setCurrentPage] = useState(initialPage);

  const {
    isLoading,
    isError,
    error,
    data: countries,
  } = useQuery<Country[]>({
    queryFn: getCountries,
    queryKey: ["countries"],
    staleTime: Infinity,
  });

  let filteredCountries = countries?.filter(
    (country) =>
      country.name.toLowerCase().includes(searchValue.toLowerCase()) &&
      country.region.toLowerCase().includes(filter.toLowerCase())
  );

  const dataSize = useMemo(
    () => filteredCountries?.length || 0,
    [filteredCountries]
  );

  const totalPage = useMemo(
    () => Math.ceil(dataSize / COUNTRIES_PER_PAGE),
    [dataSize]
  );

  useEffect(
    function () {
      setSearchParams({ page: currentPage.toString() });
    },
    [currentPage, setSearchParams]
  );

  useEffect(
    function () {
      if (searchValue === "" && filter === "") return;
      setCurrentPage(1);
    },
    [searchValue, filter]
  );

  if (isError) {
    console.log(error);
    return <Error />;
  }

  if (isLoading) return <Spinner />;

  const startIndex = (currentPage - 1) * COUNTRIES_PER_PAGE;
  const endIndex = startIndex + COUNTRIES_PER_PAGE;

  filteredCountries = filteredCountries?.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setCurrentPage((prevState) => Math.max(prevState - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevState) => Math.min(prevState + 1, totalPage));
  };

  return (
    <>
      <StyledHomepage>
        <SearchFilterMenu>
          <Search
            searchValue={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Filter />
        </SearchFilterMenu>

        <Countries>
          {filteredCountries?.length === 0 ? (
            <SearchNotFound>
              No country matches your search in this region.
            </SearchNotFound>
          ) : (
            filteredCountries?.map((country) => (
              <Card
                key={country.name}
                cap={country.capital}
                reg={country.region}
                name={country.name}
                pop={country.population}
                img={country.flags.png}
                country={country}
              />
            ))
          )}
        </Countries>
      </StyledHomepage>
      {totalPage > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPage={totalPage}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          startIndex={startIndex}
          endIndex={endIndex}
          dataSize={dataSize}
        />
      )}
    </>
  );
}
