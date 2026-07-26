import styled, { css } from "styled-components";
import { pxToRem } from "@shared/utils/styles-utils";

export type TextInputStatus = "default" | "error" | "success" | "disabled" | "readOnly";

interface TextInputFieldElementProps {
    $status: TextInputStatus;
}

const getBorderColor = ($status: TextInputStatus) => {
    switch ($status) {
        case "error":
            return css`
                border-color: ${({ theme }) => theme.color.danger.default};
            `;
        case "success":
            return css`
                border-color: ${({ theme }) => theme.color.success.default};
            `;
        case "disabled":
        case "readOnly":
            return css`
                border-color: ${({ theme }) => theme.color.border.field};
            `;
        default:
            return css`
                border-color: ${({ theme }) => theme.color.border.field};

                &:hover {
                    border-color: ${({ theme }) => theme.color.text.primary};
                }

                &:focus-within {
                    border-color: ${({ theme }) => theme.color.brand.primary};
                }
            `;
    }
};

export const TextInputRootElement = styled.div<{
    $fullWidth?: boolean;
    $width?: number;
    $maxWidth?: number;
}>`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(1)};
    width: ${({ $fullWidth, $width }) => {
        if ($fullWidth || $width === undefined) return "100%";
        return pxToRem($width);
    }};
    ${({ $maxWidth }) => $maxWidth !== undefined && `max-width: ${pxToRem($maxWidth)};`}
`;

export const TextInputLabelElement = styled.label<{ $disabled?: boolean }>`
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(13)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
    color: ${({ theme }) => theme.color.text.primary};
    ${({ $disabled }) => $disabled && `opacity: 0.4;`}
`;

export const TextInputRequiredMarkElement = styled.span`
    color: ${({ theme }) => theme.color.danger.default};
    margin-left: ${pxToRem(2)};
`;

export const TextInputFieldElement = styled.div<TextInputFieldElementProps>`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(1)};
    width: 100%;
    height: ${pxToRem(44)};
    padding: 0 ${pxToRem(14)};
    background: ${({ theme, $status }) =>
        $status === "readOnly" ? theme.color.neutral[700] : "transparent"};
    border: 1px solid;
    border-radius: ${({ theme }) => theme.radii.medium};
    transition: ${({ theme }) => theme.transitions.fast};
    ${({ $status }) => getBorderColor($status)}
    ${({ $status }) => $status === "disabled" && `opacity: 0.4;`}
`;

export const TextInputControlElement = styled.input`
    flex: 1;
    min-width: 0;
    height: 100%;
    padding: 0;
    border: none;
    outline: none;
    background: transparent;
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(13)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
    color: ${({ theme }) => theme.color.text.primary};

    &::placeholder {
        color: ${({ theme }) => theme.color.text.placeholder};
    }

    &:disabled {
        cursor: not-allowed;
    }

    &[type="number"]::-webkit-outer-spin-button,
    &[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &[type="number"] {
        -moz-appearance: textfield;
        appearance: textfield;
    }
`;

export const TextInputIconSlotElement = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: ${({ theme }) => theme.color.text.secondary};
    font-size: ${pxToRem(16)};
    line-height: 0;
`;

export const TextInputPasswordToggleElement = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.color.text.secondary};
    font-size: ${pxToRem(16)};
    line-height: 0;
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.fast};

    &:hover {
        color: ${({ theme }) => theme.color.text.primary};
    }

    &:disabled {
        cursor: not-allowed;
    }
`;

export const TextInputHelperElement = styled.p<{ $status: TextInputStatus }>`
    margin: 0;
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(12)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
    color: ${({ theme, $status }) => {
        if ($status === "error") return theme.color.danger.default;
        if ($status === "success") return theme.color.success.default;
        return theme.color.text.secondary;
    }};
    ${({ $status }) => $status === "disabled" && `opacity: 0.4;`}
`;
