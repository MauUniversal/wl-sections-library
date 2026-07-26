import { pxToRem } from "@shared/utils/styles-utils";
import styled, { css } from "styled-components";
import type { JackpotVariant } from "../types";

interface JackpotCardElementProps {
  $variant: JackpotVariant;
}

const variantStyles: Record<JackpotVariant, { card: string; badge: string }> = {
  mega: {
    card: "linear-gradient(157deg, rgba(240, 177, 0, 0.05) 8.57%, rgba(255, 105, 0, 0.05) 50%, rgba(251, 44, 54, 0.05) 91.43%)",
    badge: "linear-gradient(135deg, #FDC700 0%, #FF6900 50%, #FB2C36 100%)",
  },
  major: {
    card: "linear-gradient(157deg, rgba(233, 30, 145, 0.05) 8.57%, rgba(173, 70, 255, 0.05) 50%, rgba(246, 51, 154, 0.05) 91.43%)",
    badge: "linear-gradient(135deg, #E91E91 0%, #AD46FF 50%, #F6339A 100%)",
  },
};

const badgeShadow =
  "0 10px 15px -3px rgba(0, 0, 0, 0.10), 0 4px 6px -4px rgba(0, 0, 0, 0.10)";

export const JackpotCardElement = styled.article<JackpotCardElementProps>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1.5)};
  flex: 1;
  min-width: 0;
  height: ${pxToRem(77)};
  padding: 0 ${pxToRem(16)};
  border-radius: ${({ theme }) => theme.radii.medium};
  box-sizing: border-box;

  ${({ $variant }) => css`
    background: ${variantStyles[$variant].card};
  `}
`;

export const JackpotCardBadgeElement = styled.span<JackpotCardElementProps>`
  display: inline-flex;
  flex-shrink: 0;
  width: ${pxToRem(40)};
  height: ${pxToRem(40)};
  border-radius: ${({ theme }) => theme.radii.circle};
  box-shadow: ${badgeShadow};

  ${({ $variant }) => css`
    background: ${variantStyles[$variant].badge};
  `}
`;

export const JackpotCardContentElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(0.5)};
  min-width: 0;
`;

export const JackpotCardLabelElement = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.color.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${pxToRem(10)};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: 1.2;
  text-transform: uppercase;
`;

export const JackpotCardAmountElement = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${pxToRem(16)};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.2;
`;
