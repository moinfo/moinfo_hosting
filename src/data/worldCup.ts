// FIFA World Cup 2026 (USA / Canada / Mexico): 11 June – 19 July 2026.
// The floating support badge gates on isWorldCupActive() so it appears only
// during the tournament and removes itself afterwards — no manual cleanup.

export const WORLD_CUP_START = new Date("2026-06-11T00:00:00");
export const WORLD_CUP_END = new Date("2026-07-19T23:59:59");

export function isWorldCupActive(now: Date = new Date()): boolean {
  return now >= WORLD_CUP_START && now <= WORLD_CUP_END;
}
