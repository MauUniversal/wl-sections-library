import type { HTMLAttributes, ReactNode } from "react";
import { TagElement } from "./Tag.elements";
import type { TagSize, TagVariant } from "./Tag.elements";

interface TagProps extends Omit<HTMLAttributes<HTMLSpanElement>, "height" | "width"> {
    variant?: TagVariant;
    size?: TagSize;
    width?: number;
    height?: number;
    padding?: number;
    children: ReactNode;
}

export const Tag = ({
    variant = "default",
    size = "M",
    width,
    height,
    padding,
    children,
    ...rest
}: TagProps) => {
    return (
        <TagElement
            $variant={variant}
            $size={size}
            $width={width}
            $height={height}
            $padding={padding}
            {...rest}
        >
            {children}
        </TagElement>
    );
};
