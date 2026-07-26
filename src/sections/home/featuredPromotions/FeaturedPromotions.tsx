import { ArrowForwardIcon } from "@assets/icons";
import { Carousel } from "@shared/ui/carousels/carousel/Carousel";
import {
  defaultFeaturedPromotionsTitle,
  featuredPromos as defaultItems,
} from "./data";
import type { FeaturedPromoCardData } from "./types";
import { PromoCard } from "./PromoCard";
import {
  FeaturedPromotionsElement,
  FeaturedPromotionsHeaderElement,
  FeaturedPromotionsSeeAllElement,
  FeaturedPromotionsSeeAllIconElement,
  FeaturedPromotionsTitleElement,
} from "./FeaturedPromotions.elements";

interface FeaturedPromotionsProps {
  title?: string;
  items?: FeaturedPromoCardData[];
  seeAllLabel?: string;
  onSeeAllPress?: () => void;
}

export const FeaturedPromotions = ({
  title = defaultFeaturedPromotionsTitle,
  items = defaultItems,
  seeAllLabel = "Ver",
  onSeeAllPress,
}: FeaturedPromotionsProps) => {
  return (
    <FeaturedPromotionsElement aria-label={title}>
      <FeaturedPromotionsHeaderElement>
        <FeaturedPromotionsTitleElement>{title}</FeaturedPromotionsTitleElement>
        <FeaturedPromotionsSeeAllElement type="button" onClick={onSeeAllPress}>
          {seeAllLabel}
          <FeaturedPromotionsSeeAllIconElement aria-hidden>
            <ArrowForwardIcon />
          </FeaturedPromotionsSeeAllIconElement>
        </FeaturedPromotionsSeeAllElement>
      </FeaturedPromotionsHeaderElement>

      <Carousel gap={12} slideSize="78%" align="start">
        {items.map((promo) => (
          <PromoCard key={promo.id} promo={promo} />
        ))}
      </Carousel>
    </FeaturedPromotionsElement>
  );
};
