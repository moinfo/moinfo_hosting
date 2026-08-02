export interface TldPrice {
  tld: string;
  price: string;
  period: string;
  /**
   * Who the extension is for. TZNIC restricts most .tz second-levels to a
   * category of registrant, so this is eligibility guidance, not marketing —
   * a customer picking .go.tz without being a government body will be refused.
   */
  audienceKey?: string;
}

export const tldPrices: TldPrice[] = [
  { tld: ".co.tz", price: "TSh 19,999", period: "/yr", audienceKey: "tld.audCommercial" },
  { tld: ".or.tz", price: "TSh 19,999", period: "/yr", audienceKey: "tld.audNonProfit" },
  { tld: ".ac.tz", price: "TSh 19,999", period: "/yr", audienceKey: "tld.audAcademic" },
  { tld: ".go.tz", price: "TSh 19,999", period: "/yr", audienceKey: "tld.audGovernment" },
  { tld: ".me.tz", price: "TSh 19,999", period: "/yr", audienceKey: "tld.audPersonal" },
  { tld: ".sc.tz", price: "TSh 19,999", period: "/yr", audienceKey: "tld.audSchools" },
  { tld: ".ne.tz", price: "TSh 19,999", period: "/yr", audienceKey: "tld.audNetwork" },
  { tld: ".com", price: "TSh 55,000", period: "/yr", audienceKey: "tld.audGlobal" },
  { tld: ".tz", price: "TSh 95,000", period: "/yr", audienceKey: "tld.audPremium" },
];
