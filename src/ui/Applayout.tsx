import styled from "styled-components";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Main = styled.main`
  flex: 1;
`;

export default function Applayout() {
  return (
    <StyledLayout>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </StyledLayout>
  );
}
