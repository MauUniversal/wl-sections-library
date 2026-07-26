import { pxToRem } from "@shared/utils/styles-utils";
import styled, { css } from "styled-components";
import type { CasinoGameBadgeVariant } from "./types";

export const CasinoGameCardElement = styled.article<{ $image: string }>`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: ${pxToRem(150)};
    padding: ${({ theme }) => theme.spacing(1)};
    overflow: hidden;
    border-radius: ${({ theme }) => theme.radii.xLarge};
    background:
        linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 40%,
            rgba(0, 0, 0, 0.55) 72%,
            rgba(0, 0, 0, 0.92) 100%
        ),
        url(${({ $image }) => $image}) center / cover no-repeat;
`;

export const CasinoGameCardBadgeElement = styled.span<{
    $variant: CasinoGameBadgeVariant;
}>`
    display: inline-flex;
    align-items: center;
    align-self: flex-start;
    gap: ${({ theme }) => theme.spacing(0.5)};
    min-height: ${pxToRem(20)};
    padding: 0 ${pxToRem(8)};
    border-radius: ${({ theme }) => theme.radii.pill};
    color: ${({ theme }) => theme.color.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(9)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    line-height: 1;
    text-transform: uppercase;

    ${({ theme, $variant }) => {
        if ($variant === "nuevo") {
            return css`
                background: ${theme.color.success.default};
            `;
        }
        if ($variant === "vivo") {
            return css`
                background: ${theme.color.danger.default};
            `;
        }
        return css`
            background: ${theme.color.warning.default};
            color: ${theme.color.neutral[900]};
        `;
    }}
`;

export const CasinoGameCardBadgeIconElement = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: ${pxToRem(10)};
    line-height: 0;
`;

export const CasinoGameCardContentElement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${pxToRem(2)};
    margin-top: auto;
    text-align: center;
`;

export const CasinoGameCardTitleElement = styled.h3`
    margin: 0;
    color: ${({ theme }) => theme.color.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(14)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    line-height: 1.2;
`;

export const CasinoGameCardProviderElement = styled.span`
    color: ${({ theme }) => theme.color.text.secondary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(12)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
    line-height: 1.2;
`;
