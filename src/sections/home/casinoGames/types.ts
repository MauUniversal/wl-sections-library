export type CasinoGameBadgeVariant = "nuevo" | "hot" | "vivo";

export interface CasinoGameCardData {
  id: string;
  title: string;
  provider: string;
  image: string;
  badge?: string;
  badgeVariant?: CasinoGameBadgeVariant;
}
