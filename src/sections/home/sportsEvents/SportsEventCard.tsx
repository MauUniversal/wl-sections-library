import type { SportsEventCardData } from "./types";
import {
    SportsEventCardElement,
    SportsEventCardHeaderElement,
    SportsEventCardMetaElement,
    SportsEventCardOddsElement,
    SportsEventCardTeamElement,
    SportsEventCardTeamsElement,
    SportsEventOddButtonElement,
    SportsEventOddLabelElement,
    SportsEventOddValueElement,
} from "./SportsEventCard.elements";

interface SportsEventCardProps {
    event: SportsEventCardData;
}

export const SportsEventCard = ({ event }: SportsEventCardProps) => {
    return (
        <SportsEventCardElement>
            <SportsEventCardHeaderElement>
                <SportsEventCardMetaElement>{event.league}</SportsEventCardMetaElement>
                <SportsEventCardMetaElement>{event.time}</SportsEventCardMetaElement>
            </SportsEventCardHeaderElement>

            <SportsEventCardTeamsElement>
                <SportsEventCardTeamElement>{event.homeTeam}</SportsEventCardTeamElement>
                <SportsEventCardTeamElement>{event.awayTeam}</SportsEventCardTeamElement>
            </SportsEventCardTeamsElement>

            <SportsEventCardOddsElement>
                {event.odds.map((odd) => (
                    <SportsEventOddButtonElement key={odd.label} type="button">
                        <SportsEventOddLabelElement>{odd.label}</SportsEventOddLabelElement>
                        <SportsEventOddValueElement>{odd.value}</SportsEventOddValueElement>
                    </SportsEventOddButtonElement>
                ))}
            </SportsEventCardOddsElement>
        </SportsEventCardElement>
    );
};
