import styled, { css } from "styled-components";
import type { DefaultTheme } from "styled-components";
import { pxToRem } from "@shared/utils/styles-utils";

export type FloatingButtonSize = "M" | "L";
export type FloatingButtonVariant = "brand" | "surface";
export type FloatingButtonSide = "right" | "left";
export type FloatingButtonPosition = "fixed" | "relative";

interface FloatingButtonElementProps {
    $size: FloatingButtonSize;
    $variant: FloatingButtonVariant;
    $side: FloatingButtonSide;
    $offset: number;
    $bottomOffset?: number;
    $position: FloatingButtonPosition;
    $iconSize?: number;
}

const sizeStyles: Record<FloatingButtonSize, { box: number; icon: number }> = {
    M: { box: 56, icon: 28 },
    L: { box: 64, icon: 32 },
};

const getVariantStyles = ($variant: FloatingButtonVariant, theme: DefaultTheme) => {
    switch ($variant) {
        case "surface":
            return css`
                color: ${theme.color.text.primary};
                background: ${theme.color.background.secondary};
                box-shadow: ${theme.shadows.large};

                &:not(:disabled):hover {
                    background: ${theme.color.background.quaternary};
                }

                &:not(:disabled):active {
                    background: ${theme.color.neutral[700]};
                }
            `;
        case "brand":
        default:
            return css`
                color: ${theme.color.text.primary};
                background: ${theme.color.brand.primary};
                box-shadow: ${theme.shadows.large};

                &:not(:disabled):hover {
                    background: ${theme.color.button.primary.hover};
                }

                &:not(:disabled):active {
                    background: ${theme.color.button.primary.pressed};
                }
            `;
    }
};

export const FloatingButtonElement = styled.button<FloatingButtonElementProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: ${({ $size }) => pxToRem(sizeStyles[$size].box)};
    height: ${({ $size }) => pxToRem(sizeStyles[$size].box)};
    padding: 0;
    border: none;
    border-radius: ${({ theme }) => theme.radii.xLarge};
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.fast};
    ${({ $variant, theme }) => getVariantStyles($variant, theme)}
    ${({ $position, $side, $offset, $bottomOffset }) =>
        $position === "fixed"
            ? css`
                  position: fixed;
                  ${$bottomOffset !== undefined
                      ? css`
                            bottom: ${pxToRem($bottomOffset)};
                        `
                      : css`
                            top: 50%;
                            transform: translateY(-50%);
                        `}
                  ${$side === "right"
                      ? css`
                            right: ${pxToRem($offset)};
                        `
                      : css`
                            left: ${pxToRem($offset)};
                        `}
                  z-index: ${({ theme }) => theme.zIndex.floating};
              `
            : css`
                  position: relative;
              `}

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.color.brand.primary};
        outline-offset: 2px;
    }
`;

export const FloatingButtonIconElement = styled.span<{ $size: FloatingButtonSize; $iconSize?: number }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 0;
    font-size: ${({ $size, $iconSize }) =>
        $iconSize !== undefined ? pxToRem($iconSize) : pxToRem(sizeStyles[$size].icon)};

    & > svg {
        width: 1em;
        height: 1em;
    }
`;
