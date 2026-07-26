import type { FooterNavSection, FooterSocialItem } from "./types";

export const footerTagline =
  "La plataforma de apuestas deportivas y casino más completa de Latinoamérica.";

export const footerSocialItems: FooterSocialItem[] = [
  { id: "facebook", label: "Facebook", href: "#" },
  { id: "twitter", label: "Twitter", href: "#" },
  { id: "instagram", label: "Instagram", href: "#" },
  { id: "youtube", label: "YouTube", href: "#" },
  { id: "email", label: "Email", href: "#" },
];

export const footerNavSections: FooterNavSection[] = [
  {
    id: "casino",
    title: "Casino",
    links: [
      { id: "casino-lobby", label: "Lobby del Casino", href: "#" },
      { id: "casino-slots", label: "Slots en Tendencia", href: "#" },
      { id: "casino-live", label: "Casino en Vivo", href: "#" },
      { id: "casino-crash", label: "Juegos Crash", href: "#" },
      { id: "casino-new", label: "Nuevos Lanzamientos", href: "#" },
    ],
  },
  {
    id: "deportes",
    title: "Deportes",
    links: [
      { id: "sports-lobby", label: "Lobby", href: "#" },
      { id: "sports-live", label: "En Vivo", href: "#" },
      { id: "sports-upcoming", label: "Próximos", href: "#" },
    ],
  },
  {
    id: "hipicas",
    title: "Hípicas",
    links: [
      { id: "hipicas-live", label: "Carreras en Vivo", href: "#" },
      { id: "hipicas-next", label: "Próximas Carreras", href: "#" },
      { id: "hipicas-tracks", label: "Hipódromos", href: "#" },
    ],
  },
  {
    id: "quick-links",
    title: "Enlaces Rápidos",
    links: [
      { id: "quick-draws", label: "Sorteos", href: "#" },
      { id: "quick-promos", label: "Promociones", href: "#" },
    ],
  },
  {
    id: "soporte",
    title: "Soporte",
    collapsible: true,
    links: [
      { id: "support-help", label: "Centro de Ayuda", href: "#" },
      { id: "support-chat", label: "Chat en Vivo", href: "#" },
      { id: "support-contact", label: "Contacto", href: "#" },
    ],
  },
  {
    id: "policies",
    title: "Políticas",
    collapsible: true,
    links: [
      { id: "policy-terms", label: "Términos y Condiciones", href: "#" },
      { id: "policy-privacy", label: "Privacidad", href: "#" },
      { id: "policy-responsible", label: "Juego Responsable", href: "#" },
    ],
  },
];

export const footerPaymentMethods = [
  "Visa",
  "Mastercard",
  "MercadoPago",
  "PayPal",
  "Bitcoin",
  "Ethereum",
  "USDT",
  "Transferencia",
] as const;

export const footerBadges = [
  "+18 Juego Responsable",
  "Licencia #12345678",
  "SSL Secure",
] as const;

export const footerCopyright = "© 2026 Universal Bet. Todos los derechos reservados.";
export const footerPoweredByLabel = "Powered by";
export const footerPoweredByBrand = "Universal Soft";
export const footerPaymentsTitle = "Métodos de Pago";
export const footerLogoAlt = "Universal Bet";
