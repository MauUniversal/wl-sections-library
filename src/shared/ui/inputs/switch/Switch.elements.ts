import { pxToRem } from "@shared/utils/styles-utils";
import styled from "styled-components";

export const SwitchRootElement = styled.label<{ $disabled?: boolean }>`
    display: inline-flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(1)};
    cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
    opacity: ${({ $disabled }) => ($disabled ? 0.55 : 1)};
    user-select: none;
`;

export const SwitchInputElement = styled.input`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
`;

export const SwitchTrackElement = styled.span<{ $checked: boolean }>`
    position: relative;
    display: inline-flex;
    flex-shrink: 0;
    align-items: center;
    width: ${pxToRem(44)};
    height: ${pxToRem(24)};
    border-radius: ${({ theme }) => theme.radii.pill};
    background: ${({ theme, $checked }) =>
        $checked ? theme.color.brand.primary : theme.color.neutral[500]};
    transition: ${({ theme }) => theme.transitions.fast};

    ${SwitchInputElement}:focus-visible + & {
        outline: 2px solid ${({ theme }) => theme.color.brand.primary};
        outline-offset: 2px;
    }
`;

export const SwitchThumbElement = styled.span<{ $checked: boolean }>`
    position: absolute;
    top: ${pxToRem(2)};
    left: ${({ $checked }) => ($checked ? pxToRem(22) : pxToRem(2))};
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};
    border-radius: ${({ theme }) => theme.radii.circle};
    background: ${({ theme }) => theme.color.text.primary};
    box-shadow: ${({ theme }) => theme.shadows.small};
    transition: ${({ theme }) => theme.transitions.fast};
`;

export const SwitchLabelElement = styled.span`
    color: ${({ theme }) => theme.color.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(13)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    line-height: 1.2;
`;
