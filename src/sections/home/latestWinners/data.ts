import aviatorImage from "@assets/placeHolders/aviator.jpg";
import blackjackLiveImage from "@assets/placeHolders/blackjackLive.jpg";
import bonanzaImage from "@assets/placeHolders/bonanza.jpg";
import bookOfHeadImage from "@assets/placeHolders/bookOfHead.jpg";
import fireStrikeImage from "@assets/placeHolders/fireStrike.jpg";
import rouletteImage from "@assets/placeHolders/roulette.jpg";
import type { LatestWinnerCardData } from "./types";

export const latestWinnersLive: LatestWinnerCardData[] = [
  {
    id: "winner-live-1",
    image: bonanzaImage,
    betAmount: "0.60025884",
    profit: "+0.90038827",
    multiplier: "1.50x",
    time: "15 abr 2026, 22:04",
    player: "b***",
    isWin: true,
  },
  {
    id: "winner-live-2",
    image: fireStrikeImage,
    betAmount: "0.60025884",
    profit: "0.00000000",
    multiplier: "0.00x",
    time: "15 abr 2026, 22:04",
    player: "b***",
    isWin: false,
  },
  {
    id: "winner-live-3",
    image: aviatorImage,
    betAmount: "0.60025884",
    profit: "+0.90038827",
    multiplier: "1.50x",
    time: "15 abr 2026, 22:04",
    player: "b***",
    isWin: true,
  },
  {
    id: "winner-live-4",
    image: blackjackLiveImage,
    betAmount: "0.60025884",
    profit: "+0.90038827",
    multiplier: "1.50x",
    time: "15 abr 2026, 22:04",
    player: "b***",
    isWin: true,
  },
];

export const latestWinnersTop10: LatestWinnerCardData[] = [
  {
    id: "winner-top-1",
    image: bookOfHeadImage,
    betAmount: "12.50000000",
    profit: "+87.50000000",
    multiplier: "7.00x",
    time: "15 abr 2026, 21:40",
    player: "m***",
    isWin: true,
  },
  {
    id: "winner-top-2",
    image: rouletteImage,
    betAmount: "5.00000000",
    profit: "+45.00000000",
    multiplier: "9.00x",
    time: "15 abr 2026, 21:12",
    player: "a***",
    isWin: true,
  },
  {
    id: "winner-top-3",
    image: aviatorImage,
    betAmount: "3.25000000",
    profit: "+32.50000000",
    multiplier: "10.00x",
    time: "15 abr 2026, 20:55",
    player: "c***",
    isWin: true,
  },
  {
    id: "winner-top-4",
    image: bonanzaImage,
    betAmount: "2.00000000",
    profit: "+18.00000000",
    multiplier: "9.00x",
    time: "15 abr 2026, 20:31",
    player: "r***",
    isWin: true,
  },
];

export const defaultLatestWinnersTitle = "Últimos Ganadores";
