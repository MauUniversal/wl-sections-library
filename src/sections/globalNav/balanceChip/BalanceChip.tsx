import { useEffect, useRef, useState, type ComponentType, type SVGProps } from "react";
import {
  ChevronDownIcon,
  DownloadIcon,
  GiftIcon,
  WalletIcon,
} from "@assets/icons";
import type { BalanceOption, BalanceVariant } from "../types";
import {
  BalanceChipAmountElement,
  BalanceChipChevronElement,
  BalanceChipElement,
  BalanceChipIconElement,
  BalanceChipRootElement,
  BalanceDropdownElement,
  BalanceOptionAmountElement,
  BalanceOptionContentElement,
  BalanceOptionDotElement,
  BalanceOptionElement,
  BalanceOptionIconElement,
  BalanceOptionLabelElement,
} from "./BalanceChip.elements";

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

const balanceIcons: Record<BalanceVariant, IconComponent> = {
  bonus: GiftIcon,
  withdrawable: WalletIcon,
  deposited: DownloadIcon,
};

interface BalanceChipProps {
  options: BalanceOption[];
  defaultId: BalanceVariant;
}

export const BalanceChip = ({ options, defaultId }: BalanceChipProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<BalanceVariant>(defaultId);
  const selected = options.find((option) => option.id === selectedId) ?? options[0];
  const SelectedIcon = balanceIcons[selected.id];

  useEffect(() => {
    if (!open) {
      return;
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <BalanceChipRootElement ref={rootRef}>
      <BalanceChipElement
        type="button"
        $variant={selected.id}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Saldo ${selected.label}`}
        onClick={() => setOpen((current) => !current)}
      >
        <BalanceChipIconElement aria-hidden>
          <SelectedIcon />
        </BalanceChipIconElement>
        <BalanceChipAmountElement>{selected.amount}</BalanceChipAmountElement>
        <BalanceChipChevronElement $open={open} aria-hidden>
          <ChevronDownIcon />
        </BalanceChipChevronElement>
      </BalanceChipElement>

      {open && (
        <BalanceDropdownElement role="listbox" aria-label="Tipos de saldo">
          {options.map((option) => {
            const Icon = balanceIcons[option.id];
            const isSelected = option.id === selected.id;

            return (
              <BalanceOptionElement
                key={option.id}
                type="button"
                role="option"
                $variant={option.id}
                $selected={isSelected}
                aria-selected={isSelected}
                onClick={() => {
                  setSelectedId(option.id);
                  setOpen(false);
                }}
              >
                <BalanceOptionIconElement $variant={option.id} aria-hidden>
                  <Icon />
                </BalanceOptionIconElement>
                <BalanceOptionContentElement>
                  <BalanceOptionLabelElement>{option.label}</BalanceOptionLabelElement>
                  <BalanceOptionAmountElement $selected={isSelected}>
                    {option.amount}
                  </BalanceOptionAmountElement>
                </BalanceOptionContentElement>
                {isSelected && (
                  <BalanceOptionDotElement $variant={option.id} aria-hidden />
                )}
              </BalanceOptionElement>
            );
          })}
        </BalanceDropdownElement>
      )}
    </BalanceChipRootElement>
  );
};
