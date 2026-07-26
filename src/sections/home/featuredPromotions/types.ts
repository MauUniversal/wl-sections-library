export type PromoBadgeVariant = "nuevo" | "activo";

export interface FeaturedPromoCardData {
  id: string;
  badge: string;
  badgeVariant: PromoBadgeVariant;
  title: string;
  amount: string;
  image: string;
}
