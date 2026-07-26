import { pxToRem } from "@shared/utils/styles-utils";
import styled, { css } from "styled-components";
import type { RecommendationBadgeVariant } from "./types";

export const RecommendationCardElement = styled.article<{ $image: string }>`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: ${pxToRem(250)};
    padding: ${({ theme }) => theme.spacing(1.5)};
    overflow: hidden;
    border-radius: ${({ theme }) => theme.radii.xLarge};
    background:
        linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 35%,
            rgba(0, 0, 0, 0.55) 70%,
            rgba(0, 0, 0, 0.9) 100%
        ),
        url(${({ $image }) => $image}) center / cover no-repeat;
`;

export const RecommendationCardBadgeElement = styled.span<{
    $variant: RecommendationBadgeVariant;
}>`
    display: inline-flex;
    align-items: center;
    align-self: flex-start;
    gap: ${({ theme }) => theme.spacing(0.5)};
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
        $variant === "live"
            ? css`
                  background: ${theme.color.danger.default};
              `
            : css`
                  background: ${theme.color.brand.primary};
              `}
`;

export const RecommendationCardBadgeDotElement = styled.span`
    width: ${pxToRem(6)};
    height: ${pxToRem(6)};
    border-radius: ${({ theme }) => theme.radii.pill};
    background: ${({ theme }) => theme.color.text.primary};
`;

export const RecommendationCardBadgeIconElement = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: ${pxToRem(11)};
    line-height: 0;
`;

export const RecommendationCardContentElement = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(0.5)};
`;

export const RecommendationCardCategoryElement = styled.span`
    color: ${({ theme }) => theme.color.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(10)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    line-height: 1.2;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    opacity: 0.9;
`;

export const RecommendationCardTitleElement = styled.h3`
    margin: 0;
    color: ${({ theme }) => theme.color.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(18)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    line-height: 1.2;
`;

export const RecommendationCardFooterElement = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing(1)};
`;

export const RecommendationCardMetaElement = styled.span`
    color: ${({ theme }) => theme.color.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(12)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
    line-height: 1.3;
    opacity: 0.9;
`;

export const RecommendationCardHighlightElement = styled.span`
    color: ${({ theme }) => theme.color.brand.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(12)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    line-height: 1.3;
    white-space: nowrap;
`;
