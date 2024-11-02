import { useState } from "react";
import styled from "styled-components";
import { HiChevronDown } from "react-icons/hi2";
import FilterOption from "./FilterOption";
import { useSearchFilter } from "../context/SearchFilterContext";
import { useOutsideClick } from "../hooks/useOutsideClick";

const FilterContainer = styled.div`
  width: 20rem;
  position: absolute;
  right: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
`;

const FilterSelected = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  background-color: var(--elements-bg);
  border-radius: 5px;
  padding: 1.2rem 2rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

const FilterOptions = styled.ul<{ isOpen: boolean }>`
  background-color: var(--elements-bg);
  border-radius: 5px;
  font-size: 1.6rem;
  padding: 1rem 0;
  list-style: none;
  font-weight: 600;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  /* max-height: ${({ isOpen }) => (isOpen ? "200px" : "0")}; */
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: all 0.5sec ease;
`;

export default function Filter() {
  const { filterOptionsOpen, closeFilterOptions, toggleFilterOptions } =
    useSearchFilter();

  const ref = useOutsideClick(closeFilterOptions);

  return (
    <FilterContainer ref={ref}>
      <FilterSelected onClick={() => toggleFilterOptions()}>
        <p>Filter by Region</p> <HiChevronDown />
      </FilterSelected>

      {/* {filterOptionsOpen && ( */}
      <FilterOptions isOpen={filterOptionsOpen}>
        <FilterOption value="africa">Africa</FilterOption>
        <FilterOption value="america">America</FilterOption>
        <FilterOption value="asia">Asia</FilterOption>
        <FilterOption value="europe">Europe</FilterOption>
        <FilterOption value="oceania">Oceania</FilterOption>
      </FilterOptions>
      {/* )} */}
    </FilterContainer>
  );
}
