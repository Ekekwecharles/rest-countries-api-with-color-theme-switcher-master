import styled from "styled-components";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const StyledLayout = styled.div``;

const Main = styled.main``;

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
