import { pxToRem } from "@shared/utils/styles-utils";
import styled from "styled-components";

export const RecommendationsElement = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(1.5)};
    width: 100%;
`;

export const RecommendationsTitleElement = styled.h2`
    margin: 0;
    color: ${({ theme }) => theme.color.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(20)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    line-height: 1.3;
`;
