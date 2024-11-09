export interface Country {
  name: string;
  nativeName?: string;
  population: number;
  region: string;
  subregion?: string;
  topLevelDomain?: string[];
  languages: { name: string }[];
  flags: { png: string };
  currencies: { name: string }[];
  capital: string;
  borders?: string[];
}
