import styled from "styled-components";

const StyledCard = styled.div`
  border-radius: 5px;
  overflow: hidden;
  background-color: var(--elements-bg);
  box-shadow: 0px 2px 10px 0px var(--box-shadow-color);

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
  height: 20rem;
  display: block;
`;

type cardProps = {
  img: string;
  pop: number;
  reg: string;
  cap: string;
  country: string;
};

export default function Card({ img, pop, reg, cap, country }: cardProps) {
  return (
    <StyledCard>
      <div>
        <CountryImage src={img} alt={country} />
      </div>

      <CardDetailsContainer>
        <CardHeader>{country}</CardHeader>

        <div>
          <p>
            Populations: <span>{pop}</span>
          </p>
          <p>
            Regions: <span>{reg}</span>
          </p>
          <p>
            Capital: <span>{cap}</span>
          </p>
        </div>
      </CardDetailsContainer>
    </StyledCard>
  );
}
