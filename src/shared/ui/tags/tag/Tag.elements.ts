import styled, { css } from "styled-components";
import type { DefaultTheme } from "styled-components";
import { pxToRem } from "@shared/utils/styles-utils";

export type TagSize = "S" | "M" | "L";
export type TagVariant =
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "info";

interface TagElementProps {
    $size: TagSize;
    $variant: TagVariant;
    $width?: number;
    $height?: number;
    $padding?: number;
}

const sizeStyles: Record<TagSize, { height: string; fontSize: string }> = {
    S: { height: pxToRem(24), fontSize: pxToRem(11) },
    M: { height: pxToRem(28), fontSize: pxToRem(12) },
    L: { height: pxToRem(34), fontSize: pxToRem(13) },
};

const getVariantStyles = ($variant: TagVariant, theme: DefaultTheme) => {
    switch ($variant) {
        case "primary":
            return css`
                color: ${theme.color.primary[900]};
                background: ${theme.color.primary[100]};
                border-color: ${theme.color.primary[400]};
            `;
        case "secondary":
            return css`
                color: ${theme.color.secondary[900]};
                background: ${theme.color.secondary[100]};
                border-color: ${theme.color.secondary[400]};
            `;
        case "success":
            return css`
                color: ${theme.color.success.soft.text};
                background: ${theme.color.success.soft.background};
                border-color: ${theme.color.success.soft.border};
            `;
        case "warning":
            return css`
                color: ${theme.color.warning.soft.text};
                background: ${theme.color.warning.soft.background};
                border-color: ${theme.color.warning.soft.border};
            `;
        case "error":
            return css`
                color: ${theme.color.danger.soft.text};
                background: ${theme.color.danger.soft.background};
                border-color: ${theme.color.danger.soft.border};
            `;
        case "info":
            return css`
                color: ${theme.color.info.soft.text};
                background: ${theme.color.info.soft.background};
                border-color: ${theme.color.info.soft.border};
            `;
        case "default":
        default:
            return css`
                color: ${theme.color.text.primary};
                background: transparent;
                border-color: ${theme.color.border.field};
            `;
    }
};

export const TagElement = styled.span<TagElementProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${({ $width }) => ($width !== undefined ? pxToRem($width) : pxToRem(92))};
    height: ${({ $size, $height }) =>
        $height !== undefined ? pxToRem($height) : sizeStyles[$size].height};
    padding: 0 ${({ $padding }) => ($padding !== undefined ? pxToRem($padding) : pxToRem(12))};
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${({ $size }) => sizeStyles[$size].fontSize};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    line-height: 1;
    white-space: nowrap;
    border: 1px solid;
    border-radius: ${({ theme }) => theme.radii.pill};
    ${({ $variant, theme }) => getVariantStyles($variant, theme)}
`;
