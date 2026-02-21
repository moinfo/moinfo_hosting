export interface TldPrice {
  tld: string;
  price: string;
  period: string;
}

export const tldPrices: TldPrice[] = [
  { tld: ".co.tz", price: "TSh 20,000", period: "/yr" },
  { tld: ".or.tz", price: "TSh 20,000", period: "/yr" },
  { tld: ".ac.tz", price: "TSh 20,000", period: "/yr" },
  { tld: ".go.tz", price: "TSh 20,000", period: "/yr" },
  { tld: ".me.tz", price: "TSh 20,000", period: "/yr" },
  { tld: ".sc.tz", price: "TSh 20,000", period: "/yr" },
  { tld: ".ne.tz", price: "TSh 20,000", period: "/yr" },
  { tld: ".com", price: "TSh 55,000", period: "/yr" },
  { tld: ".tz", price: "TSh 95,000", period: "/yr" },
];
