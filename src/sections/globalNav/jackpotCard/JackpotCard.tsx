import type { JackpotVariant } from "../types";
import {
  JackpotCardAmountElement,
  JackpotCardBadgeElement,
  JackpotCardContentElement,
  JackpotCardElement,
  JackpotCardLabelElement,
} from "./JackpotCard.elements";

interface JackpotCardProps {
  variant: JackpotVariant;
  label: string;
  amount: string;
}

export const JackpotCard = ({ variant, label, amount }: JackpotCardProps) => {
  return (
    <JackpotCardElement $variant={variant}>
      <JackpotCardBadgeElement $variant={variant} aria-hidden />
      <JackpotCardContentElement>
        <JackpotCardLabelElement>{label}</JackpotCardLabelElement>
        <JackpotCardAmountElement>{amount}</JackpotCardAmountElement>
      </JackpotCardContentElement>
    </JackpotCardElement>
  );
};
