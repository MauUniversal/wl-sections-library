import aviatorImage from "@assets/placeHolders/aviator.jpg";
import blackjackLiveImage from "@assets/placeHolders/blackjackLive.jpg";
import bonanzaImage from "@assets/placeHolders/bonanza.jpg";
import bookOfHeadImage from "@assets/placeHolders/bookOfHead.jpg";
import fireStrikeImage from "@assets/placeHolders/fireStrike.jpg";
import rouletteImage from "@assets/placeHolders/roulette.jpg";
import type { CasinoGameCardData } from "./types";

export const casinoGames: CasinoGameCardData[] = [
  {
    id: "casino-sweet-bonanza",
    title: "Sweet Bonanza",
    provider: "Pragmatic Play",
    image: bonanzaImage,
    badge: "Nuevo",
    badgeVariant: "nuevo",
  },
  {
    id: "casino-aviator",
    title: "Aviator",
    provider: "Spribe",
    image: aviatorImage,
    badge: "Hot",
    badgeVariant: "hot",
  },
  {
    id: "casino-blackjack-live",
    title: "Blackjack Live",
    provider: "Evolution",
    image: blackjackLiveImage,
    badge: "Vivo",
    badgeVariant: "vivo",
  },
  {
    id: "casino-roulette-vip",
    title: "Roulette VIP",
    provider: "NetEnt",
    image: rouletteImage,
    badge: "Vivo",
    badgeVariant: "vivo",
  },
  {
    id: "casino-fire-strike",
    title: "Fire Strike",
    provider: "Pragmatic Play",
    image: fireStrikeImage,
  },
  {
    id: "casino-book-of-dead",
    title: "Book of Dead",
    provider: "Play'n GO",
    image: bookOfHeadImage,
    badge: "Hot",
    badgeVariant: "hot",
  },
];

export const defaultCasinoGamesTitle = "Juegos de Casino";
