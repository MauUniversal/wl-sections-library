import styled, { css, keyframes } from "styled-components";
import type { DefaultTheme } from "styled-components";
import { pxToRem } from "@shared/utils/styles-utils";

export type ButtonSize = "S" | "M" | "L" | "XL";
export type ButtonVariant =
    | "primary"
    | "secondary"
    | "ghost"
    | "contrast"
    | "danger"
    | "success"
    | "warning";

interface ButtonElementProps {
    $size: ButtonSize;
    $variant: ButtonVariant;
    $fullWidth?: boolean;
    $fontSize?: number;
    $height?: number;
    $width?: number;
    $loading?: boolean;
}

type InteractiveColor = {
    default: string;
    hover: string;
    pressed: string;
    disabled: string;
    loading: string;
};

const sizeStyles: Record<
    ButtonSize,
    { fontSize: string; height: string; width: string; paddingX: string }
> = {
    S: {
        fontSize: pxToRem(13),
        height: pxToRem(36),
        width: pxToRem(164),
        paddingX: pxToRem(16),
    },
    M: {
        fontSize: pxToRem(14),
        height: pxToRem(44),
        width: pxToRem(196),
        paddingX: pxToRem(20),
    },
    L: {
        fontSize: pxToRem(15),
        height: pxToRem(52),
        width: pxToRem(216),
        paddingX: pxToRem(24),
    },
    XL: {
        fontSize: pxToRem(16),
        height: pxToRem(60),
        width: pxToRem(244),
        paddingX: pxToRem(28),
    },
};

const filledVariant = (
    colors: InteractiveColor,
    theme: DefaultTheme,
    $loading?: boolean,
) => css`
    color: ${theme.color.text.primary};
    background: ${$loading ? colors.loading : colors.default};
    border: none;

    ${!$loading &&
    css`
        &:not(:disabled):hover {
            background: ${colors.hover};
        }

        &:not(:disabled):active {
            background: ${colors.pressed};
        }
    `}

    &:disabled {
        background: ${$loading ? colors.loading : colors.disabled};
    }
`;

const ghostVariant = (theme: DefaultTheme, $loading?: boolean) => {
    const border = theme.color.button.primary.default;

    return css`
        color: ${border};
        background: transparent;
        border: 1px solid ${border};

        ${!$loading &&
        css`
            &:not(:disabled):hover {
                color: ${border};
                border-color: ${border};
            }

            &:not(:disabled):active {
                color: ${border};
                border-color: ${border};
            }
        `}

        &:disabled {
            opacity: ${$loading ? 1 : 0.55};
        }
    `;
};

const contrastVariant = (theme: DefaultTheme, $loading?: boolean) => css`
    color: ${theme.color.neutral[900]};
    background: ${$loading ? theme.color.neutral[100] : theme.color.neutral[50]};
    border: none;

    ${!$loading &&
    css`
        &:not(:disabled):hover {
            background: ${theme.color.neutral[100]};
        }

        &:not(:disabled):active {
            background: ${theme.color.neutral[200]};
        }
    `}

    &:disabled {
        background: ${$loading ? theme.color.neutral[100] : theme.color.neutral[300]};
        color: ${theme.color.neutral[600]};
    }
`;

const getVariantStyles = (
    $variant: ButtonVariant,
    theme: DefaultTheme,
    $loading?: boolean,
) => {
    switch ($variant) {
        case "secondary":
            return filledVariant(theme.color.button.secondary, theme, $loading);
        case "danger":
            return filledVariant(theme.color.danger, theme, $loading);
        case "success":
            return filledVariant(theme.color.success, theme, $loading);
        case "warning":
            return filledVariant(theme.color.warning, theme, $loading);
        case "ghost":
            return ghostVariant(theme, $loading);
        case "contrast":
            return contrastVariant(theme, $loading);
        case "primary":
        default:
            return filledVariant(theme.color.button.primary, theme, $loading);
    }
};

export const ButtonElement = styled.button<ButtonElementProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing(1)};
    box-sizing: border-box;
    ${({ $fullWidth, $width, $size }) => {
        if ($fullWidth) return `width: 100%;`;
        if ($width !== undefined) return `width: ${pxToRem($width)};`;
        return `width: ${sizeStyles[$size].width};`;
    }}
    height: ${({ $size, $height }) =>
        $height !== undefined ? pxToRem($height) : sizeStyles[$size].height};
    padding: 0 ${({ $size }) => sizeStyles[$size].paddingX};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${({ $size, $fontSize }) =>
        $fontSize !== undefined ? pxToRem($fontSize) : sizeStyles[$size].fontSize};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    border-radius: ${({ theme }) => theme.radii.medium};
    cursor: ${({ $loading }) => ($loading ? "wait" : "pointer")};
    transition: ${({ theme }) => theme.transitions.fast};
    pointer-events: ${({ $loading }) => ($loading ? "none" : "auto")};

    ${({ $variant, theme, $loading }) => getVariantStyles($variant, theme, $loading)}

    &:disabled {
        cursor: not-allowed;
    }
`;

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const ButtonIconElement = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    line-height: 0;
    font-size: 1.15em;
`;

export const ButtonSpinnerElement = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    line-height: 0;
    font-size: 1.15em;
    animation: ${spin} 0.8s linear infinite;
`;
