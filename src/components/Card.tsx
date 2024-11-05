import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledCard = styled.div`
  border-radius: 5px;
  overflow: hidden;
  background-color: var(--elements-bg);
  /* box-shadow: 0px 2px 10px 0px var(--box-shadow-color); */
  box-shadow: 0px 0px 10px 2px var(--box-shadow-color);
  cursor: pointer;

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
  name: string;
  country: object;
};

export default function Card({ img, pop, reg, cap, name, country }: cardProps) {
  const navigate = useNavigate();

  return (
    <StyledCard
      onClick={() => navigate("/country-info", { state: { country } })}
    >
      <div>
        <CountryImage src={img} alt={name} />
      </div>

      <CardDetailsContainer>
        <CardHeader>{name}</CardHeader>

        <div>
          <p>
            Populations: <span>{pop}</span>
          </p>
          <p>
            Region: <span>{reg}</span>
          </p>
          <p>
            Capital: <span>{cap}</span>
          </p>
        </div>
      </CardDetailsContainer>
    </StyledCard>
  );
}
