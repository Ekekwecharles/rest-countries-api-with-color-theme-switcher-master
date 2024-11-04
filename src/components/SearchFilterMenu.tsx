import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setSearchFilterContainerRef } from "../redux/mySlice";

const StyledSearchFilterMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
  position: relative;
`;

type searchFilterMenuProps = {
  children: React.ReactNode;
};

export default function SearchFilterMenu({ children }: searchFilterMenuProps) {
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(
    function () {
      if (ref.current) dispatch(setSearchFilterContainerRef(ref));
    },
    [dispatch, ref]
  );
  return <StyledSearchFilterMenu ref={ref}>{children}</StyledSearchFilterMenu>;
}
