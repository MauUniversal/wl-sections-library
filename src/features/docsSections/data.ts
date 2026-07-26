export const globalNavUsageCode = `import { GlobalNav } from "@wl/sections-library";
// o en el playground:
import { GlobalNav } from "@sections/globalNav";

<GlobalNav />
<GlobalNav
  onMenuPress={() => setMenuOpen(true)}
  notificationBadge={3}
  searchPlaceholder="Buscar…"
/>`;

export const globalNavJsonExample = `{
  "layout": {
    "header": { "type": "GlobalNav" },
    "footer": { "type": "Footer" }
  },
  "pages": {
    "home": []
  }
}`;

export const globalNavProps = [
  {
    name: "onMenuPress",
    type: "() => void",
    default: "—",
    description: "Callback del botón menú (abre SideMenu en el layout).",
  },
  {
    name: "onDepositPress",
    type: "() => void",
    default: "—",
    description: "Callback del botón depositar.",
  },
  {
    name: "onNotificationsPress",
    type: "() => void",
    default: "—",
    description: "Callback del botón notificaciones.",
  },
  {
    name: "onProfilePress",
    type: "() => void",
    default: "—",
    description: "Callback del botón perfil.",
  },
  {
    name: "notificationBadge",
    type: "number | string | boolean",
    default: "2",
    description: "Badge del IconButton de notificaciones.",
  },
  {
    name: "searchPlaceholder",
    type: "string",
    default: '"Buscar juegos o preguntale a la IA..."',
    description: "Placeholder del buscador (solo UI por ahora).",
  },
  {
    name: "balanceOptions",
    type: "BalanceOption[]",
    default: "demo Bono / Retirable / Depositado",
    description: "Opciones del dropdown de saldo.",
  },
  {
    name: "balanceDefaultId",
    type: '"bonus" | "withdrawable" | "deposited"',
    default: '"withdrawable"',
    description: "Saldo seleccionado al montar.",
  },
  {
    name: "jackpots",
    type: "JackpotItem[]",
    default: "Mega + Major demo",
    description: "Fila de jackpots debajo del search.",
  },
] as const;

export const footerUsageCode = `import { Footer } from "@wl/sections-library";
// o en el playground:
import { Footer } from "@sections/footer";

<Footer />
<Footer
  tagline="Tu marca aquí"
  poweredByBrand="Universal Soft"
/>`;

export const footerJsonExample = `{
  "layout": {
    "header": { "type": "GlobalNav" },
    "footer": { "type": "Footer" }
  },
  "pages": {
    "home": []
  }
}`;

export const footerProps = [
  {
    name: "logoSrc",
    type: "string",
    default: "logoUniversal.png",
    description: "URL/src del logo de marca.",
  },
  {
    name: "logoAlt",
    type: "string",
    default: '"Universal Bet"',
    description: "Alt del logo.",
  },
  {
    name: "tagline",
    type: "string",
    default: "texto demo…",
    description: "Tagline bajo el logo.",
  },
  {
    name: "socialItems",
    type: "FooterSocialItem[]",
    default: "FB / X / IG / YT / Mail",
    description: "Links de redes sociales.",
  },
  {
    name: "navSections",
    type: "FooterNavSection[]",
    default: "Casino, Deportes, …",
    description: "Columnas de navegación (collapsible opcional).",
  },
  {
    name: "paymentMethods",
    type: "readonly string[]",
    default: "Visa, Mastercard, …",
    description: "Pills de métodos de pago.",
  },
  {
    name: "paymentsTitle",
    type: "string",
    default: '"Métodos de Pago"',
    description: "Título del bloque de pagos.",
  },
  {
    name: "badges",
    type: "readonly string[]",
    default: "+18, Licencia, SSL",
    description: "Badges legales / compliance.",
  },
  {
    name: "copyright",
    type: "string",
    default: "© 2026…",
    description: "Texto de copyright.",
  },
  {
    name: "poweredByLabel",
    type: "string",
    default: '"Powered by"',
    description: "Label del powered by.",
  },
  {
    name: "poweredByBrand",
    type: "string",
    default: '"Universal Soft"',
    description: "Marca del powered by.",
  },
] as const;

export const heroBannerUsageCode = `import { HeroBanner } from "@wl/sections-library";
// o en el playground:
import { HeroBanner } from "@sections/home/heroBanner";

<HeroBanner />
<HeroBanner
  slides={customSlides}
  onCtaPress={(slideId) => console.log(slideId)}
  showDots
/>`;

export const heroBannerJsonExample = `{
  "pages": {
    "home": [
      { "type": "HeroBanner" }
    ]
  }
}`;

export const heroBannerProps = [
  {
    name: "slides",
    type: "HeroBannerSlideData[]",
    default: "3 slides demo",
    description: "Slides del carrusel (tag, title, subtitle, description, cta, image).",
  },
  {
    name: "onCtaPress",
    type: "(slideId: string) => void",
    default: "—",
    description: "Callback al pulsar el CTA de un slide.",
  },
  {
    name: "loop",
    type: "boolean",
    default: "true",
    description: "Loop infinito del Carousel Embla.",
  },
  {
    name: "showDots",
    type: "boolean",
    default: "true",
    description: "Muestra dots overlay del carrusel.",
  },
] as const;

