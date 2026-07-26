import { useState } from "react";
import {
  defaultLatestWinnersTitle,
  latestWinnersLive as defaultLive,
  latestWinnersTop10 as defaultTop10,
} from "./data";
import type { LatestWinnerCardData, LatestWinnersTab } from "./types";
import { LatestWinnerCard } from "./LatestWinnerCard";
import {
  LatestWinnersColumnLabelElement,
  LatestWinnersColumnsElement,
  LatestWinnersElement,
  LatestWinnersHeaderElement,
  LatestWinnersListElement,
  LatestWinnersTabElement,
  LatestWinnersTabsElement,
  LatestWinnersTitleElement,
} from "./LatestWinners.elements";

const MAX_WINNERS = 4;

interface LatestWinnersProps {
  title?: string;
  liveItems?: LatestWinnerCardData[];
  top10Items?: LatestWinnerCardData[];
  defaultTab?: LatestWinnersTab;
}

export const LatestWinners = ({
  title = defaultLatestWinnersTitle,
  liveItems = defaultLive,
  top10Items = defaultTop10,
  defaultTab = "live",
}: LatestWinnersProps) => {
  const [activeTab, setActiveTab] = useState<LatestWinnersTab>(defaultTab);
  const winners =
    activeTab === "live"
      ? liveItems.slice(0, MAX_WINNERS)
      : top10Items.slice(0, MAX_WINNERS);

  return (
    <LatestWinnersElement aria-label={title}>
      <LatestWinnersHeaderElement>
        <LatestWinnersTitleElement>{title}</LatestWinnersTitleElement>

        <LatestWinnersTabsElement role="tablist" aria-label="Filtro de ganadores">
          <LatestWinnersTabElement
            type="button"
            role="tab"
            $active={activeTab === "live"}
            aria-selected={activeTab === "live"}
            onClick={() => setActiveTab("live")}
          >
            Live
          </LatestWinnersTabElement>
          <LatestWinnersTabElement
            type="button"
            role="tab"
            $active={activeTab === "top10"}
            aria-selected={activeTab === "top10"}
            onClick={() => setActiveTab("top10")}
          >
            Top 10
          </LatestWinnersTabElement>
        </LatestWinnersTabsElement>

        <LatestWinnersColumnsElement>
          <LatestWinnersColumnLabelElement>Juego</LatestWinnersColumnLabelElement>
          <LatestWinnersColumnLabelElement>
            Monto de la apuesta
          </LatestWinnersColumnLabelElement>
          <LatestWinnersColumnLabelElement>Ganancia</LatestWinnersColumnLabelElement>
          <LatestWinnersColumnLabelElement>Multiplicador</LatestWinnersColumnLabelElement>
        </LatestWinnersColumnsElement>
      </LatestWinnersHeaderElement>

      <LatestWinnersListElement>
        {winners.map((winner) => (
          <LatestWinnerCard key={winner.id} winner={winner} />
        ))}
      </LatestWinnersListElement>
    </LatestWinnersElement>
  );
};
