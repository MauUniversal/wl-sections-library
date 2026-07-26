import { ArrowForwardIcon } from "@assets/icons";
import {
  casinoGames as defaultItems,
  defaultCasinoGamesTitle,
} from "./data";
import type { CasinoGameCardData } from "./types";
import { CasinoGameCard } from "./CasinoGameCard";
import {
  CasinoGamesElement,
  CasinoGamesGridElement,
  CasinoGamesHeaderElement,
  CasinoGamesSeeAllElement,
  CasinoGamesSeeAllIconElement,
  CasinoGamesTitleElement,
} from "./CasinoGames.elements";

interface CasinoGamesProps {
  title?: string;
  items?: CasinoGameCardData[];
  seeAllLabel?: string;
  onSeeAllPress?: () => void;
}

export const CasinoGames = ({
  title = defaultCasinoGamesTitle,
  items = defaultItems,
  seeAllLabel = "Ver",
  onSeeAllPress,
}: CasinoGamesProps) => {
  return (
    <CasinoGamesElement aria-label={title}>
      <CasinoGamesHeaderElement>
        <CasinoGamesTitleElement>{title}</CasinoGamesTitleElement>
        <CasinoGamesSeeAllElement type="button" onClick={onSeeAllPress}>
          {seeAllLabel}
          <CasinoGamesSeeAllIconElement aria-hidden>
            <ArrowForwardIcon />
          </CasinoGamesSeeAllIconElement>
        </CasinoGamesSeeAllElement>
      </CasinoGamesHeaderElement>

      <CasinoGamesGridElement>
        {items.map((game) => (
          <CasinoGameCard key={game.id} game={game} />
        ))}
      </CasinoGamesGridElement>
    </CasinoGamesElement>
  );
};
