export type JackpotVariant = "mega" | "major";

export interface JackpotItem {
  id: string;
  variant: JackpotVariant;
  label: string;
  amount: string;
}

export type BalanceVariant = "bonus" | "withdrawable" | "deposited";

export interface BalanceOption {
  id: BalanceVariant;
  label: string;
  amount: string;
}
