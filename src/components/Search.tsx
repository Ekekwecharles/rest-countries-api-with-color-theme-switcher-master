import { useEffect, useRef, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setSearchWidth } from "../redux/mySlice";
import { StoreType } from "../store";
import { useSearchFilter } from "../context/SearchFilterContext";

const SearchContainer = styled.div`
  position: relative;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  padding: 1.5rem 5rem;
  border-radius: 5px;
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

interface Searchprops {
  searchValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Search({ searchValue, onChange }: Searchprops) {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const [searchElementWidth, setSearchElementWidth] = useState("400px");
  const { setWindowWidth } = useSearchFilter();

  const { searchFilterContainerWidth } = useSelector(
    (state: StoreType) => state.mySlice
  );

  useEffect(
    function () {
      if (ref.current) dispatch(setSearchWidth(ref.current.offsetWidth));
    },
    [dispatch, ref]
  );

  useEffect(
    function () {
      function handleResize() {
        if (searchFilterContainerWidth) {
          setWindowWidth(window.innerWidth);
          const containerWidth = searchFilterContainerWidth;
          const threshold = 400 + 200 + 21;

          if (threshold > containerWidth) {
            setSearchElementWidth("100%");
          }

          if (threshold < containerWidth) {
            setSearchElementWidth("400px");
          }
        }
      }

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    },
    [searchFilterContainerWidth, setWindowWidth]
  );

  return (
    <SearchContainer ref={ref} style={{ width: `${searchElementWidth}` }}>
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
      <Input
        placeholder="Search for a country..."
        value={searchValue}
        onChange={onChange}
      />
    </SearchContainer>
  );
}
