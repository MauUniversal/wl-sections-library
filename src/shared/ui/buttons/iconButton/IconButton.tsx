import type { ButtonHTMLAttributes, ReactNode } from "react";
import {
    IconButtonBadgeElement,
    IconButtonElement,
    IconButtonIconElement,
} from "./IconButton.elements";
import type {
    IconButtonShape,
    IconButtonSize,
    IconButtonVariant,
} from "./IconButton.elements";

interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "height" | "width"> {
    icon: ReactNode;
    "aria-label": string;
    variant?: IconButtonVariant;
    shape?: IconButtonShape;
    size?: IconButtonSize;
    width?: number;
    height?: number;
    iconSize?: number;
    badge?: number | string | boolean;
}

export const IconButton = ({
    icon,
    variant = "surface",
    shape = "rounded",
    size = "M",
    width,
    height,
    iconSize,
    badge,
    type = "button",
    ...rest
}: IconButtonProps) => {
    const showBadge = badge !== undefined && badge !== false && badge !== 0 && badge !== "";
    const badgeContent = typeof badge === "boolean" ? "" : badge;

    return (
        <IconButtonElement
            $variant={variant}
            $shape={shape}
            $size={size}
            $width={width}
            $height={height}
            $iconSize={iconSize}
            type={type}
            {...rest}
        >
            <IconButtonIconElement aria-hidden>{icon}</IconButtonIconElement>
            {showBadge && (
                <IconButtonBadgeElement>
                    {badgeContent}
                </IconButtonBadgeElement>
            )}
        </IconButtonElement>
    );
};