export const heroPlaceholderUsageCode = `import { HeroPlaceholder } from "@wl/sections-library";
// o en el playground:
import { HeroPlaceholder } from "@sections/home/heroPlaceholder";

<HeroPlaceholder />
<HeroPlaceholder
  title="Bienvenido"
  description="Texto configurable"
  ctaLabel="Jugar"
/>`;

export const heroPlaceholderJsonExample = `{
  "pages": {
    "home": [
      { "type": "HeroPlaceholder" }
    ]
  }
}`;

export const heroPlaceholderProps = [
  {
    name: "title",
    type: "string",
    default: '"Hero placeholder"',
    description: "Título principal del bloque.",
  },
  {
    name: "description",
    type: "string",
    default: "Texto de ejemplo…",
    description: "Descripción de soporte.",
  },
  {
    name: "ctaLabel",
    type: "string",
    default: '"Empezar"',
    description: "Label del CTA primario.",
  },
] as const;

export const featuredPromotionsUsageCode = `import { FeaturedPromotions } from "@wl/sections-library";
// o en el playground:
import { FeaturedPromotions } from "@sections/home/featuredPromotions";

<FeaturedPromotions />
`;

export const featuredPromotionsJsonExample = `{
  "pages": {
    "home": [
      { "type": "FeaturedPromotions" }
    ]
  }
}`;

export const featuredPromotionsProps = [
  {
    name: "title",
    type: "string",
    default: "\"Promociones Destacadas 🔥\"",
    description: "Título de la sección.",
  },
  {
    name: "items",
    type: "FeaturedPromoCardData[]",
    default: "3 promos demo",
    description: "Cards del carrusel.",
  },
  {
    name: "seeAllLabel",
    type: "string",
    default: "\"Ver\"",
    description: "Label del link Ver.",
  },
  {
    name: "onSeeAllPress",
    type: "() => void",
    default: "—",
    description: "Callback del botón Ver.",
  }
] as const;

export const recommendationsUsageCode = `import { Recommendations } from "@wl/sections-library";
// o en el playground:
import { Recommendations } from "@sections/home/recommendations";

<Recommendations />
`;

export const recommendationsJsonExample = `{
  "pages": {
    "home": [
      { "type": "Recommendations" }
    ]
  }
}`;

export const recommendationsProps = [
  {
    name: "title",
    type: "string",
    default: "\"Recomendados para vos\"",
    description: "Título de la sección.",
  },
  {
    name: "items",
    type: "RecommendationCardData[]",
    default: "3 cards demo",
    description: "Cards del carrusel.",
  }
] as const;

export const sportsEventsUsageCode = `import { SportsEvents } from "@wl/sections-library";
// o en el playground:
import { SportsEvents } from "@sections/home/sportsEvents";

<SportsEvents />
`;

export const sportsEventsJsonExample = `{
  "pages": {
    "home": [
      { "type": "SportsEvents" }
    ]
  }
}`;

export const sportsEventsProps = [
  {
    name: "title",
    type: "string",
    default: "\"Eventos Deportivos\"",
    description: "Título de la sección.",
  },
  {
    name: "items",
    type: "SportsEventCardData[]",
    default: "5 eventos demo",
    description: "Cards del carrusel.",
  },
  {
    name: "seeAllLabel",
    type: "string",
    default: "\"Ver\"",
    description: "Label del link Ver.",
  },
  {
    name: "onSeeAllPress",
    type: "() => void",
    default: "—",
    description: "Callback del botón Ver.",
  }
] as const;

export const casinoGamesUsageCode = `import { CasinoGames } from "@wl/sections-library";
// o en el playground:
import { CasinoGames } from "@sections/home/casinoGames";

<CasinoGames />
`;

export const casinoGamesJsonExample = `{
  "pages": {
    "home": [
      { "type": "CasinoGames" }
    ]
  }
}`;

export const casinoGamesProps = [
  {
    name: "title",
    type: "string",
    default: "\"Juegos de Casino\"",
    description: "Título de la sección.",
  },
  {
    name: "items",
    type: "CasinoGameCardData[]",
    default: "6 juegos demo",
    description: "Cards de la grilla.",
  },
  {
    name: "seeAllLabel",
    type: "string",
    default: "\"Ver\"",
    description: "Label del link Ver.",
  },
  {
    name: "onSeeAllPress",
    type: "() => void",
    default: "—",
    description: "Callback del botón Ver.",
  }
] as const;

export const latestWinnersUsageCode = `import { LatestWinners } from "@wl/sections-library";
// o en el playground:
import { LatestWinners } from "@sections/home/latestWinners";

<LatestWinners />
`;

export const latestWinnersJsonExample = `{
  "pages": {
    "home": [
      { "type": "LatestWinners" }
    ]
  }
}`;

export const latestWinnersProps = [
  {
    name: "title",
    type: "string",
    default: "\"Últimos Ganadores\"",
    description: "Título de la sección.",
  },
  {
    name: "liveItems",
    type: "LatestWinnerCardData[]",
    default: "demo live",
    description: "Items del tab Live.",
  },
  {
    name: "top10Items",
    type: "LatestWinnerCardData[]",
    default: "demo top10",
    description: "Items del tab Top 10.",
  },
  {
    name: "defaultTab",
    type: '"live" | "top10"',
    default: '"live"',
    description: "Tab activo al montar.",
  }
] as const;

