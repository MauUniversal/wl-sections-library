import { ArrowForwardIcon } from "@assets/icons";
import { Carousel } from "@shared/ui/carousels/carousel/Carousel";
import {
  defaultSportsEventsTitle,
  sportsEvents as defaultItems,
} from "./data";
import type { SportsEventCardData } from "./types";
import { SportsEventCard } from "./SportsEventCard";
import {
  SportsEventsElement,
  SportsEventsHeaderElement,
  SportsEventsSeeAllElement,
  SportsEventsSeeAllIconElement,
  SportsEventsTitleElement,
} from "./SportsEvents.elements";

interface SportsEventsProps {
  title?: string;
  items?: SportsEventCardData[];
  seeAllLabel?: string;
  onSeeAllPress?: () => void;
}

export const SportsEvents = ({
  title = defaultSportsEventsTitle,
  items = defaultItems,
  seeAllLabel = "Ver",
  onSeeAllPress,
}: SportsEventsProps) => {
  return (
    <SportsEventsElement aria-label={title}>
      <SportsEventsHeaderElement>
        <SportsEventsTitleElement>{title}</SportsEventsTitleElement>
        <SportsEventsSeeAllElement type="button" onClick={onSeeAllPress}>
          {seeAllLabel}
          <SportsEventsSeeAllIconElement aria-hidden>
            <ArrowForwardIcon />
          </SportsEventsSeeAllIconElement>
        </SportsEventsSeeAllElement>
      </SportsEventsHeaderElement>

      <Carousel gap={12} slideSize="88%" align="start" showDots dotsTone="brand">
        {items.map((event) => (
          <SportsEventCard key={event.id} event={event} />
        ))}
      </Carousel>
    </SportsEventsElement>
  );
};
