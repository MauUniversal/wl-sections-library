import { DocCodeBlockElement } from "./DocCodeBlock.elements";

interface DocCodeBlockProps {
  code: string;
}

export const DocCodeBlock = ({ code }: DocCodeBlockProps) => {
  return <DocCodeBlockElement>{code}</DocCodeBlockElement>;
};
