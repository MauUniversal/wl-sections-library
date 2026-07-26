import { Button } from "@shared/ui/buttons/button/Button";
import {
  HeroPlaceholderActionsElement,
  HeroPlaceholderDescriptionElement,
  HeroPlaceholderElement,
  HeroPlaceholderEyebrowElement,
  HeroPlaceholderTitleElement,
} from "./HeroPlaceholder.elements";

interface HeroPlaceholderProps {
  title?: string;
  description?: string;
  ctaLabel?: string;
}

export const HeroPlaceholder = ({
  title = "Hero placeholder",
  description = "Bloque hero de ejemplo para el editor del BO y el runtime white-label.",
  ctaLabel = "Empezar",
}: HeroPlaceholderProps) => {
  return (
    <HeroPlaceholderElement>
      <HeroPlaceholderEyebrowElement>Section type: HeroPlaceholder</HeroPlaceholderEyebrowElement>
      <HeroPlaceholderTitleElement>{title}</HeroPlaceholderTitleElement>
      <HeroPlaceholderDescriptionElement>
        {description}
      </HeroPlaceholderDescriptionElement>
      <HeroPlaceholderActionsElement>
        <Button>{ctaLabel}</Button>
        <Button variant="ghost">Ver más</Button>
      </HeroPlaceholderActionsElement>
    </HeroPlaceholderElement>
  );
};
