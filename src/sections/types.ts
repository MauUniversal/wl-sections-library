export type SectionType =
  | "GlobalNav"
  | "Footer"
  | "HeroBanner"
  | "FeaturedPromotions"
  | "Recommendations"
  | "SportsEvents"
  | "CasinoGames"
  | "LatestWinners"
  | "HeroPlaceholder";

export type SectionScope = "global" | "home";

export interface SectionDefinition {
  type: SectionType;
  label: string;
  description: string;
  scope: SectionScope;
}
