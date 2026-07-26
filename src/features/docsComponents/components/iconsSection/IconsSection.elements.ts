import styled from "styled-components";
import { pxToRem } from "@shared/utils/styles-utils";

export const IconsGridElement = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${pxToRem(120)}, 1fr));
    gap: ${({ theme }) => theme.spacing(2)};
`;

export const IconCardElement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing(1.5)};
    min-height: ${pxToRem(96)};
    padding: ${({ theme }) => theme.spacing(2)};
    background: ${({ theme }) => theme.color.background.secondary};
    border: 1px solid ${({ theme }) => theme.color.border.primary};
    border-radius: ${({ theme }) => theme.radii.medium};
    color: ${({ theme }) => theme.color.text.primary};
`;

export const IconPreviewElement = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: ${pxToRem(28)};
    font-size: ${pxToRem(24)};
    line-height: 0;
`;

export const IconNameElement = styled.span`
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${({ theme }) => theme.typography.fontSizes.small};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    color: ${({ theme }) => theme.color.text.secondary};
    text-align: center;
    word-break: break-word;
`;
