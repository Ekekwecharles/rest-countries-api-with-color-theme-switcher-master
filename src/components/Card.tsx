import styled from "styled-components";

const StyledCard = styled.div`
  border-radius: 5px;
  overflow: hidden;
  background-color: var(--elements-bg);

  p {
    font-size: 1.4rem;
    font-weight: bold;
    margin-top: 1rem;
  }

  span {
    font-weight: normal;
  }
`;

const CardHeader = styled.h2`
  font-size: 2.5rem;
  font-weight: bolder;
  margin-bottom: 2rem;
`;

const CardDetailsContainer = styled.div`
  padding: 2rem 3rem 4rem;
`;

const CountryImage = styled.img`
  width: 100%;
  display: block;
`;

export default function Card() {
  return (
    <StyledCard>
      <div>
        <CountryImage src="germany.png" alt="germany" />
      </div>

      <CardDetailsContainer>
        <CardHeader>Germany</CardHeader>

        <div>
          <p>
            Populations: <span>32323232</span>
          </p>
          <p>
            Regions: <span>Europe</span>
          </p>
          <p>
            Capital: <span>Berlin</span>
          </p>
        </div>
      </CardDetailsContainer>
    </StyledCard>
  );
}
