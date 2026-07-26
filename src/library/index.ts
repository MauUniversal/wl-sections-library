export { theme, createTheme } from "@shared/theme/Theme";
export { sectionRegistry, sectionCatalog } from "@sections/registry";
export type {
  SectionType,
  SectionDefinition,
  SectionScope,
} from "@sections/types";

export { GlobalNav } from "@sections/globalNav";
export type {
  BalanceOption,
  BalanceVariant,
  JackpotItem,
  JackpotVariant,
} from "@sections/globalNav";
export { Footer } from "@sections/footer";
export type {
  FooterNavLink,
  FooterNavSection,
  FooterSocialId,
  FooterSocialItem,
} from "@sections/footer";

export {
  CasinoGames,
  FeaturedPromotions,
  HeroBanner,
  HeroPlaceholder,
  LatestWinners,
  Recommendations,
  SportsEvents,
} from "@sections/home";
export type {
  CasinoGameBadgeVariant,
  CasinoGameCardData,
  FeaturedPromoCardData,
  HeroBannerSlideData,
  LatestWinnerCardData,
  LatestWinnersTab,
  PromoBadgeVariant,
  RecommendationBadgeVariant,
  RecommendationCardData,
  SportsEventCardData,
  SportsEventOdd,
} from "@sections/home";

export { Button } from "@shared/ui/buttons/button/Button";
export { IconButton } from "@shared/ui/buttons/iconButton/IconButton";
export { Carousel } from "@shared/ui/carousels/carousel/Carousel";
export { GlobalContainer } from "@shared/ui/containers/globalContainer/GlobalContainer";
export { CountryFlag } from "@shared/ui/flags/countryFlag/CountryFlag";
export type { CountryCode } from "@shared/ui/flags/countryFlag/CountryFlag";
export { Switch } from "@shared/ui/inputs/switch/Switch";
export { TextInput } from "@shared/ui/inputs/textInput/TextInput";
export { OffCanvas } from "@shared/ui/overlays/offCanvas/OffCanvas";
export type { OffCanvasSide } from "@shared/ui/overlays/offCanvas/OffCanvas";
export { Tag } from "@shared/ui/tags/tag/Tag";
