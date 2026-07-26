import styled from "styled-components";

export const DocCodeBlockElement = styled.pre`
  margin: 0;
  padding: ${({ theme }) => theme.spacing(2)};
  font-family: "Consolas", "Courier New", monospace;
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  line-height: 1.6;
  color: ${({ theme }) => theme.color.text.primary};
  background: ${({ theme }) => theme.color.background.secondary};
  border: 1px solid ${({ theme }) => theme.color.border.primary};
  border-radius: ${({ theme }) => theme.radii.medium};
  overflow-x: auto;
  white-space: pre-wrap;
`;
