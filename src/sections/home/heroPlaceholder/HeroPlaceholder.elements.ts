import styled from "styled-components";
import { pxToRem } from "@shared/utils/styles-utils";

export const HeroPlaceholderElement = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(3)};
  width: 100%;
  min-height: ${pxToRem(320)};
  padding: ${({ theme }) => theme.spacing(6)};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.color.background.primary} 0%,
    ${({ theme }) => theme.color.neutral[800]} 55%,
    ${({ theme }) => theme.color.brand.primary}33 100%
  );
  border: 1px solid ${({ theme }) => theme.color.border.primary};
  border-radius: ${({ theme }) => theme.radii.large};
`;

export const HeroPlaceholderEyebrowElement = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text.tertiary};
`;

export const HeroPlaceholderTitleElement = styled.h2`
  margin: 0;
  max-width: ${pxToRem(560)};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xHeading};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.15;
  color: ${({ theme }) => theme.color.text.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.heading};
  }
`;

export const HeroPlaceholderDescriptionElement = styled.p`
  margin: 0;
  max-width: ${pxToRem(480)};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  line-height: 1.5;
  color: ${({ theme }) => theme.color.text.secondary};
`;

export const HeroPlaceholderActionsElement = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(1)};
`;
