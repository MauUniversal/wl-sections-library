import { pxToRem } from "@shared/utils/styles-utils";
import styled from "styled-components";

export const LatestWinnersElement = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(2)};
    width: 100%;
    padding: ${({ theme }) => theme.spacing(2)};
    border-radius: ${({ theme }) => theme.radii.xLarge};
    background: ${({ theme }) => theme.color.background.secondary};
`;

export const LatestWinnersHeaderElement = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(1.5)};
    width: 100%;
`;

export const LatestWinnersTitleElement = styled.h2`
    margin: 0;
    color: ${({ theme }) => theme.color.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(20)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    line-height: 1.3;
`;

export const LatestWinnersTabsElement = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(1)};
    width: 100%;
`;

export const LatestWinnersTabElement = styled.button<{ $active: boolean }>`
    display: inline-flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    min-height: unset;
    padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(2)}`};
    border: none;
    border-radius: ${({ theme }) => theme.radii.pill};
    background: ${({ theme, $active }) =>
        $active ? theme.color.background.quaternary : theme.color.background.secondary};
    color: ${({ theme, $active }) =>
        $active ? theme.color.text.primary : theme.color.text.secondary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(14)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    line-height: 1;
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.fast};

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.color.brand.primary};
        outline-offset: 2px;
    }
`;

export const LatestWinnersColumnsElement = styled.div`
    display: grid;
    grid-template-columns: ${pxToRem(40)} minmax(0, 1fr) minmax(0, 1fr) auto;
    column-gap: ${({ theme }) => theme.spacing(1.5)};
    width: 100%;
    padding-inline: ${({ theme }) => theme.spacing(1.5)};
`;

export const LatestWinnersColumnLabelElement = styled.span`
    color: ${({ theme }) => theme.color.text.secondary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(12)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
    line-height: 1.2;
`;

export const LatestWinnersListElement = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(1.5)};
    width: 100%;
`;
