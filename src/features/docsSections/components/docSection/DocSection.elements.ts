import styled from "styled-components";

export const DocSectionElement = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  padding: ${({ theme }) => theme.spacing(4)};
  background: ${({ theme }) => theme.color.background.secondary};
  border: 1px solid ${({ theme }) => theme.color.border.primary};
  border-radius: ${({ theme }) => theme.radii.large};
`;

export const DocSectionTitleElement = styled.h2`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xxLarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.color.text.primary};
`;

export const DocSectionSubtitleElement = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  color: ${({ theme }) => theme.color.text.primary};
`;

export const DocSectionDescriptionElement = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  color: ${({ theme }) => theme.color.text.secondary};
  line-height: 1.5;
`;

export const DocSectionBlockElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1.5)};
`;

export const DocTableWrapperElement = styled.div`
  overflow-x: auto;
`;

export const DocTableElement = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
`;

export const DocTableHeadCellElement = styled.th`
  padding: ${({ theme }) => theme.spacing(1.5)};
  text-align: left;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  color: ${({ theme }) => theme.color.text.primary};
  border-bottom: 1px solid ${({ theme }) => theme.color.border.primary};
`;

export const DocTableCellElement = styled.td`
  padding: ${({ theme }) => theme.spacing(1.5)};
  color: ${({ theme }) => theme.color.text.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.color.border.primary};
  vertical-align: top;
`;

export const DocPreviewElement = styled.div<{ $flush?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme, $flush }) => ($flush ? 0 : theme.spacing(3))};
  overflow: ${({ $flush }) => ($flush ? "visible" : "hidden")};
  background: ${({ theme }) => theme.color.background.primary};
  border: 1px solid ${({ theme }) => theme.color.border.primary};
  border-radius: ${({ theme }) => theme.radii.medium};
`;
