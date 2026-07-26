import fs from "node:fs";
import path from "node:path";

const sectionsRoot = path.resolve("src/sections");

const write = (rel, content) => {
  const full = path.join(sectionsRoot, rel);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content.replace(/\r\n/g, "\n"), "utf8");
};

const patchFile = (rel, replacers) => {
  const full = path.join(sectionsRoot, rel);
  let text = fs.readFileSync(full, "utf8");
  for (const [from, to] of replacers) {
    text = text.replaceAll(from, to);
  }
  // drop section page margin — spacing belongs to the host page
  text = text.replace(/\n\s*margin-top: \$\{pxToRem\(16\)\};\n/, "\n");
  fs.writeFileSync(full, text.replace(/\r\n/g, "\n"), "utf8");
};

// ---------- types + data ----------
write(
  "featuredPromotions/types.ts",
  `export type PromoBadgeVariant = "nuevo" | "activo";

export interface FeaturedPromoCardData {
  id: string;
  badge: string;
  badgeVariant: PromoBadgeVariant;
  title: string;
  amount: string;
  image: string;
}
`,
);

write(
  "featuredPromotions/data.ts",
  `import promoImage from "@assets/promos/promo.jpg";
import promoImage2 from "@assets/promos/promo2.jpg";
import promoImage3 from "@assets/promos/promo3.jpg";
import type { FeaturedPromoCardData } from "./types";

export const featuredPromos: FeaturedPromoCardData[] = [
  {
    id: "promo-welcome",
    badge: "Nuevo",
    badgeVariant: "nuevo",
    title: "Bono de Bienvenida",
    amount: "$50,000",
    image: promoImage,
  },
  {
    id: "promo-active",
    badge: "Activo",
    badgeVariant: "activo",
    title: "Bono de Bienvenida",
    amount: "$50,000",
    image: promoImage2,
  },
  {
    id: "promo-welcome-2",
    badge: "Nuevo",
    badgeVariant: "nuevo",
    title: "Bono de Bienvenida",
    amount: "$25,000",
    image: promoImage3,
  },
];

export const defaultFeaturedPromotionsTitle = "Promociones Destacadas 🔥";
`,
);

write(
  "recommendations/types.ts",
  `export type RecommendationBadgeVariant = "live" | "hot";

export interface RecommendationCardData {
  id: string;
  badge: string;
  badgeVariant: RecommendationBadgeVariant;
  category: string;
  title: string;
  meta: string;
  highlight: string;
  image: string;
}
`,
);

write(
  "recommendations/data.ts",
  `import promoImage from "@assets/promos/promo.jpg";
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
`,
);

write(
  "sportsEvents/types.ts",
  `export interface SportsEventOdd {
  label: string;
  value: string;
}

export interface SportsEventCardData {
  id: string;
  league: string;
  time: string;
  homeTeam: string;
  awayTeam: string;
  odds: SportsEventOdd[];
}
`,
);

write(
  "sportsEvents/data.ts",
  `import type { SportsEventCardData } from "./types";

export const sportsEvents: SportsEventCardData[] = [
  {
    id: "event-flamengo-palmeiras",
    league: "Copa Libertadores",
    time: "Hoy 21:00",
    homeTeam: "Flamengo",
    awayTeam: "Palmeiras",
    odds: [
      { label: "Local", value: "2.45" },
      { label: "Empate", value: "3.2" },
      { label: "Visit.", value: "2.9" },
    ],
  },
  {
    id: "event-river-boca",
    league: "Copa Libertadores",
    time: "Mañana 18:30",
    homeTeam: "River Plate",
    awayTeam: "Boca Juniors",
    odds: [
      { label: "Local", value: "2.10" },
      { label: "Empate", value: "3.40" },
      { label: "Visit.", value: "3.25" },
    ],
  },
  {
    id: "event-barcelona-madrid",
    league: "La Liga",
    time: "Sáb 16:00",
    homeTeam: "Barcelona",
    awayTeam: "Real Madrid",
    odds: [
      { label: "Local", value: "2.30" },
      { label: "Empate", value: "3.50" },
      { label: "Visit.", value: "2.85" },
    ],
  },
  {
    id: "event-city-liverpool",
    league: "Premier League",
    time: "Dom 14:00",
    homeTeam: "Man. City",
    awayTeam: "Liverpool",
    odds: [
      { label: "Local", value: "2.05" },
      { label: "Empate", value: "3.60" },
      { label: "Visit.", value: "3.40" },
    ],
  },
  {
    id: "event-psg-marseille",
    league: "Ligue 1",
    time: "Dom 21:00",
    homeTeam: "PSG",
    awayTeam: "Marseille",
    odds: [
      { label: "Local", value: "1.55" },
      { label: "Empate", value: "4.10" },
      { label: "Visit.", value: "5.50" },
    ],
  },
];

export const defaultSportsEventsTitle = "Eventos Deportivos";
`,
);

