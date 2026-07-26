import type { ReactNode } from "react";
import {
  DocSectionBlockElement,
  DocSectionDescriptionElement,
  DocSectionElement,
  DocSectionSubtitleElement,
  DocSectionTitleElement,
} from "./DocSection.elements";

interface DocSectionProps {
  title: string;
  description: string;
  children: ReactNode;
}

export const DocSection = ({ title, description, children }: DocSectionProps) => {
  return (
    <DocSectionElement>
      <DocSectionTitleElement>{title}</DocSectionTitleElement>
      <DocSectionDescriptionElement>{description}</DocSectionDescriptionElement>
      {children}
    </DocSectionElement>
  );
};

interface DocSectionBlockProps {
  title: string;
  children: ReactNode;
}

export const DocSectionBlock = ({ title, children }: DocSectionBlockProps) => {
  return (
    <DocSectionBlockElement>
      <DocSectionSubtitleElement>{title}</DocSectionSubtitleElement>
      {children}
    </DocSectionBlockElement>
  );
};
