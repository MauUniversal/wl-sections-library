import { pxToRem } from "@shared/utils/styles-utils";
import styled, { css } from "styled-components";
import type { PromoBadgeVariant } from "./types";

export const PromoCardElement = styled.article<{ $image: string }>`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: ${pxToRem(160)};
    padding: ${({ theme }) => theme.spacing(1.5)};
    overflow: hidden;
    border-radius: ${({ theme }) => theme.radii.large};
    background:
        linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.15) 45%, rgba(0, 0, 0, 0) 100%),
        url(${({ $image }) => $image}) center / cover no-repeat;
`;

export const PromoCardBadgeElement = styled.span<{ $variant: PromoBadgeVariant }>`
    display: inline-flex;
    align-items: center;
    align-self: flex-start;
    min-height: ${pxToRem(22)};
    padding: 0 ${pxToRem(10)};
    border-radius: ${({ theme }) => theme.radii.pill};
    color: ${({ theme }) => theme.color.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(10)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    line-height: 1;
    text-transform: uppercase;

    ${({ theme, $variant }) =>
        $variant === "nuevo"
            ? css`
                  background: ${theme.color.success.default};
              `
            : css`
                  background: ${theme.color.info.soft.border};
              `}
`;

export const PromoCardContentElement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(0.5)};
    text-align: center;
`;

export const PromoCardTitleElement = styled.h3`
    margin: 0;
    color: ${({ theme }) => theme.color.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(13)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    line-height: 1.2;
    text-transform: uppercase;
`;

export const PromoCardAmountElement = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.color.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(18)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    line-height: 1.2;
`;