write(
  "casinoGames/types.ts",
  `export type CasinoGameBadgeVariant = "nuevo" | "hot" | "vivo";

export interface CasinoGameCardData {
  id: string;
  title: string;
  provider: string;
  image: string;
  badge?: string;
  badgeVariant?: CasinoGameBadgeVariant;
}
`,
);

write(
  "casinoGames/data.ts",
  `import aviatorImage from "@assets/placeHolders/aviator.jpg";
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
`,
);

write(
  "latestWinners/types.ts",
  `export type LatestWinnersTab = "live" | "top10";

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
`,
);

write(
  "latestWinners/data.ts",
  `import aviatorImage from "@assets/placeHolders/aviator.jpg";
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
`,
);

// ---------- patch imports in cards / elements ----------
const typeImportPatches = [
  ['from "../../types"', 'from "./types"'],
  ["from '../../types'", "from './types'"],
];

for (const file of [
  "featuredPromotions/PromoCard.tsx",
  "featuredPromotions/PromoCard.elements.ts",
  "recommendations/RecommendationCard.tsx",
  "recommendations/RecommendationCard.elements.ts",
  "sportsEvents/SportsEventCard.tsx",
  "casinoGames/CasinoGameCard.tsx",
  "casinoGames/CasinoGameCard.elements.ts",
  "latestWinners/LatestWinnerCard.tsx",
]) {
  patchFile(file, typeImportPatches);
}

for (const file of [
  "featuredPromotions/FeaturedPromotions.elements.ts",
  "recommendations/Recommendations.elements.ts",
  "sportsEvents/SportsEvents.elements.ts",
  "casinoGames/CasinoGames.elements.ts",
  "latestWinners/LatestWinners.elements.ts",
]) {
  patchFile(file, []);
}

// ---------- rewrite main section components with injectable props ----------
write(
  "featuredPromotions/FeaturedPromotions.tsx",
  `import { ArrowForwardIcon } from "@assets/icons";
import { Carousel } from "@shared/ui/carousels/carousel/Carousel";
import {
  defaultFeaturedPromotionsTitle,
  featuredPromos as defaultItems,
} from "./data";
import type { FeaturedPromoCardData } from "./types";
import { PromoCard } from "./PromoCard";
import {
  FeaturedPromotionsElement,
  FeaturedPromotionsHeaderElement,
  FeaturedPromotionsSeeAllElement,
  FeaturedPromotionsSeeAllIconElement,
  FeaturedPromotionsTitleElement,
} from "./FeaturedPromotions.elements";

interface FeaturedPromotionsProps {
  title?: string;
  items?: FeaturedPromoCardData[];
  seeAllLabel?: string;
  onSeeAllPress?: () => void;
}

export const FeaturedPromotions = ({
  title = defaultFeaturedPromotionsTitle,
  items = defaultItems,
  seeAllLabel = "Ver",
  onSeeAllPress,
}: FeaturedPromotionsProps) => {
  return (
    <FeaturedPromotionsElement aria-label={title}>
      <FeaturedPromotionsHeaderElement>
        <FeaturedPromotionsTitleElement>{title}</FeaturedPromotionsTitleElement>
        <FeaturedPromotionsSeeAllElement type="button" onClick={onSeeAllPress}>
          {seeAllLabel}
          <FeaturedPromotionsSeeAllIconElement aria-hidden>
            <ArrowForwardIcon />
          </FeaturedPromotionsSeeAllIconElement>
        </FeaturedPromotionsSeeAllElement>
      </FeaturedPromotionsHeaderElement>

      <Carousel gap={12} slideSize="78%" align="start">
        {items.map((promo) => (
          <PromoCard key={promo.id} promo={promo} />
        ))}
      </Carousel>
    </FeaturedPromotionsElement>
  );
};
`,
);

