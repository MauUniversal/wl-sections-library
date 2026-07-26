import * as FlagIcons from "country-flag-icons/react/3x2";

export type CountryCode = keyof typeof FlagIcons;

interface CountryFlagProps {
    code: CountryCode;
    title?: string;
    className?: string;
    width?: string | number;
    height?: string | number;
}

export const CountryFlag = ({
    code,
    title,
    className,
    width,
    height,
}: CountryFlagProps) => {
    const Flag = FlagIcons[code];

    if (!Flag) {
        return null;
    }

    return (
        <Flag
            title={title ?? code}
            className={className}
            width={width}
            height={height}
        />
    );
};
