// import { useLocation, useParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Border from "../components/Border";
import StyledButton from "../components/StyledButton";

import { HiArrowLongLeft } from "react-icons/hi2";
import { useSearchFilter } from "../context/SearchFilterContext";
import { useEffect } from "react";
import { getCountryWithFullName } from "../services/apiCountries";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../ui/Spinner";
import Error from "./Error";

const CountryInfoContainer = styled.div`
  padding: 4rem 5rem 0;
  padding-bottom: 0;

  background-color: var(--color-bg);
  color: var(--color-text);
  height: 100%;

  @media (max-width: 31.35em) {
    padding: 3rem;
  }

  & svg {
    font-size: 2rem;
  }

  span {
    font-weight: normal;
    font-size: 1.4rem;
  }

  h4 {
    font-weight: 750;
    font-size: 1.7rem;
    margin-right: 1rem;
  }
`;

const CountryInfo = styled.div`
  margin-top: 4rem;
  display: flex;
  gap: 10rem;
  align-items: center;

  @media (max-width: 68.75em) {
    gap: 5rem;
  }

  @media (max-width: 59em) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const ImageContainer = styled.div`
  width: 500px;
  height: 400px;
  flex-shrink: 0;

  @media (max-width: 68.75em) {
    width: 400px;
    height: 300px;
  }

  @media (max-width: 31.35em) {
    width: 100%;
    aspect-ratio: 1.25; /*500/400*/
    height: auto;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  width: 100%;
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: max-content max-content max-content;
  align-content: center;
`;

const CountryName = styled.div`
  grid-column: 1/ -1;
  font-size: 2.3rem;

  h3 {
    font-weight: 900;
  }
`;

const DetailsFirstPart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 31.35em) {
    grid-column: 1/-1;
  }
`;

const DetailsSecondPart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 31.35em) {
    grid-column: 1/-1;
  }
`;

const BorderCountries = styled.div`
  grid-column: 1/ -1;
  display: flex;
  align-items: center;

  @media (max-width: 31.35em) {
    flex-wrap: wrap;
    gap: 1rem;
  }

  h4 {
    flex-shrink: 0;
    align-self: start;
    margin-top: 5px;
  }
