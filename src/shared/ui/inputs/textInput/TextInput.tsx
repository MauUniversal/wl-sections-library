import { useId, useState } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import { EyeIcon, EyeOffIcon } from "@assets/icons";
import {
    TextInputControlElement,
    TextInputFieldElement,
    TextInputHelperElement,
    TextInputIconSlotElement,
    TextInputLabelElement,
    TextInputPasswordToggleElement,
    TextInputRequiredMarkElement,
    TextInputRootElement,
} from "./TextInput.elements";
import type { TextInputStatus } from "./TextInput.elements";

export type TextInputType = "text" | "email" | "password" | "number" | "tel";

interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size" | "width"> {
    type?: TextInputType;
    label?: string;
    helperText?: string;
    error?: boolean | string;
    success?: boolean | string;
    required?: boolean;
    fullWidth?: boolean;
    width?: number;
    maxWidth?: number;
    leadingIcon?: ReactNode;
    trailingIcon?: ReactNode;
    showPasswordToggle?: boolean;
}

const resolveStatus = ({
    disabled,
    readOnly,
    error,
    success,
}: {
    disabled?: boolean;
    readOnly?: boolean;
    error?: boolean | string;
    success?: boolean | string;
}): TextInputStatus => {
    if (disabled) return "disabled";
    if (error) return "error";
    if (success) return "success";
    if (readOnly) return "readOnly";
    return "default";
};

const resolveHelperText = ({
    error,
    success,
    helperText,
}: {
    error?: boolean | string;
    success?: boolean | string;
    helperText?: string;
}): string | undefined => {
    if (typeof error === "string" && error.length > 0) return error;
    if (typeof success === "string" && success.length > 0) return success;
    return helperText;
};

export const TextInput = ({
    type = "text",
    label,
    helperText,
    error,
    success,
    required,
    fullWidth,
    width,
    maxWidth,
    leadingIcon,
    trailingIcon,
    showPasswordToggle = false,
    disabled,
    readOnly,
    id,
    ...rest
}: TextInputProps) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const status = resolveStatus({ disabled, readOnly, error, success });
    const resolvedHelperText = resolveHelperText({ error, success, helperText });
    const canTogglePassword = type === "password" && showPasswordToggle;
    const resolvedType = canTogglePassword && isPasswordVisible ? "text" : type;

    return (
        <TextInputRootElement $fullWidth={fullWidth} $width={width} $maxWidth={maxWidth}>
            {label && (
                <TextInputLabelElement htmlFor={inputId} $disabled={disabled}>
                    {label}
                    {required && <TextInputRequiredMarkElement aria-hidden>*</TextInputRequiredMarkElement>}
                </TextInputLabelElement>
            )}

            <TextInputFieldElement $status={status}>
                {leadingIcon && <TextInputIconSlotElement>{leadingIcon}</TextInputIconSlotElement>}

                <TextInputControlElement
                    id={inputId}
                    type={resolvedType}
                    disabled={disabled}
                    readOnly={readOnly}
                    required={required}
                    aria-invalid={status === "error"}
                    aria-describedby={resolvedHelperText ? `${inputId}-helper` : undefined}
                    {...rest}
                />

                {canTogglePassword ? (
                    <TextInputPasswordToggleElement
                        type="button"
                        disabled={disabled}
                        aria-label={isPasswordVisible ? "Ocultar contraseña" : "Mostrar contraseña"}
                        onClick={() => setIsPasswordVisible((prev) => !prev)}
                    >
                        {isPasswordVisible ? <EyeOffIcon /> : <EyeIcon />}
                    </TextInputPasswordToggleElement>
                ) : (
                    trailingIcon && <TextInputIconSlotElement>{trailingIcon}</TextInputIconSlotElement>
                )}
            </TextInputFieldElement>

            {resolvedHelperText && (
                <TextInputHelperElement id={`${inputId}-helper`} $status={status}>
                    {resolvedHelperText}
                </TextInputHelperElement>
            )}
        </TextInputRootElement>
    );
};
