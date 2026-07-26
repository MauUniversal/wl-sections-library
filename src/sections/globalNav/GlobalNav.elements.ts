import { pxToRem } from "@shared/utils/styles-utils";
import styled from "styled-components";

export const GlobalNavElement = styled.header`
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.header};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1.5)};
  width: 100%;
  padding: ${pxToRem(12)} ${pxToRem(16)};
  padding-top: max(${pxToRem(12)}, env(safe-area-inset-top));
  overflow: visible;
  background: ${({ theme }) => theme.color.background.primary};
`;

export const GlobalNavTopRowElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(1)};
  width: 100%;
  overflow: visible;
`;

export const GlobalNavGroupElement = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1.5)};
  min-width: 0;
  overflow: visible;
`;

export const GlobalNavSearchElement = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  width: 100%;
  min-height: ${pxToRem(44)};
  padding: 0 ${pxToRem(14)};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.color.background.secondary};
  cursor: text;
`;

export const GlobalNavSearchIconElement = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${pxToRem(18)};
  line-height: 0;
`;

export const GlobalNavSearchInputElement = styled.input`
  flex: 1;
  min-width: 0;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${pxToRem(13)};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.2;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.color.text.secondary};
  }
`;

export const GlobalNavSearchTrailingIconElement = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${({ theme }) => theme.color.secondary[400]};
  font-size: ${pxToRem(18)};
  line-height: 0;
`;

export const GlobalNavJackpotsRowElement = styled.div`
  display: flex;
  align-items: stretch;
  gap: ${pxToRem(16)};
  width: 100%;
`;
