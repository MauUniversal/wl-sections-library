import { ThemeColorsSection } from "../components/themeColorsSection/ThemeColorsSection";
import { IconsSection } from "../components/iconsSection/IconsSection";
import { ButtonSection } from "../components/buttonSection/ButtonSection";
import { IconButtonSection } from "../components/iconButtonSection/IconButtonSection";
import { CarouselSection } from "../components/carouselSection/CarouselSection";
import { TextInputSection } from "../components/textInputSection/TextInputSection";
import { TagSection } from "../components/tagSection/TagSection";
import { OffCanvasSection } from "../components/offCanvasSection/OffCanvasSection";
import { CountryFlagSection } from "../components/countryFlagSection/CountryFlagSection";
import { SwitchSection } from "../components/switchSection/SwitchSection";
import {
  DocsComponentsContentElement,
  DocsComponentsHeaderElement,
  DocsComponentsNavElement,
  DocsComponentsNavLinkElement,
  DocsComponentsPageElement,
  DocsComponentsSectionsElement,
  DocsComponentsSubtitleElement,
  DocsComponentsTitleElement,
} from "./DocsComponentsPage.elements";

export const DocsComponentsPage = () => {
  return (
    <DocsComponentsPageElement>
      <DocsComponentsContentElement>
        <DocsComponentsHeaderElement>
          <DocsComponentsNavElement>
            <DocsComponentsNavLinkElement to="/docs_components" $active>
              /docs_components
            </DocsComponentsNavLinkElement>
            <DocsComponentsNavLinkElement to="/docs_sections">
              /docs_sections
            </DocsComponentsNavLinkElement>
          </DocsComponentsNavElement>
          <DocsComponentsTitleElement>Component Catalog</DocsComponentsTitleElement>
          <DocsComponentsSubtitleElement>
            Catálogo visual del design system: paleta del theme y componentes
            compartidos con uso, props y preview.
          </DocsComponentsSubtitleElement>
        </DocsComponentsHeaderElement>

        <DocsComponentsSectionsElement>
          <ThemeColorsSection />
          <IconsSection />
          <ButtonSection />
          <IconButtonSection />
          <CarouselSection />
          <TagSection />
          <TextInputSection />
          <OffCanvasSection />
          <CountryFlagSection />
          <SwitchSection />
        </DocsComponentsSectionsElement>
      </DocsComponentsContentElement>
    </DocsComponentsPageElement>
  );
};
