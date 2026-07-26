import { pxToRem } from "@shared/utils/styles-utils";
import styled from "styled-components";

export const LatestWinnerCardElement = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing(1)};
    width: 100%;
    height: ${pxToRem(112)};
    padding: ${({ theme }) => theme.spacing(1.5)};
    border-radius: ${({ theme }) => theme.radii.xLarge};
    background: ${({ theme }) => theme.color.background.secondary};
`;

export const LatestWinnerTopElement = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(1.5)};
    width: 100%;
    min-width: 0;
`;

export const LatestWinnerThumbElement = styled.img`
    flex-shrink: 0;
    width: ${pxToRem(40)};
    height: ${pxToRem(40)};
    object-fit: cover;
    border-radius: ${({ theme }) => theme.radii.medium};
`;

export const LatestWinnerStatsElement = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(1.5)};
    min-width: 0;
`;

export const LatestWinnerStatElement = styled.div`
    display: inline-flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(0.75)};
    min-width: 0;
`;

export const LatestWinnerDotElement = styled.span<{ $tone: "info" | "success" | "danger" }>`
    flex-shrink: 0;
    width: ${pxToRem(8)};
    height: ${pxToRem(8)};
    border-radius: ${({ theme }) => theme.radii.pill};
    background: ${({ theme, $tone }) => {
        if ($tone === "success") return theme.color.success.default;
        if ($tone === "danger") return theme.color.danger.highlight;
        return theme.color.info.soft.border;
    }};
`;

export const LatestWinnerValueElement = styled.span<{ $tone?: "success" | "danger" }>`
    overflow: hidden;
    color: ${({ theme, $tone }) => {
        if ($tone === "success") return theme.color.success.default;
        if ($tone === "danger") return theme.color.danger.highlight;
        return theme.color.text.primary;
    }};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(12)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const LatestWinnerMultiplierElement = styled.span<{ $tone: "success" | "danger" }>`
    flex-shrink: 0;
    margin-left: auto;
    color: ${({ theme, $tone }) =>
        $tone === "success" ? theme.color.success.default : theme.color.danger.highlight};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(16)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    line-height: 1.2;
    white-space: nowrap;
`;

export const LatestWinnerBottomElement = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr) auto;
    align-items: end;
    column-gap: ${({ theme }) => theme.spacing(1)};
    width: 100%;
`;

export const LatestWinnerMetaElement = styled.div<{ $align?: "start" | "end" }>`
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(2)};
    align-items: ${({ $align }) => ($align === "end" ? "flex-end" : "flex-start")};
    min-width: 0;
    text-align: ${({ $align }) => ($align === "end" ? "right" : "left")};
`;

export const LatestWinnerMetaLabelElement = styled.span`
    color: ${({ theme }) => theme.color.text.secondary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(12)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
    line-height: 1.2;
`;

export const LatestWinnerMetaValueElement = styled.span<{ $tone?: "success" | "danger" }>`
    overflow: hidden;
    color: ${({ theme, $tone }) => {
        if ($tone === "success") return theme.color.success.default;
        if ($tone === "danger") return theme.color.danger.highlight;
        return theme.color.text.primary;
    }};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(12)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
