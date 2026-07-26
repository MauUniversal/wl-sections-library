import type { FeaturedPromoCardData } from "./types";
import {
    PromoCardAmountElement,
    PromoCardBadgeElement,
    PromoCardContentElement,
    PromoCardElement,
    PromoCardTitleElement,
} from "./PromoCard.elements";

interface PromoCardProps {
    promo: FeaturedPromoCardData;
}

export const PromoCard = ({ promo }: PromoCardProps) => {
    return (
        <PromoCardElement $image={promo.image}>
            <PromoCardBadgeElement $variant={promo.badgeVariant}>
                {promo.badge}
            </PromoCardBadgeElement>

            <PromoCardContentElement>
                <PromoCardTitleElement>{promo.title}</PromoCardTitleElement>
                <PromoCardAmountElement>{promo.amount}</PromoCardAmountElement>
            </PromoCardContentElement>
        </PromoCardElement>
    );
};
