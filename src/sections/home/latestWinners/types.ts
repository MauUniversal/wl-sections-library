export type LatestWinnersTab = "live" | "top10";

export interface LatestWinnerCardData {
  id: string;
  image: string;
  betAmount: string;
  profit: string;
  multiplier: string;
  time: string;
  player: string;
  isWin: boolean;
}
