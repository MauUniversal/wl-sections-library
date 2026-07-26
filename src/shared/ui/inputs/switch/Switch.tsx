import type { InputHTMLAttributes } from "react";
import {
    SwitchInputElement,
    SwitchLabelElement,
    SwitchRootElement,
    SwitchThumbElement,
    SwitchTrackElement,
} from "./Switch.elements";

interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label?: string;
}

export const Switch = ({
    checked,
    onChange,
    label,
    disabled,
    id,
    "aria-label": ariaLabel,
    ...rest
}: SwitchProps) => {
    return (
        <SwitchRootElement $disabled={disabled}>
            {label && <SwitchLabelElement>{label}</SwitchLabelElement>}
            <SwitchInputElement
                {...rest}
                id={id}
                type="checkbox"
                role="switch"
                checked={checked}
                disabled={disabled}
                aria-label={ariaLabel ?? label}
                onChange={(event) => onChange(event.target.checked)}
            />
            <SwitchTrackElement $checked={checked} aria-hidden>
                <SwitchThumbElement $checked={checked} />
            </SwitchTrackElement>
        </SwitchRootElement>
    );
};
