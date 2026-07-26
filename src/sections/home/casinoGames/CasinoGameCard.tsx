import { FlameIcon, PlayIcon } from "@assets/icons";
import type { CasinoGameCardData } from "./types";
import {
    CasinoGameCardBadgeElement,
    CasinoGameCardBadgeIconElement,
    CasinoGameCardContentElement,
    CasinoGameCardElement,
    CasinoGameCardProviderElement,
    CasinoGameCardTitleElement,
} from "./CasinoGameCard.elements";

interface CasinoGameCardProps {
    game: CasinoGameCardData;
}

export const CasinoGameCard = ({ game }: CasinoGameCardProps) => {
    return (
        <CasinoGameCardElement $image={game.image}>
            {game.badge && game.badgeVariant && (
                <CasinoGameCardBadgeElement $variant={game.badgeVariant}>
                    {game.badgeVariant === "hot" && (
                        <CasinoGameCardBadgeIconElement aria-hidden>
                            <FlameIcon />
                        </CasinoGameCardBadgeIconElement>
                    )}
                    {game.badgeVariant === "vivo" && (
                        <CasinoGameCardBadgeIconElement aria-hidden>
                            <PlayIcon />
                        </CasinoGameCardBadgeIconElement>
                    )}
                    {game.badge}
                </CasinoGameCardBadgeElement>
            )}

            <CasinoGameCardContentElement>
                <CasinoGameCardTitleElement>{game.title}</CasinoGameCardTitleElement>
                <CasinoGameCardProviderElement>{game.provider}</CasinoGameCardProviderElement>
            </CasinoGameCardContentElement>
        </CasinoGameCardElement>
    );
};
