import { pxToRem } from "@shared/utils/styles-utils";
import styled from "styled-components";

export const SportsEventCardElement = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: ${pxToRem(190)};
    padding: ${({ theme }) => theme.spacing(2)};
    overflow: hidden;
    border-radius: ${({ theme }) => theme.radii.xLarge};
    background: ${({ theme }) => theme.color.neutral[800]};
`;

export const SportsEventCardHeaderElement = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing(1)};
`;

export const SportsEventCardMetaElement = styled.span`
    color: ${({ theme }) => theme.color.text.secondary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(12)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
    line-height: 1.3;
`;

export const SportsEventCardTeamsElement = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(0.5)};
`;

export const SportsEventCardTeamElement = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.color.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(16)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    line-height: 1.3;
`;

export const SportsEventCardOddsElement = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${({ theme }) => theme.spacing(1)};
`;

export const SportsEventOddButtonElement = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing(0.5)};
    min-height: ${pxToRem(52)};
    padding: ${({ theme }) => theme.spacing(1)};
    border: none;
    border-radius: ${({ theme }) => theme.radii.medium};
    background: ${({ theme }) => theme.color.neutral[700]};
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.fast};

    &:hover {
        background: ${({ theme }) => theme.color.neutral[600]};
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.color.brand.primary};
        outline-offset: 2px;
    }
`;

export const SportsEventOddLabelElement = styled.span`
    color: ${({ theme }) => theme.color.text.secondary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(11)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    line-height: 1;
`;

export const SportsEventOddValueElement = styled.span`
    color: ${({ theme }) => theme.color.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(16)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    line-height: 1;
`;
