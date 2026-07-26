import type { LatestWinnerCardData } from "./types";
import {
    LatestWinnerBottomElement,
    LatestWinnerCardElement,
    LatestWinnerDotElement,
    LatestWinnerMetaElement,
    LatestWinnerMetaLabelElement,
    LatestWinnerMetaValueElement,
    LatestWinnerMultiplierElement,
    LatestWinnerStatElement,
    LatestWinnerStatsElement,
    LatestWinnerThumbElement,
    LatestWinnerTopElement,
    LatestWinnerValueElement,
} from "./LatestWinnerCard.elements";

interface LatestWinnerCardProps {
    winner: LatestWinnerCardData;
}

export const LatestWinnerCard = ({ winner }: LatestWinnerCardProps) => {
    const resultTone = winner.isWin ? "success" : "danger";

    return (
        <LatestWinnerCardElement>
            <LatestWinnerTopElement>
                <LatestWinnerThumbElement src={winner.image} alt="" />

                <LatestWinnerStatsElement>
                    <LatestWinnerStatElement>
                        <LatestWinnerDotElement $tone="info" aria-hidden />
                        <LatestWinnerValueElement>{winner.betAmount}</LatestWinnerValueElement>
                    </LatestWinnerStatElement>

                    <LatestWinnerStatElement>
                        <LatestWinnerDotElement $tone={resultTone} aria-hidden />
                        <LatestWinnerValueElement $tone={resultTone}>
                            {winner.profit}
                        </LatestWinnerValueElement>
                    </LatestWinnerStatElement>
                </LatestWinnerStatsElement>

                <LatestWinnerMultiplierElement $tone={resultTone}>
                    {winner.multiplier}
                </LatestWinnerMultiplierElement>
            </LatestWinnerTopElement>

            <LatestWinnerBottomElement>
                <LatestWinnerMetaElement>
                    <LatestWinnerMetaLabelElement>Hora</LatestWinnerMetaLabelElement>
                    <LatestWinnerMetaValueElement>{winner.time}</LatestWinnerMetaValueElement>
                </LatestWinnerMetaElement>

                <LatestWinnerMetaElement>
                    <LatestWinnerMetaLabelElement>Jugador</LatestWinnerMetaLabelElement>
                    <LatestWinnerMetaValueElement>{winner.player}</LatestWinnerMetaValueElement>
                </LatestWinnerMetaElement>

                <LatestWinnerMetaElement $align="end">
                    <LatestWinnerMetaLabelElement>Multiplicador</LatestWinnerMetaLabelElement>
                    <LatestWinnerMetaValueElement $tone={resultTone}>
                        {winner.multiplier}
                    </LatestWinnerMetaValueElement>
                </LatestWinnerMetaElement>
            </LatestWinnerBottomElement>
        </LatestWinnerCardElement>
    );
};
