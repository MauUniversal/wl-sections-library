import { Carousel } from "@shared/ui/carousels/carousel/Carousel";
import {
  defaultRecommendationsTitle,
  recommendations as defaultItems,
} from "./data";
import type { RecommendationCardData } from "./types";
import { RecommendationCard } from "./RecommendationCard";
import {
  RecommendationsElement,
  RecommendationsTitleElement,
} from "./Recommendations.elements";

interface RecommendationsProps {
  title?: string;
  items?: RecommendationCardData[];
}

export const Recommendations = ({
  title = defaultRecommendationsTitle,
  items = defaultItems,
}: RecommendationsProps) => {
  return (
    <RecommendationsElement aria-label={title}>
      <RecommendationsTitleElement>{title}</RecommendationsTitleElement>

      <Carousel gap={12} slideSize="48%" align="start" showDots dotsTone="brand">
        {items.map((recommendation) => (
          <RecommendationCard
            key={recommendation.id}
            recommendation={recommendation}
          />
        ))}
      </Carousel>
    </RecommendationsElement>
  );
};
