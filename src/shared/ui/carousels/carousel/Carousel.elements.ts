import { pxToRem } from "@shared/utils/styles-utils";
import styled from "styled-components";

interface CarouselViewportElementProps {
    $gap: number;
}

interface CarouselSlideElementProps {
    $slideSize: string;
    $gap: number;
}

export const CarouselElement = styled.div`
    position: relative;
    width: 100%;
`;

export const CarouselViewportElement = styled.div`
    overflow: hidden;
    width: 100%;
`;

export const CarouselContainerElement = styled.div<CarouselViewportElementProps>`
    display: flex;
    touch-action: pan-y pinch-zoom;
    margin-left: ${({ $gap }) => pxToRem(-$gap)};
`;

export const CarouselSlideElement = styled.div<CarouselSlideElementProps>`
    position: relative;
    flex: 0 0 ${({ $slideSize }) => $slideSize};
    min-width: 0;
    padding-left: ${({ $gap }) => pxToRem($gap)};
`;

export const CarouselArrowPrevElement = styled.div`
    position: absolute;
    top: 50%;
    left: ${pxToRem(8)};
    z-index: 1;
    transform: translateY(-50%);
`;

export const CarouselArrowNextElement = styled.div`
    position: absolute;
    top: 50%;
    right: ${pxToRem(8)};
    z-index: 1;
    transform: translateY(-50%);
`;

export const CarouselDotsElement = styled.div<{ $overlay?: boolean; $bottom?: number }>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing(1)};
    margin-top: ${({ theme, $overlay }) => ($overlay ? 0 : theme.spacing(2))};

    ${({ $overlay, $bottom = 12 }) =>
        $overlay &&
        `
        position: absolute;
        left: 0;
        right: 0;
        bottom: ${pxToRem($bottom)};
        z-index: 2;
    `}
`;

export type CarouselDotsTone = "light" | "brand";

export const CarouselDotElement = styled.button<{
    $active: boolean;
    $tone: CarouselDotsTone;
}>`
    width: ${({ $active }) => ($active ? pxToRem(24) : pxToRem(8))};
    height: ${pxToRem(8)};
    padding: 0;
    border: none;
    border-radius: ${({ theme }) => theme.radii.pill};
    background: ${({ theme, $active, $tone }) => {
        if (!$active) return theme.color.text.secondary;
        return $tone === "brand" ? theme.color.brand.primary : theme.color.text.primary;
    }};
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.fast};

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.color.brand.primary};
        outline-offset: 2px;
    }
`;
