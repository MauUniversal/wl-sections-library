import { DownloadIcon, StarIcon } from "@assets/icons";
import { Button } from "@shared/ui/buttons/button/Button";
import type { HeroBannerSlideData } from "./types";
import {
  HeroBannerContentElement,
  HeroBannerDescriptionElement,
  HeroBannerSlideElement,
  HeroBannerSubtitleElement,
  HeroBannerTagElement,
  HeroBannerTagIconElement,
  HeroBannerTitleElement,
} from "./HeroBannerSlide.elements";

interface HeroBannerSlideProps {
  slide: HeroBannerSlideData;
  onCtaPress?: (slideId: string) => void;
}

export const HeroBannerSlide = ({ slide, onCtaPress }: HeroBannerSlideProps) => {
  return (
    <HeroBannerSlideElement $image={slide.image}>
      <HeroBannerContentElement>
        <HeroBannerTagElement>
          <HeroBannerTagIconElement aria-hidden>
            <StarIcon width={12} height={12} />
          </HeroBannerTagIconElement>
          {slide.tag}
        </HeroBannerTagElement>

        <HeroBannerTitleElement>{slide.title}</HeroBannerTitleElement>
        <HeroBannerSubtitleElement>{slide.subtitle}</HeroBannerSubtitleElement>
        <HeroBannerDescriptionElement>{slide.description}</HeroBannerDescriptionElement>

        <Button
          variant="primary"
          size="S"
          height={40}
          width={180}
          icon={<DownloadIcon />}
          type="button"
          onClick={() => onCtaPress?.(slide.id)}
        >
          {slide.ctaLabel}
        </Button>
      </HeroBannerContentElement>
    </HeroBannerSlideElement>
  );
};
