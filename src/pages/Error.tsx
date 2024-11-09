import styled from "styled-components";

const ErrorContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  margin-top: -4rem;

  h1 {
    font-size: 3.5rem;
  }

  p {
    font-size: 2rem;
    display: flex;
    gap: 1.2rem;
  }

  span {
    font-size: 1.2rem;
    background-color: green;
    padding: 0.5rem 0.8rem;
    border-radius: 5rem;
  }
`;

export default function Error() {
  return (
    <ErrorContainer>
      <h1>A problem has occured</h1>
      <p>
        Try again later <span>Tip: check your network</span>
      </p>
    </ErrorContainer>
  );
}
