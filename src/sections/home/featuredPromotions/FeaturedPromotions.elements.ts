import { pxToRem } from "@shared/utils/styles-utils";
import styled from "styled-components";

export const FeaturedPromotionsElement = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(1.5)};
    width: 100%;
`;

export const FeaturedPromotionsHeaderElement = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing(1)};
    width: 100%;
`;

export const FeaturedPromotionsTitleElement = styled.h2`
    margin: 0;
    color: ${({ theme }) => theme.color.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(20)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    line-height: 1.3;
`;

export const FeaturedPromotionsSeeAllElement = styled.button`
    display: inline-flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(0.5)};
    padding: 0;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.color.brand.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(13)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    line-height: 1;
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.fast};

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.color.brand.primary};
        outline-offset: 2px;
    }
`;

export const FeaturedPromotionsSeeAllIconElement = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: ${pxToRem(14)};
    line-height: 0;
`;
