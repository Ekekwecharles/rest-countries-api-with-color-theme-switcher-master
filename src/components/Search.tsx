import { useEffect, useRef, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setSearchRef } from "../redux/mySlice";
import { StoreType } from "../store";

const SearchContainer = styled.div`
  position: relative;
  /* width: 400px; */
`;

const Input = styled.input`
  border: none;
  /* width: 400px; */
  width: 100%;
  padding: 1.5rem 5rem;
  border-radius: 5px;
  /* color: var(--color-input); */
  color: var(--color-text);
  background-color: var(--elements-bg);

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-family: inherit;
    color: inherit;
    opacity: 0.7;
  }
`;

export default function Search() {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const [searchWidth, setSearchWidth] = useState("400px");

  const { searchRef, filterRef, searchFilteContainerRef } = useSelector(
    (state: StoreType) => state.mySlice
  );

  useEffect(
    function () {
      if (ref.current) dispatch(setSearchRef(ref));
    },
    [dispatch, ref]
  );

  useEffect(
    function () {
      function handleResize() {
        if (
          searchRef?.current &&
          filterRef?.current &&
          searchFilteContainerRef?.current
        ) {
          const containerWidth = searchFilteContainerRef.current.offsetWidth;
          const searchWidth = searchRef.current.offsetWidth;
          const filterWidth = filterRef.current.offsetWidth;
          const threshold = 400 + 200 + 21;

          if (threshold > containerWidth) {
            setSearchWidth("100%");
          }

          if (threshold < containerWidth) {
            setSearchWidth("400px");
          }
        }
      }

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    },
    [filterRef, searchRef, searchFilteContainerRef]
  );

  return (
    <SearchContainer ref={ref} style={{ width: `${searchWidth}` }}>
      <FaMagnifyingGlass
        style={{
          fontSize: "1.4rem",
          fill: "var(--color-text)",
          position: "absolute",
          top: "50%",
          marginLeft: "1.7rem",
          transform: "translateY(-50%)",
        }}
      />
      <Input placeholder="Search for a country..." />
    </SearchContainer>
  );
}