`;

const FlexSmall = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export default function CountryInfoPage() {
  // const location = useLocation();

  const { countryName } = useParams();
  const { filterOptionsOpen, closeFilterOptions } = useSearchFilter();
  // const newCountry = location.state?.newCountry;
  const newCountry = undefined;

  const {
    data: countryData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["country", countryName],
    queryFn: () => getCountryWithFullName(countryName!),
    enabled: !newCountry && !!countryName,
  });

  const country = newCountry || countryData;

  useEffect(
    function () {
      if (filterOptionsOpen) closeFilterOptions();
    },
    [closeFilterOptions, filterOptionsOpen]
  );

  useEffect(
    function () {
      if (country) {
        document.title = `${country?.name}`;
      } else {
        document.title = "Loading country details...";
      }
    },
    [country]
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Error />;
    console.log("💥💥💥", error);
  }

  return (
    <CountryInfoContainer>
      <StyledButton>
        <HiArrowLongLeft /> Back
      </StyledButton>
      <CountryInfo>
        <ImageContainer>
          <Image src={country?.flags.png || ""} />
        </ImageContainer>

        <Info>
          <CountryName>
            <h3>{country?.name}</h3>
          </CountryName>
          <DetailsFirstPart>
            <h4>
              Native Name: <span>{country?.nativeName}</span>
            </h4>
            <h4>
              Population: <span>{country?.population.toLocaleString()}</span>
            </h4>
            <h4>
              Region: <span>{country?.region}</span>
            </h4>
            <h4>
              Sub Region: <span>{country?.subregion}</span>
            </h4>
            <h4>
              Capital: <span>{country?.capital}</span>
            </h4>
          </DetailsFirstPart>
          <DetailsSecondPart>
            <h4>
              Top Level Domain:{" "}
              <span>{country?.topLevelDomain?.[0] || "N/A"}</span>
            </h4>
            <h4>
              Currencies: <span>{country?.currencies?.[0]?.name || "N/A"}</span>
            </h4>
            <h4>
              Languages:{" "}
              <span>
                {country?.languages
                  .map((languageObj: { name: string }) => languageObj.name)
                  .join(", ")}
              </span>
            </h4>
          </DetailsSecondPart>
          <BorderCountries>
            <h4>Border Countries: </h4>
            <FlexSmall>
              {country?.borders && country.borders.length > 0 ? (
                country.borders.map((borderCountryCode: string) => (
                  <Border
                    borderCountryCode={borderCountryCode}
                    key={borderCountryCode}
                  />
                ))
              ) : (
                <StyledButton clickable={false}>
                  No Bordering Countries
                </StyledButton>
              )}
            </FlexSmall>
          </BorderCountries>
        </Info>
      </CountryInfo>
    </CountryInfoContainer>
  );
}

// WORKING VERSION 1
// export default function CountryInfoPage() {
//   const location = useLocation();
//   // const { country } = location.state || {};

//   const { countryName } = useParams();
//   const { filterOptionsOpen, closeFilterOptions } = useSearchFilter();
//   const [countryApi, setCountryApi] = useState<Country | undefined>(undefined);
//   const country = location.state?.newCountry || countryApi;

//   useEffect(function () {
//     async function getCountrywithfullname() {
//       if (!country) {
//         const countryFromParam = await getCountryWithFullName(countryName!);
//         setCountryApi(countryFromParam);
//       }
//     }

//     getCountrywithfullname();
//   }, []);

//   useEffect(
//     function () {
//       if (filterOptionsOpen) closeFilterOptions();
//     },
//     [closeFilterOptions, filterOptionsOpen]
//   );

//   return (
//     <CountryInfoContainer>
//       <StyledButton>
//         <HiArrowLongLeft /> Back
//       </StyledButton>
//       <CountryInfo>
//         <ImageContainer>
//           <Image src={country?.flags.png || ""} />
//         </ImageContainer>

//         <Info>
//           <CountryName>
//             <h3>{country?.name}</h3>
//           </CountryName>
//           <DetailsFirstPart>
//             <h4>
//               Native Name: <span>{country?.nativeName}</span>
//             </h4>
//             <h4>
//               Population: <span>{country?.population}</span>
//             </h4>
//             <h4>
//               Region: <span>{country?.region}</span>
//             </h4>
//             <h4>
//               Sub Region: <span>{country?.subregion}</span>
//             </h4>
//             <h4>
//               Capital: <span>{country?.capital}</span>
//             </h4>
//           </DetailsFirstPart>
//           <DetailsSecondPart>
//             <h4>
//               Top Level Domain: <span>{country?.topLevelDomain[0]}</span>
//             </h4>
//             <h4>
//               Currencies: <span>{country?.currencies[0].name}</span>
//             </h4>
//             <h4>
//               Languages:{" "}
//               <span>
//                 {country?.languages
//                   .map((languageObj: { name: string }) => languageObj.name)
//                   .join(", ")}
//               </span>
//             </h4>
//           </DetailsSecondPart>
//           <BorderCountries>
//             <h4>Border Countries: </h4>
//             <FlexSmall>
//               {country?.borders && country.borders.length > 0 ? (
//                 country.borders.map((borderCountryCode: string) => (
//                   <Border
//                     borderCountryCode={borderCountryCode}
//                     key={borderCountryCode}
//                   />
//                 ))
//               ) : (
//                 <StyledButton>No Bordering Countries</StyledButton>
//               )}
//             </FlexSmall>
//           </BorderCountries>
//         </Info>
//       </CountryInfo>
//     </CountryInfoContainer>
//   );
// }

// NOT WORKING VERSION 2 => figure out later
// export default function CountryInfoPage() {
//   const location = useLocation();
//   const { countryName } = useParams();
//   const { filterOptionsOpen, closeFilterOptions } = useSearchFilter();
//   const [countryApi, setCountryApi] = useState([]);
//   // const { country } = location.state || {};
//   const country = location.state?.country || countryApi[0];
//   // console.log("DEBUGGING", country, countryName);

//   useEffect(function () {
//     async function getCountrywithfullname() {
//       console.log("getCountrywithfullname was called");
//       if (!country) {
//         // console.log("DEBUGGING", country, countryName);
//         const countryFromParam = await getCountryWithFullName(countryName!);
//         setCountryApi(countryFromParam);
//         console.log("SEARCH WITH FULL NAME", countryFromParam);
//         console.log("FROM VERCEL API", country);
//       }
//     }

//     getCountrywithfullname();
//   }, []);

//   useEffect(
//     function () {
//       if (filterOptionsOpen) closeFilterOptions();
//     },
//     [closeFilterOptions, filterOptionsOpen]
//   );

//   type Country = {
//     nativeName?: string;
//     name?: {
//       nativeName?: {
//         [key: string]: { common: string };
//       };
//     };
//   };

//   function getNativeName(country: Country): string {
//     // Check if nativeName is already a string
//     if (typeof country?.nativeName === "string") return country.nativeName;

//     // Access `common` property safely
//     const nativeNameObj = Object.values(country?.name?.nativeName ?? {})[0];
//     return typeof nativeNameObj === "object" &&
//       nativeNameObj !== null &&
//       "common" in nativeNameObj
//       ? (nativeNameObj as { common: string }).common
//       : "N/A";
//   }

//   return (
//     <CountryInfoContainer>
//       <StyledButton>
//         <HiArrowLongLeft /> Back
//       </StyledButton>
//       <CountryInfo>
//         <ImageContainer>
//           <Image src={country?.flags?.png || ""} />
//         </ImageContainer>

//         <Info>
//           <CountryName>
//             <h3>{country?.name || country?.common?.name}</h3>
//           </CountryName>
//           <DetailsFirstPart>
//             <h4>Native Name: {getNativeName(country)}</h4>
//             <h4>
//               Population:{" "}
//               <span>{country?.population.toLocaleString() || "N/A"}</span>
//             </h4>
//             <h4>
//               Region: <span>{country?.region}</span>
//             </h4>
//             <h4>
//               Sub Region: <span>{country?.subregion}</span>
//             </h4>
//             <h4>
//               Capital: <span>{country?.capital || country?.capital[0]}</span>
//             </h4>
//           </DetailsFirstPart>
//           <DetailsSecondPart>
//             <h4>
//               Top Level Domain:{" "}
//               <span>{country?.topLevelDomain?.[0] || country?.tld?.[0]}</span>
//             </h4>
//             <h4>
//               Currencies:{" "}
//               {/* <span>
//                 {country?.currencies[0]?.name ||
//                   (
//                     Object.values(country?.currencies || {})[0] as {
//                       name: string;
//                     }
//                   )?.name}
//               </span> */}
//               <span>
//                 {country?.currencies
//                   ? Array.isArray(country.currencies)
//                     ? country.currencies[0]?.name
//                     : (Object.values(country.currencies)[0] as { name: string })
//                         ?.name
//                   : "N/A"}
//               </span>
//             </h4>
//             <h4>
//               Languages:{" "}
//               {/* <span>
//                 {country?.languages
//                   .map((languageObj: { name: string }) => languageObj.name)
//                   .join(", ") ||
//                   Object.values(country?.languages || {})?.join(", ")}
//               </span> */}
//               <span>
//                 {Array.isArray(country?.languages)
//                   ? country.languages
//                       .map((languageObj: { name: string }) => languageObj.name)
//                       .join(", ")
//                   : Object.values(country?.languages || {}).join(", ")}
//               </span>
//             </h4>
//           </DetailsSecondPart>
//           <BorderCountries>
//             <h4>Border Countries: </h4>
//             <FlexSmall>
//               {country?.borders && country?.borders.length > 0 ? (
//                 country.borders.map((borderCountryCode: string) => (
//                   <Border
//                     borderCountryCode={borderCountryCode}
//                     key={borderCountryCode}
//                   />
//                 ))
//               ) : (
//                 <StyledButton>No Bordering Countries</StyledButton>
//               )}
//             </FlexSmall>
//           </BorderCountries>
//         </Info>
//       </CountryInfo>
//     </CountryInfoContainer>
//   );
// }
