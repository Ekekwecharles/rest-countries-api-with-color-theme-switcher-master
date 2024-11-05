import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setSearchFilterContainerWidth } from "../redux/mySlice";
import { useSearchFilter } from "../context/SearchFilterContext";

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
  const { windowWidth } = useSearchFilter();

  useEffect(
    function () {
      if (ref.current)
        dispatch(setSearchFilterContainerWidth(ref.current.offsetWidth));
    },
    [dispatch, ref, windowWidth]
  );
  return <StyledSearchFilterMenu ref={ref}>{children}</StyledSearchFilterMenu>;
}
