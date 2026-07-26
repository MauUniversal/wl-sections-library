import promoImage from "@assets/promos/promo.jpg";
import aviatorImage from "@assets/placeHolders/aviator.jpg";
import riverBocaImage from "@assets/placeHolders/riverBoca.jpg";
import type { RecommendationCardData } from "./types";

export const recommendations: RecommendationCardData[] = [
  {
    id: "rec-river-boca",
    badge: "En vivo",
    badgeVariant: "live",
    category: "Deporte",
    title: "River vs Boca",
    meta: "Copa Libertadores",
    highlight: "67' - 1:1",
    image: riverBocaImage,
  },
  {
    id: "rec-aviator",
    badge: "Hot",
    badgeVariant: "hot",
    category: "Casino",
    title: "Aviator",
    meta: "Spribe",
    highlight: "Juego crash",
    image: aviatorImage,
  },
  {
    id: "rec-welcome",
    badge: "Hot",
    badgeVariant: "hot",
    category: "Casino",
    title: "Sweet Bonanza",
    meta: "Pragmatic Play",
    highlight: "Slots",
    image: promoImage,
  },
];

export const defaultRecommendationsTitle = "Recomendados para vos";
