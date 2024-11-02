import styled from "styled-components";
import { useSearchFilter } from "../context/SearchFilterContext";

const StyledFilterOption = styled.li`
  cursor: pointer;
  padding: 0.5rem 2rem;

  &:hover {
    background-color: var(--color-bg);
  }
`;

type filterOptionProps = {
  value: string;
  children: string;
};

export default function FilterOption({ children, value }: filterOptionProps) {
  const { setFilter, toggleFilterOptions } = useSearchFilter();

  function handleFilter() {
    setFilter(value);
    toggleFilterOptions();
  }

  return (
    <StyledFilterOption onClick={handleFilter}>{children}</StyledFilterOption>
  );
}
