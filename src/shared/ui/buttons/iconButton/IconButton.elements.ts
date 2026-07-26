import styled, { css } from "styled-components";
import type { DefaultTheme } from "styled-components";
import { pxToRem } from "@shared/utils/styles-utils";

export type IconButtonSize = "S" | "M" | "L";
export type IconButtonVariant = "surface" | "brand" | "ghost";
export type IconButtonShape = "rounded" | "circle";

interface IconButtonElementProps {
    $size: IconButtonSize;
    $variant: IconButtonVariant;
    $shape: IconButtonShape;
    $width?: number;
    $height?: number;
    $iconSize?: number;
}

const sizeStyles: Record<IconButtonSize, { box: number; icon: number }> = {
    S: { box: 32, icon: 16 },
    M: { box: 40, icon: 20 },
    L: { box: 48, icon: 24 },
};

const getVariantStyles = ($variant: IconButtonVariant, theme: DefaultTheme) => {
    switch ($variant) {
        case "brand":
            return css`
                color: ${theme.color.text.primary};
                background: ${theme.color.brand.primary};
                box-shadow: 0 0 ${pxToRem(16)} ${theme.color.brand.primary};

                &:not(:disabled):hover {
                    background: ${theme.color.button.primary.hover};
                }

                &:not(:disabled):active {
                    background: ${theme.color.button.primary.pressed};
                }
            `;
        case "ghost":
            return css`
                color: ${theme.color.text.primary};
                background: transparent;

                &:not(:disabled):hover {
                    background: ${theme.color.background.secondary};
                }

                &:not(:disabled):active {
                    background: ${theme.color.background.quaternary};
                }
            `;
        case "surface":
        default:
            return css`
                color: ${theme.color.text.primary};
                background: ${theme.color.background.secondary};

                &:not(:disabled):hover {
                    background: ${theme.color.background.quaternary};
                }

                &:not(:disabled):active {
                    background: ${theme.color.neutral[700]};
                }
            `;
    }
};

export const IconButtonElement = styled.button<IconButtonElementProps>`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    flex-shrink: 0;
    width: ${({ $size, $width }) =>
        $width !== undefined ? pxToRem($width) : pxToRem(sizeStyles[$size].box)};
    height: ${({ $size, $height }) =>
        $height !== undefined ? pxToRem($height) : pxToRem(sizeStyles[$size].box)};
    padding: 0;
    border: none;
    border-radius: ${({ theme, $shape }) =>
        $shape === "circle" ? theme.radii.circle : theme.radii.medium};
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.fast};
    font-size: ${({ $size, $iconSize }) =>
        $iconSize !== undefined ? pxToRem($iconSize) : pxToRem(sizeStyles[$size].icon)};

    ${({ $variant, theme }) => getVariantStyles($variant, theme)}

    &:disabled {
        opacity: 0.55;
        cursor: not-allowed;
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.color.brand.primary};
        outline-offset: 2px;
    }
`;

export const IconButtonIconElement = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 0;
    font-size: 1em;

    svg {
        width: 1em;
        height: 1em;
    }
`;

export const IconButtonBadgeElement = styled.span`
    position: absolute;
    top: ${pxToRem(-2)};
    right: ${pxToRem(-2)};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: ${pxToRem(16)};
    height: ${pxToRem(16)};
    padding: 0 ${pxToRem(4)};
    border-radius: ${({ theme }) => theme.radii.pill};
    background: ${({ theme }) => theme.color.secondary[500]};
    color: ${({ theme }) => theme.color.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(10)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    line-height: 1;
    pointer-events: none;
`;
