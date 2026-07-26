import { CasinoGamesSection } from "../components/casinoGamesSection/CasinoGamesSection";
import { FeaturedPromotionsSection } from "../components/featuredPromotionsSection/FeaturedPromotionsSection";
import { FooterSection } from "../components/footerSection/FooterSection";
import { GlobalNavSection } from "../components/globalNavSection/GlobalNavSection";
import { HeroBannerSection } from "../components/heroBannerSection/HeroBannerSection";
import { HeroPlaceholderSection } from "../components/heroPlaceholderSection/HeroPlaceholderSection";
import { LatestWinnersSection } from "../components/latestWinnersSection/LatestWinnersSection";
import { RecommendationsSection } from "../components/recommendationsSection/RecommendationsSection";
import { SportsEventsSection } from "../components/sportsEventsSection/SportsEventsSection";
import {
  DocsSectionsContentElement,
  DocsSectionsHeaderElement,
  DocsSectionsNavElement,
  DocsSectionsNavLinkElement,
  DocsSectionsPageElement,
  DocsSectionsSectionsElement,
  DocsSectionsSubtitleElement,
  DocsSectionsTitleElement,
} from "./DocsSectionsPage.elements";

export const DocsSectionsPage = () => {
  return (
    <DocsSectionsPageElement>
      <DocsSectionsContentElement>
        <DocsSectionsHeaderElement>
          <DocsSectionsNavElement>
            <DocsSectionsNavLinkElement to="/docs_components">
              /docs_components
            </DocsSectionsNavLinkElement>
            <DocsSectionsNavLinkElement to="/docs_sections" $active>
              /docs_sections
            </DocsSectionsNavLinkElement>
          </DocsSectionsNavElement>
          <DocsSectionsTitleElement>Sections Catalog</DocsSectionsTitleElement>
          <DocsSectionsSubtitleElement>
            Catálogo de secciones exportables (`src/sections`): type del registry,
            props y preview a ancho real.
          </DocsSectionsSubtitleElement>
        </DocsSectionsHeaderElement>

        <DocsSectionsSectionsElement>
          <GlobalNavSection />
          <FooterSection />
          <HeroBannerSection />
          <FeaturedPromotionsSection />
          <RecommendationsSection />
          <SportsEventsSection />
          <CasinoGamesSection />
          <LatestWinnersSection />
          <HeroPlaceholderSection />
        </DocsSectionsSectionsElement>
      </DocsSectionsContentElement>
    </DocsSectionsPageElement>
  );
};
