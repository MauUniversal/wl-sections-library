import { pxToRem } from "@shared/utils/styles-utils";
import styled from "styled-components";

export const CountryFlagPreviewGridElement = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(1.5)};
`;

export const CountryFlagPreviewItemElement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(0.75)};
`;

export const CountryFlagPreviewIconElement = styled.span`
    display: inline-flex;
    width: ${pxToRem(36)};
    height: ${pxToRem(24)};
    overflow: hidden;
    border-radius: ${({ theme }) => theme.radii.small};
    line-height: 0;

    svg {
        display: block;
        width: 100%;
        height: 100%;
    }
`;

export const CountryFlagPreviewLabelElement = styled.span`
    color: ${({ theme }) => theme.color.text.secondary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(11)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    line-height: 1;
`;
