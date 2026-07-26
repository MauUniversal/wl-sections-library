import styled from "styled-components";
import { Link } from "react-router-dom";
import { pxToRem } from "@shared/utils/styles-utils";

export const DocsComponentsPageElement = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing(4)};
  background: ${({ theme }) => theme.color.background.primary};
`;

export const DocsComponentsContentElement = styled.div`
  width: 100%;
  max-width: ${pxToRem(1200)};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
`;

export const DocsComponentsHeaderElement = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const DocsComponentsNavElement = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

export const DocsComponentsNavLinkElement = styled(Link)<{ $active?: boolean }>`
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme, $active }) =>
    $active ? theme.color.text.tertiary : theme.color.text.secondary};
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.color.text.primary};
  }
`;

export const DocsComponentsTitleElement = styled.h1`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.heading};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.color.text.primary};
`;

export const DocsComponentsSubtitleElement = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  color: ${({ theme }) => theme.color.text.secondary};
`;

export const DocsComponentsSectionsElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
`;
