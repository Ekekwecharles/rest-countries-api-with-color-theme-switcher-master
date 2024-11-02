import styled from "styled-components";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Card from "../components/Card";
import Filter from "../components/Filter";

const StyledHomepage = styled.div`
  background-color: var(--color-bg);
  padding: 2.5rem 4rem;
  height: 100%;
`;

const Input = styled.input`
  border: none;
  width: 400px;
  padding: 1.5rem 5rem;
  border-radius: 5px;
  color: var(--color-input);

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-family: inherit;
    color: var(--color-input);
    opacity: 0.7;
  }
`;

const SearchFilterMenu = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  /* border: 1px solid red; */
`;

const Countries = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 4rem;
  margin-top: 4rem;
`;

export default function Homepage() {
  return (
    <StyledHomepage>
      <SearchFilterMenu>
        <div style={{ position: "relative" }}>
          <FaMagnifyingGlass
            style={{
              fontSize: "1.4rem",
              fill: " var(--color-input)",
              position: "absolute",
              top: "50%",
              marginLeft: "1.7rem",
              transform: "translateY(-50%)",
            }}
          />
          <Input placeholder="Search for a country..." />
        </div>
        <Filter />
      </SearchFilterMenu>

      <Countries>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Countries>
    </StyledHomepage>
  );
}
