import type { ButtonHTMLAttributes, ReactNode } from "react";
import { LoadingSpinnerIcon } from "@assets/icons";
import {
    ButtonElement,
    ButtonIconElement,
    ButtonSpinnerElement,
} from "./Button.elements";
import type { ButtonSize, ButtonVariant } from "./Button.elements";

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "height" | "width"> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    fontSize?: number;
    height?: number;
    width?: number;
    loading?: boolean;
    icon?: ReactNode;
    children: ReactNode;
}

export const Button = ({
    variant = "primary",
    size = "M",
    fullWidth,
    fontSize,
    height,
    width,
    loading = false,
    icon,
    type = "button",
    disabled,
    children,
    ...rest
}: ButtonProps) => {
    return (
        <ButtonElement
            $variant={variant}
            $size={size}
            $fullWidth={fullWidth}
            $fontSize={fontSize}
            $height={height}
            $width={width}
            $loading={loading}
            type={type}
            disabled={disabled || loading}
            aria-busy={loading || undefined}
            {...rest}
        >
            {loading && (
                <ButtonSpinnerElement aria-hidden>
                    <LoadingSpinnerIcon />
                </ButtonSpinnerElement>
            )}
            {children}
            {!loading && icon && <ButtonIconElement>{icon}</ButtonIconElement>}
        </ButtonElement>
    );
};
