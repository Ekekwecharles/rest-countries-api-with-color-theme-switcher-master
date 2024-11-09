import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  padding: 0px 4rem 3rem;

  @media (max-width: 31.35em) {
    padding: 0px 1rem 3rem;
  }

  p {
    font-size: 1.5rem;

    @media (max-width: 31.35em) {
      font-size: 1.3rem;
    }
  }

  button {
    border-radius: 5px;
    border: none;
    width: 9rem;
    /* padding: 1rem; */
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    padding: 0.7rem 0;
    background: none;
    color: inherit;
    cursor: pointer;
    transition: all 0.2s ease;

    &:disabled {
      cursor: not-allowed;
      pointer-events: none;
    }

    svg {
      font-size: 1.5rem;
      font-weight: 900;
    }

    &:hover {
      background: var(--color-text);
      color: var(--color-bg);
    }
  }

  /* span {
    display: inline-block;
  } */
`;

const Bold = styled.span`
  font-weight: 700;
`;

const PaginationBtnContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

type PaginationProps = {
  currentPage: number;
  totalPage: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  startIndex: number;
  endIndex: number;
  dataSize: number;
};

export default function Pagination({
  currentPage,
  totalPage,
  handleNextPage,
  handlePrevPage,
  startIndex,
  endIndex,
  dataSize,
}: PaginationProps) {
  return (
    <PaginationContainer>
      <p>
        Showing <Bold>{startIndex + 1}</Bold> to{" "}
        <Bold>{Math.min(endIndex, dataSize)}</Bold> of <Bold>{dataSize}</Bold>{" "}
        results
      </p>

      <PaginationBtnContainer>
        <button disabled={currentPage === 1} onClick={handlePrevPage}>
          <HiChevronLeft /> <span>Previous</span>
        </button>
        <button disabled={currentPage === totalPage} onClick={handleNextPage}>
          <span>Next</span>
          <HiChevronRight />
        </button>
      </PaginationBtnContainer>
    </PaginationContainer>
  );
}
