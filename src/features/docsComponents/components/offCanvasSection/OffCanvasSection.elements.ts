import { pxToRem } from "@shared/utils/styles-utils";
import styled from "styled-components";

export const OffCanvasDocPanelElement = styled.div`
    padding: ${({ theme }) => theme.spacing(2)};
    color: ${({ theme }) => theme.color.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(14)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
    line-height: 1.4;
`;
