import { useEffect, useState } from "react";
import { getCountryWithCode } from "../services/apiCountries";
import styled from "styled-components";
import StyledButton from "./StyledButton";

type BorderProps = {
  borderCountryCode: string;
};

const BorderCountry = styled.div``;

export default function Border({ borderCountryCode }: BorderProps) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await getCountryWithCode(borderCountryCode);
      const data = result[0].name.common;
      setData(data);
    }

    fetchData();
  }, [borderCountryCode]);

  if (!data) return <div>Loading...</div>;

  return (
    <BorderCountry>
      <StyledButton clickable={false}>{data}</StyledButton>
    </BorderCountry>
  );
}
