export async function getCountries() {
  const API_URL = "https://fake-api-rest-countries.vercel.app/api/server";

  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("💥💥💥", (e as Error).message);
  }
}

export async function getCountryWithCode(code: string) {
  const API_URL = "https://restcountries.com/v3.1/alpha";

  try {
    const res = await fetch(`${API_URL}/${code}`);
    const data = await res.json();

    return data;
  } catch (e) {
    console.log("💥💥💥", (e as Error).message);
  }
}
