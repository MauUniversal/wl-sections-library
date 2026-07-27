import type { ButtonHTMLAttributes, ReactNode } from "react";
import {
    FloatingButtonElement,
    FloatingButtonIconElement,
} from "./FloatingButton.elements";
import type {
    FloatingButtonPosition,
    FloatingButtonSide,
    FloatingButtonSize,
    FloatingButtonVariant,
} from "./FloatingButton.elements";

interface FloatingButtonProps
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
    icon: ReactNode;
    "aria-label": string;
    variant?: FloatingButtonVariant;
    side?: FloatingButtonSide;
    size?: FloatingButtonSize;
    position?: FloatingButtonPosition;
    offset?: number;
    bottomOffset?: number;
    iconSize?: number;
}

export const FloatingButton = ({
    icon,
    variant = "brand",
    side = "right",
    size = "M",
    position = "fixed",
    offset = 16,
    bottomOffset,
    iconSize,
    type = "button",
    ...rest
}: FloatingButtonProps) => {
    return (
        <FloatingButtonElement
            $variant={variant}
            $side={side}
            $size={size}
            $position={position}
            $offset={offset}
            $bottomOffset={bottomOffset}
            $iconSize={iconSize}
            type={type}
            {...rest}
        >
            <FloatingButtonIconElement $size={size} $iconSize={iconSize} aria-hidden>
                {icon}
            </FloatingButtonIconElement>
        </FloatingButtonElement>
    );
};
