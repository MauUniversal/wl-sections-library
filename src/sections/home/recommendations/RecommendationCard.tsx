import { FlameIcon } from "@assets/icons";
import type { RecommendationCardData } from "./types";
import {
    RecommendationCardBadgeDotElement,
    RecommendationCardBadgeElement,
    RecommendationCardBadgeIconElement,
    RecommendationCardCategoryElement,
    RecommendationCardContentElement,
    RecommendationCardElement,
    RecommendationCardFooterElement,
    RecommendationCardHighlightElement,
    RecommendationCardMetaElement,
    RecommendationCardTitleElement,
} from "./RecommendationCard.elements";

interface RecommendationCardProps {
    recommendation: RecommendationCardData;
}

export const RecommendationCard = ({ recommendation }: RecommendationCardProps) => {
    return (
        <RecommendationCardElement $image={recommendation.image}>
            <RecommendationCardBadgeElement $variant={recommendation.badgeVariant}>
                {recommendation.badgeVariant === "live" ? (
                    <RecommendationCardBadgeDotElement aria-hidden />
                ) : (
                    <RecommendationCardBadgeIconElement aria-hidden>
                        <FlameIcon />
                    </RecommendationCardBadgeIconElement>
                )}
                {recommendation.badge}
            </RecommendationCardBadgeElement>

            <RecommendationCardContentElement>
                <RecommendationCardCategoryElement>
                    {recommendation.category}
                </RecommendationCardCategoryElement>
                <RecommendationCardTitleElement>
                    {recommendation.title}
                </RecommendationCardTitleElement>
                <RecommendationCardFooterElement>
                    <RecommendationCardMetaElement>
                        {recommendation.meta}
                    </RecommendationCardMetaElement>
                    <RecommendationCardHighlightElement>
                        {recommendation.highlight}
                    </RecommendationCardHighlightElement>
                </RecommendationCardFooterElement>
            </RecommendationCardContentElement>
        </RecommendationCardElement>
    );
};
