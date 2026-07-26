import { pxToRem } from "@shared/utils/styles-utils";
import styled from "styled-components";

export const HeroBannerSlideElement = styled.article<{ $image: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: ${pxToRem(350)};
  height: ${pxToRem(350)};
  padding: ${({ theme }) => `${theme.spacing(2)} ${pxToRem(16)}`};
  overflow: hidden;
  border-radius: 0;
  background:
    linear-gradient(0deg, #0a0a0a 0%, rgba(10, 10, 10, 0.3) 50%, rgba(0, 0, 0, 0) 100%),
    url(${({ $image }) => $image}) center / cover no-repeat;
  -webkit-mask-image: linear-gradient(
    to top,
    transparent 0%,
    #000 ${pxToRem(48)},
    #000 100%
  );
  mask-image: linear-gradient(
    to top,
    transparent 0%,
    #000 ${pxToRem(48)},
    #000 100%
  );
`;

export const HeroBannerContentElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(1)};
  max-width: ${pxToRem(320)};
`;

export const HeroBannerTagElement = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(0.5)};
  min-height: ${pxToRem(24)};
  padding: 0 ${pxToRem(10)};
  border: 1px solid ${({ theme }) => theme.color.border.primary};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.color.overlay};
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${pxToRem(11)};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1;
  text-transform: uppercase;
`;

export const HeroBannerTagIconElement = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${pxToRem(12)};
  line-height: 0;
`;

export const HeroBannerTitleElement = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${pxToRem(22)};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.2;
`;

export const HeroBannerSubtitleElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${pxToRem(15)};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.3;
`;

export const HeroBannerDescriptionElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${pxToRem(12)};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.4;
`;
