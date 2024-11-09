export async function getCountries() {
  const API_URL = "https://fake-api-rest-countries.vercel.app/api/server";

  try {
    const res = await fetch(API_URL);
    if (!res.ok) {
      throw new Error("Network not Available");
    }
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("💥💥💥", (e as Error).message);
    throw e;
  }
}

export async function getCountryWithCode(code: string) {
  const API_URL = "https://restcountries.com/v3.1/alpha";

  try {
    const res = await fetch(`${API_URL}/${code}`);
    if (!res.ok) {
      throw new Error("Network not Available");
    }
    const data = await res.json();

    return data;
  } catch (e) {
    console.log("💥💥💥", (e as Error).message);
    throw e;
  }
}

export async function getCountryWithFullName(name: string) {
  const API_URL = `https://restcountries.com/v3.1/name/${name}?fullText=true&fields=name,flags,population,region,capital,subregion,currencies,languages,borders,tld`;
  console.log("Get Country with full name is called");

  try {
    const res = await fetch(API_URL);
    if (!res.ok) {
      throw new Error("Network not Available");
    }
    let data = await res.json();
    data = data[0];

    const newData = {
      name: data.name.common,
      nativeName: (Object.values(data.name.nativeName)[0] as { common: string })
        ?.common,
      population: data.population,
      region: data.region,
      subregion: data.subregion,
      topLevelDomain: data.tld,
      languages: Object.keys(data.languages).map((key) => ({
        name: data.languages[key],
      })),
      flags: { png: data.flags.png },
      currencies: Object.keys(data.currencies).map((key) => ({
        name: data.currencies[key].name,
      })),
      capital: data.capital[0],
      borders: data.borders,
    };

    if (newData.name.toLowerCase() === "afghanistan") {
      newData.flags = { png: "https://flagcdn.com/w320/af.png" };
    }

    console.log("NEWDATA", newData);
    return newData;
  } catch (e) {
    console.log("💥💥💥", (e as Error).message);
    throw e;
  }
}
