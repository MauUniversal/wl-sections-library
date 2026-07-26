import { pxToRem } from "@shared/utils/styles-utils";
import styled from "styled-components";

export const FooterElement = styled.footer`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(3)};
    width: 100%;
    padding: ${({ theme }) => `${theme.spacing(3)} ${pxToRem(16)} ${theme.spacing(2)}`};
    border-top: ${pxToRem(0.668)} solid ${({ theme }) => theme.color.background.secondary};
    background: ${({ theme }) => theme.color.background.primary};
`;

export const FooterBrandElement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(1.5)};
    text-align: center;
`;

export const FooterLogoElement = styled.img`
    display: block;
    width: auto;
    max-width: ${pxToRem(220)};
    height: ${pxToRem(36)};
    object-fit: contain;
`;

export const FooterTaglineElement = styled.p`
    margin: 0;
    max-width: ${pxToRem(320)};
    color: ${({ theme }) => theme.color.text.secondary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(13)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
    line-height: 1.4;
`;

export const FooterSocialsElement = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing(1.5)};
`;

export const FooterSocialLinkElement = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${pxToRem(40)};
    height: ${pxToRem(40)};
    border: 1px solid ${({ theme }) => theme.color.border.primary};
    border-radius: ${({ theme }) => theme.radii.circle};
    background: ${({ theme }) => theme.color.background.secondary};
    color: ${({ theme }) => theme.color.text.primary};
    font-size: ${pxToRem(18)};
    line-height: 0;
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.fast};

    &:hover {
        border-color: ${({ theme }) => theme.color.brand.primary};
        color: ${({ theme }) => theme.color.brand.primary};
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.color.brand.primary};
        outline-offset: 2px;
    }
`;

export const FooterNavElement = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: start;
    gap: ${({ theme }) => `${theme.spacing(3)} ${theme.spacing(2)}`};
    width: 100%;
`;

export const FooterNavSectionElement = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(1)};
    min-width: 0;
`;

export const FooterNavTitleElement = styled.h3`
    margin: 0;
    color: ${({ theme }) => theme.color.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(14)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    line-height: 1.3;
`;

export const FooterNavToggleElement = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing(1)};
    width: 100%;
    padding: 0;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.color.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(14)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    line-height: 1.3;
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.fast};

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.color.brand.primary};
        outline-offset: 2px;
    }
`;

export const FooterNavToggleIconElement = styled.span<{ $open: boolean }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: ${pxToRem(16)};
    line-height: 0;
    transform: rotate(${({ $open }) => ($open ? "180deg" : "0deg")});
    transition: ${({ theme }) => theme.transitions.fast};
`;

export const FooterNavListElement = styled.ul`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(0.75)};
    margin: 0;
    padding: 0;
    list-style: none;
`;

export const FooterNavLinkElement = styled.a`
    color: ${({ theme }) => theme.color.text.secondary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(13)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
    line-height: 1.4;
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.fast};

    &:hover {
        color: ${({ theme }) => theme.color.text.primary};
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.color.brand.primary};
        outline-offset: 2px;
    }
`;

export const FooterDividerElement = styled.hr`
    width: 100%;
    height: 0;
    margin: 0;
    border: none;
    border-top: ${pxToRem(0.668)} solid ${({ theme }) => theme.color.background.secondary};
`;

export const FooterBlockElement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(1.5)};
    width: 100%;
`;

export const FooterBlockTitleElement = styled.h3`
    margin: 0;
    color: ${({ theme }) => theme.color.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(14)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    line-height: 1.3;
    text-align: center;
`;

export const FooterPillsElement = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing(1)};
    width: 100%;
`;

export const FooterPillElement = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: ${pxToRem(32)};
    padding: 0 ${({ theme }) => theme.spacing(1.5)};
    border: 1px solid ${({ theme }) => theme.color.border.primary};
    border-radius: ${({ theme }) => theme.radii.pill};
    background: ${({ theme }) => theme.color.background.secondary};
    color: ${({ theme }) => theme.color.text.secondary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(12)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    line-height: 1;
`;

export const FooterLegalElement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(1)};
    width: 100%;
    text-align: center;
`;

export const FooterCopyrightElement = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.color.text.secondary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(12)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
    line-height: 1.4;
`;

export const FooterPoweredByElement = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.color.text.secondary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(12)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
    line-height: 1.4;
`;

export const FooterPoweredBrandElement = styled.span`
    color: ${({ theme }) => theme.color.brand.primary};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
`;
