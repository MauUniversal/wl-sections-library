import { pxToRem } from "@shared/utils/styles-utils";
import styled, { css } from "styled-components";
import type { DefaultTheme } from "styled-components";
import type { BalanceVariant } from "../types";

const getVariantColor = (variant: BalanceVariant, theme: DefaultTheme) => {
  switch (variant) {
    case "bonus":
      return theme.color.success.soft.border;
    case "deposited":
      return theme.color.brand.primary;
    case "withdrawable":
    default:
      return theme.color.info.soft.border;
  }
};

export const BalanceChipRootElement = styled.div`
  position: relative;
  display: inline-flex;
`;

export const BalanceChipElement = styled.button<{ $variant: BalanceVariant }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  min-height: ${pxToRem(40)};
  padding: ${pxToRem(6)} ${pxToRem(12)};
  border: 1px solid ${({ theme, $variant }) => getVariantColor($variant, theme)};
  border-radius: ${({ theme }) => theme.radii.medium};
  background: ${({ theme }) => theme.color.neutral[800]};
  color: ${({ theme, $variant }) => getVariantColor($variant, theme)};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:focus-visible {
    outline: 2px solid ${({ theme, $variant }) => getVariantColor($variant, theme)};
    outline-offset: 2px;
  }
`;

export const BalanceChipIconElement = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${pxToRem(18)};
  line-height: 0;
`;

export const BalanceChipAmountElement = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${pxToRem(14)};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.2;
  white-space: nowrap;
`;

export const BalanceChipChevronElement = styled.span<{ $open: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${pxToRem(14)};
  line-height: 0;
  transform: rotate(${({ $open }) => ($open ? "180deg" : "0deg")});
  transition: ${({ theme }) => theme.transitions.fast};
`;

export const BalanceDropdownElement = styled.div`
  position: absolute;
  top: calc(100% + ${({ theme }) => theme.spacing(1)});
  left: 50%;
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(0.5)};
  width: ${pxToRem(220)};
  padding: ${({ theme }) => theme.spacing(1)};
  border: 1px solid ${({ theme }) => theme.color.border.primary};
  border-radius: ${({ theme }) => theme.radii.large};
  background: ${({ theme }) => theme.color.neutral[900]};
  box-shadow: ${({ theme }) => theme.shadows.large};
  transform: translateX(-50%);
`;

export const BalanceOptionElement = styled.button<{
  $variant: BalanceVariant;
  $selected: boolean;
}>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1.25)};
  width: 100%;
  padding: ${({ theme }) => theme.spacing(1)};
  border: none;
  border-radius: ${({ theme }) => theme.radii.medium};
  background: ${({ $variant, $selected }) => {
    if (!$selected) return "transparent";
    switch ($variant) {
      case "bonus":
        return "rgba(34, 197, 94, 0.12)";
      case "deposited":
        return "rgba(233, 30, 145, 0.12)";
      case "withdrawable":
      default:
        return "rgba(102, 158, 248, 0.16)";
    }
  }};
  color: ${({ theme, $variant, $selected }) =>
    $selected ? getVariantColor($variant, theme) : theme.color.text.primary};
  text-align: left;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.color.background.secondary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme, $variant }) => getVariantColor($variant, theme)};
    outline-offset: 2px;
  }
`;

export const BalanceOptionIconElement = styled.span<{ $variant: BalanceVariant }>`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: ${pxToRem(36)};
  height: ${pxToRem(36)};
  border-radius: ${({ theme }) => theme.radii.medium};
  font-size: ${pxToRem(18)};
  line-height: 0;

  ${({ theme, $variant }) => {
    const color = getVariantColor($variant, theme);
    return css`
      color: ${color};
      background: color-mix(in srgb, ${color} 18%, transparent);
    `;
  }}
`;

export const BalanceOptionContentElement = styled.span`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(0.25)};
  min-width: 0;
`;

export const BalanceOptionLabelElement = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${pxToRem(13)};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.2;
`;

export const BalanceOptionAmountElement = styled.span<{ $selected: boolean }>`
  color: ${({ theme, $selected }) =>
    $selected ? "inherit" : theme.color.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${pxToRem(12)};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.2;
`;

export const BalanceOptionDotElement = styled.span<{ $variant: BalanceVariant }>`
  width: ${pxToRem(8)};
  height: ${pxToRem(8)};
  border-radius: ${({ theme }) => theme.radii.circle};
  background: ${({ theme, $variant }) => getVariantColor($variant, theme)};
`;
