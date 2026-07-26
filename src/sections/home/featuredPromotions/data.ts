import promoImage from "@assets/promos/promo.jpg";
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
