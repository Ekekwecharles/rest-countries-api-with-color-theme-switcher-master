import styled from "styled-components";
import { HiOutlineMoon } from "react-icons/hi2";
import { useDarkMode } from "../context/DarkModeContext";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 5%;
  background-color: var(--elements-bg);
  position: relative;

  -webkit-box-shadow: 0px 1.5px 4px 0px var(--box-shadow-color);
  -moz-box-shadow: 0px 1.5px 4px 0px var(--box-shadow-color);
  box-shadow: 0px 1.5px 4px 0px var(--box-shadow-color);

  & div:first-child {
    font-size: 2.5rem;
    font-weight: 900;
  }

  & div:last-child {
    display: flex;
    gap: 0.5rem;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

const DarkModeContainer = styled.div`
  cursor: pointer;
`;

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <StyledHeader>
      <div>Where is the world?</div>
      <DarkModeContainer onClick={toggleDarkMode}>
        {isDarkMode && (
          <HiOutlineMoon
            style={{
              fontSize: "1.5rem",
              fill: "white",
              stroke: "var(--elements-bg)",
            }}
          />
        )}
        {!isDarkMode && (
          <HiOutlineMoon style={{ fontSize: "1.5rem", stroke: "black" }} />
        )}
        <p>Dark Mode</p>
      </DarkModeContainer>
    </StyledHeader>
  );
}