write(
  "featuredPromotions/index.ts",
  `export { FeaturedPromotions } from "./FeaturedPromotions";
export type { FeaturedPromoCardData, PromoBadgeVariant } from "./types";
`,
);

write(
  "recommendations/Recommendations.tsx",
  `import { Carousel } from "@shared/ui/carousels/carousel/Carousel";
import {
  defaultRecommendationsTitle,
  recommendations as defaultItems,
} from "./data";
import type { RecommendationCardData } from "./types";
import { RecommendationCard } from "./RecommendationCard";
import {
  RecommendationsElement,
  RecommendationsTitleElement,
} from "./Recommendations.elements";

interface RecommendationsProps {
  title?: string;
  items?: RecommendationCardData[];
}

export const Recommendations = ({
  title = defaultRecommendationsTitle,
  items = defaultItems,
}: RecommendationsProps) => {
  return (
    <RecommendationsElement aria-label={title}>
      <RecommendationsTitleElement>{title}</RecommendationsTitleElement>

      <Carousel gap={12} slideSize="48%" align="start" showDots dotsTone="brand">
        {items.map((recommendation) => (
          <RecommendationCard
            key={recommendation.id}
            recommendation={recommendation}
          />
        ))}
      </Carousel>
    </RecommendationsElement>
  );
};
`,
);

write(
  "recommendations/index.ts",
  `export { Recommendations } from "./Recommendations";
export type { RecommendationBadgeVariant, RecommendationCardData } from "./types";
`,
);

write(
  "sportsEvents/SportsEvents.tsx",
  `import { ArrowForwardIcon } from "@assets/icons";
import { Carousel } from "@shared/ui/carousels/carousel/Carousel";
import {
  defaultSportsEventsTitle,
  sportsEvents as defaultItems,
} from "./data";
import type { SportsEventCardData } from "./types";
import { SportsEventCard } from "./SportsEventCard";
import {
  SportsEventsElement,
  SportsEventsHeaderElement,
  SportsEventsSeeAllElement,
  SportsEventsSeeAllIconElement,
  SportsEventsTitleElement,
} from "./SportsEvents.elements";

interface SportsEventsProps {
  title?: string;
  items?: SportsEventCardData[];
  seeAllLabel?: string;
  onSeeAllPress?: () => void;
}

export const SportsEvents = ({
  title = defaultSportsEventsTitle,
  items = defaultItems,
  seeAllLabel = "Ver",
  onSeeAllPress,
}: SportsEventsProps) => {
  return (
    <SportsEventsElement aria-label={title}>
      <SportsEventsHeaderElement>
        <SportsEventsTitleElement>{title}</SportsEventsTitleElement>
        <SportsEventsSeeAllElement type="button" onClick={onSeeAllPress}>
          {seeAllLabel}
          <SportsEventsSeeAllIconElement aria-hidden>
            <ArrowForwardIcon />
          </SportsEventsSeeAllIconElement>
        </SportsEventsSeeAllElement>
      </SportsEventsHeaderElement>

      <Carousel gap={12} slideSize="88%" align="start" showDots dotsTone="brand">
        {items.map((event) => (
          <SportsEventCard key={event.id} event={event} />
        ))}
      </Carousel>
    </SportsEventsElement>
  );
};
`,
);

write(
  "sportsEvents/index.ts",
  `export { SportsEvents } from "./SportsEvents";
export type { SportsEventCardData, SportsEventOdd } from "./types";
`,
);

write(
  "casinoGames/CasinoGames.tsx",
  `import { ArrowForwardIcon } from "@assets/icons";
import {
  casinoGames as defaultItems,
  defaultCasinoGamesTitle,
} from "./data";
import type { CasinoGameCardData } from "./types";
import { CasinoGameCard } from "./CasinoGameCard";
import {
  CasinoGamesElement,
  CasinoGamesGridElement,
  CasinoGamesHeaderElement,
  CasinoGamesSeeAllElement,
  CasinoGamesSeeAllIconElement,
  CasinoGamesTitleElement,
} from "./CasinoGames.elements";

interface CasinoGamesProps {
  title?: string;
  items?: CasinoGameCardData[];
  seeAllLabel?: string;
  onSeeAllPress?: () => void;
}

export const CasinoGames = ({
  title = defaultCasinoGamesTitle,
  items = defaultItems,
  seeAllLabel = "Ver",
  onSeeAllPress,
}: CasinoGamesProps) => {
  return (
    <CasinoGamesElement aria-label={title}>
      <CasinoGamesHeaderElement>
        <CasinoGamesTitleElement>{title}</CasinoGamesTitleElement>
        <CasinoGamesSeeAllElement type="button" onClick={onSeeAllPress}>
          {seeAllLabel}
          <CasinoGamesSeeAllIconElement aria-hidden>
            <ArrowForwardIcon />
          </CasinoGamesSeeAllIconElement>
        </CasinoGamesSeeAllElement>
      </CasinoGamesHeaderElement>

      <CasinoGamesGridElement>
        {items.map((game) => (
          <CasinoGameCard key={game.id} game={game} />
        ))}
      </CasinoGamesGridElement>
    </CasinoGamesElement>
  );
};
`,
);

