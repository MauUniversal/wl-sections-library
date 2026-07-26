import type { BalanceOption, BalanceVariant, JackpotItem } from "./types";

export const balanceOptions: BalanceOption[] = [
  { id: "bonus", label: "Bono", amount: "$ 0,00" },
  { id: "withdrawable", label: "Retirable", amount: "$ 0,00" },
  { id: "deposited", label: "Depositado", amount: "$ 0,00" },
];

export const balanceDefaultId: BalanceVariant = "withdrawable";

export const jackpotItems: JackpotItem[] = [
  {
    id: "mega",
    variant: "mega",
    label: "Mega Jackpot",
    amount: "$ 1.272.887,",
  },
  {
    id: "major",
    variant: "major",
    label: "Major Jackpot",
    amount: "$ 359.180,6",
  },
];

export const defaultSearchPlaceholder = "Buscar juegos o preguntale a la IA...";
export const defaultNotificationBadge = 2;
