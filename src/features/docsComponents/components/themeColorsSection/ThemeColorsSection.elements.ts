import styled from "styled-components";
import { pxToRem } from "@shared/utils/styles-utils";

interface ColorSwatchElementProps {
    $color: string;
}

export const ColorScaleRowElement = styled.div`
    display: grid;
    grid-template-columns: repeat(10, minmax(0, 1fr));
    gap: ${({ theme }) => theme.spacing(1)};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        grid-template-columns: repeat(5, minmax(0, 1fr));
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;

export const ColorInteractiveRowElement = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: ${({ theme }) => theme.spacing(1)};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;

export const ColorSemanticRowElement = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${pxToRem(140)}, 1fr));
    gap: ${({ theme }) => theme.spacing(1.5)};
`;

export const ColorSwatchCardElement = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(1)};
    min-width: 0;
`;

export const ColorSwatchElement = styled.div<ColorSwatchElementProps>`
    width: 100%;
    height: ${pxToRem(56)};
    background: ${({ $color }) => $color};
    border: 1px solid ${({ theme }) => theme.color.border.primary};
    border-radius: ${({ theme }) => theme.radii.medium};
`;

export const ColorSwatchMetaElement = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(2)};
    min-width: 0;
`;

export const ColorSwatchLabelElement = styled.span`
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${({ theme }) => theme.typography.fontSizes.small};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    color: ${({ theme }) => theme.color.text.primary};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const ColorSwatchValueElement = styled.span`
    font-family: "Consolas", "Courier New", monospace;
    font-size: ${({ theme }) => theme.typography.fontSizes.small};
    color: ${({ theme }) => theme.color.text.secondary};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const ColorTokenPathElement = styled.code`
    font-family: "Consolas", "Courier New", monospace;
    font-size: ${({ theme }) => theme.typography.fontSizes.small};
    color: ${({ theme }) => theme.color.text.tertiary};
`;
