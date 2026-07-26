import { pxToRem } from "@shared/utils/styles-utils";
import styled from "styled-components";

export type OffCanvasSide = "left" | "right";

interface OffCanvasRootElementProps {
    $open: boolean;
}

export const OffCanvasRootElement = styled.div<OffCanvasRootElementProps>`
    position: fixed;
    inset: 0;
    z-index: ${({ theme }) => theme.zIndex.modal};
    pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
`;

interface OffCanvasBackdropElementProps {
    $open: boolean;
}

export const OffCanvasBackdropElement = styled.button<OffCanvasBackdropElementProps>`
    position: absolute;
    inset: 0;
    margin: 0;
    padding: 0;
    border: none;
    background: ${({ theme }) => theme.color.overlay};
    cursor: pointer;
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    transition: opacity ${({ theme }) => theme.transitions.normal};
`;

interface OffCanvasPanelElementProps {
    $open: boolean;
    $side: OffCanvasSide;
    $width: number;
}

export const OffCanvasPanelElement = styled.aside<OffCanvasPanelElementProps>`
    position: absolute;
    top: 0;
    bottom: 0;
    ${({ $side }) => ($side === "left" ? "left: 0;" : "right: 0;")}
    display: flex;
    flex-direction: column;
    width: min(100%, ${({ $width }) => pxToRem($width)});
    max-width: 85vw;
    background: ${({ theme }) => theme.color.background.primary};
    box-shadow: ${({ theme }) => theme.shadows.large};
    transform: ${({ $open, $side }) => {
        if ($open) {
            return "translateX(0)";
        }
        return $side === "left" ? "translateX(-100%)" : "translateX(100%)";
    }};
    transition: transform ${({ theme }) => theme.transitions.normal};
    padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom);
`;
