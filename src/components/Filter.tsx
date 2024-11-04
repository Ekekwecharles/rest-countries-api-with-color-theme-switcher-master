import styled from "styled-components";
import { HiChevronDown } from "react-icons/hi2";
import FilterOption from "./FilterOption";
import { useSearchFilter } from "../context/SearchFilterContext";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFilterRef } from "../redux/mySlice";

const FilterContainer = styled.div`
  width: 20rem;
  /* position: absolute; */
  position: relative;
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
  border: 1px solid red;
  position: absolute;
  top: calc(100% + 5px);
  width: 100%;
  border-radius: 5px;
  font-size: 1.6rem;
  padding: 1rem 0;
  list-style: none;
  font-weight: 600;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: all 0.5sec ease;
`;

export default function Filter() {
  const { filterOptionsOpen, closeFilterOptions, toggleFilterOptions } =
    useSearchFilter();

  const ref = useOutsideClick(closeFilterOptions);
  const dispatch = useDispatch();

  useEffect(
    function () {
      if (ref.current) dispatch(setFilterRef(ref));
    },
    [dispatch, ref]
  );

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
