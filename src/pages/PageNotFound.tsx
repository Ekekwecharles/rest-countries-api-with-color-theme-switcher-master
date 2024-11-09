import { Link } from "react-router-dom";
import styled from "styled-components";

const PageNotFoundContainer = styled.div`
  display: flex;
  height: 100vh;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -4rem;
  background-color: var(--color-bg);
  padding: 0 2rem;
  text-align: center;

  h1 {
    font-size: 5rem;
  }

  p {
    font-size: 2rem;
  }

  a {
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    color: white;
    background-color: #2327e6;
    padding: 1rem 2rem;
    border-radius: 7px;
  }
`;

export default function PageNotFound() {
  return (
    <PageNotFoundContainer>
      <h1>Oops! Something went wrong.</h1>
      <p>
        We couldn't find the page you were looking for. It might have been
        removed, renamed, or did not exist in the first place.
      </p>

      <Link to={"/"}>Go Back to Home</Link>
    </PageNotFoundContainer>
  );
}
