import type { ComponentType } from "react";
import { Footer } from "./footer";
import { GlobalNav } from "./globalNav";
import {
  CasinoGames,
  FeaturedPromotions,
  HeroBanner,
  HeroPlaceholder,
  LatestWinners,
  Recommendations,
  SportsEvents,
} from "./home";
import type { SectionDefinition, SectionType } from "./types";

export const sectionRegistry: Record<SectionType, ComponentType> = {
  GlobalNav,
  Footer,
  HeroBanner,
  FeaturedPromotions,
  Recommendations,
  SportsEvents,
  CasinoGames,
  LatestWinners,
  HeroPlaceholder,
};

export const sectionCatalog: SectionDefinition[] = [
  {
    type: "GlobalNav",
    label: "Header (GlobalNav)",
    scope: "global",
    description:
      "Header sticky de la app: menú, saldo, acciones, búsqueda y jackpots. Chrome de layout.",
  },
  {
    type: "Footer",
    label: "Footer",
    scope: "global",
    description:
      "Footer de layout: marca, redes, nav, pagos, badges y legal. Slot fijo del chrome.",
  },
  {
    type: "HeroBanner",
    label: "Hero Banner",
    scope: "home",
    description:
      "Carrusel hero full-bleed con tag, título, subtítulo, descripción y CTA.",
  },
  {
    type: "FeaturedPromotions",
    label: "Promociones Destacadas",
    scope: "home",
    description: "Carrusel horizontal de promociones con badge y monto.",
  },
  {
    type: "Recommendations",
    label: "Recomendados para vos",
    scope: "home",
    description: "Carrusel de recomendaciones (live/hot) con imagen y meta.",
  },
  {
    type: "SportsEvents",
    label: "Eventos Deportivos",
    scope: "home",
    description: "Carrusel de eventos con equipos y cuotas.",
  },
  {
    type: "CasinoGames",
    label: "Juegos de Casino",
    scope: "home",
    description: "Grilla de juegos de casino con badges Nuevo/Hot/Vivo.",
  },
  {
    type: "LatestWinners",
    label: "Últimos Ganadores",
    scope: "home",
    description: "Lista de ganadores con tabs Live y Top 10.",
  },
  {
    type: "HeroPlaceholder",
    label: "Hero (placeholder)",
    scope: "home",
    description: "Bloque hero de ejemplo para el editor y el runtime.",
  },
];