write(
  "casinoGames/index.ts",
  `export { CasinoGames } from "./CasinoGames";
export type { CasinoGameBadgeVariant, CasinoGameCardData } from "./types";
`,
);

write(
  "latestWinners/LatestWinners.tsx",
  `import { useState } from "react";
import {
  defaultLatestWinnersTitle,
  latestWinnersLive as defaultLive,
  latestWinnersTop10 as defaultTop10,
} from "./data";
import type { LatestWinnerCardData, LatestWinnersTab } from "./types";
import { LatestWinnerCard } from "./LatestWinnerCard";
import {
  LatestWinnersColumnLabelElement,
  LatestWinnersColumnsElement,
  LatestWinnersElement,
  LatestWinnersHeaderElement,
  LatestWinnersListElement,
  LatestWinnersTabElement,
  LatestWinnersTabsElement,
  LatestWinnersTitleElement,
} from "./LatestWinners.elements";

const MAX_WINNERS = 4;

interface LatestWinnersProps {
  title?: string;
  liveItems?: LatestWinnerCardData[];
  top10Items?: LatestWinnerCardData[];
  defaultTab?: LatestWinnersTab;
}

export const LatestWinners = ({
  title = defaultLatestWinnersTitle,
  liveItems = defaultLive,
  top10Items = defaultTop10,
  defaultTab = "live",
}: LatestWinnersProps) => {
  const [activeTab, setActiveTab] = useState<LatestWinnersTab>(defaultTab);
  const winners =
    activeTab === "live"
      ? liveItems.slice(0, MAX_WINNERS)
      : top10Items.slice(0, MAX_WINNERS);

  return (
    <LatestWinnersElement aria-label={title}>
      <LatestWinnersHeaderElement>
        <LatestWinnersTitleElement>{title}</LatestWinnersTitleElement>

        <LatestWinnersTabsElement role="tablist" aria-label="Filtro de ganadores">
          <LatestWinnersTabElement
            type="button"
            role="tab"
            $active={activeTab === "live"}
            aria-selected={activeTab === "live"}
            onClick={() => setActiveTab("live")}
          >
            Live
          </LatestWinnersTabElement>
          <LatestWinnersTabElement
            type="button"
            role="tab"
            $active={activeTab === "top10"}
            aria-selected={activeTab === "top10"}
            onClick={() => setActiveTab("top10")}
          >
            Top 10
          </LatestWinnersTabElement>
        </LatestWinnersTabsElement>

        <LatestWinnersColumnsElement>
          <LatestWinnersColumnLabelElement>Juego</LatestWinnersColumnLabelElement>
          <LatestWinnersColumnLabelElement>
            Monto de la apuesta
          </LatestWinnersColumnLabelElement>
          <LatestWinnersColumnLabelElement>Ganancia</LatestWinnersColumnLabelElement>
          <LatestWinnersColumnLabelElement>Multiplicador</LatestWinnersColumnLabelElement>
        </LatestWinnersColumnsElement>
      </LatestWinnersHeaderElement>

      <LatestWinnersListElement>
        {winners.map((winner) => (
          <LatestWinnerCard key={winner.id} winner={winner} />
        ))}
      </LatestWinnersListElement>
    </LatestWinnersElement>
  );
};
`,
);

write(
  "latestWinners/index.ts",
  `export { LatestWinners } from "./LatestWinners";
export type { LatestWinnerCardData, LatestWinnersTab } from "./types";
`,
);

console.log("adapted all 5 home sections");
