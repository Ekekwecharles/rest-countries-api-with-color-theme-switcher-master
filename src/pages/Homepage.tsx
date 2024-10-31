import styled from "styled-components";
import { FaMagnifyingGlass } from "react-icons/fa6";

const StyledHomepage = styled.div`
  background-color: var(--color-bg);
  padding: 2.5rem 4rem;
  height: 100%;
`;

const Input = styled.input`
  border: none;
  width: 300px;
  padding: 1rem 4rem;
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
              marginLeft: "1.2rem",
              transform: "translateY(-50%)",
            }}
          />
          <Input placeholder="Search for a country..." />
        </div>
        <div>Filter</div>
      </SearchFilterMenu>

      <div></div>
    </StyledHomepage>
  );
}
