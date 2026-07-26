import { Carousel } from "@shared/ui/carousels/carousel/Carousel";
import { heroBannerSlides as defaultSlides } from "./data";
import type { HeroBannerSlideData } from "./types";
import { HeroBannerElement } from "./HeroBanner.elements";
import { HeroBannerSlide } from "./HeroBannerSlide";

interface HeroBannerProps {
  slides?: HeroBannerSlideData[];
  onCtaPress?: (slideId: string) => void;
  loop?: boolean;
  showDots?: boolean;
}

export const HeroBanner = ({
  slides = defaultSlides,
  onCtaPress,
  loop = true,
  showDots = true,
}: HeroBannerProps) => {
  return (
    <HeroBannerElement aria-label="Hero banner">
      <Carousel
        loop={loop}
        gap={16}
        slideSize="100%"
        showDots={showDots}
        dotsOverlay
        dotsBottom={25}
        align="start"
      >
        {slides.map((slide) => (
          <HeroBannerSlide key={slide.id} slide={slide} onCtaPress={onCtaPress} />
        ))}
      </Carousel>
    </HeroBannerElement>
  );
};
