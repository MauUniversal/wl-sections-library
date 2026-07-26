export type RecommendationBadgeVariant = "live" | "hot";

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
