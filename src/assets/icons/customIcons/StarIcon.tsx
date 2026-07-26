import type { SVGProps } from "react";

export const StarIcon = ({
    width = 16,
    height = 16,
    ...props
}: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden
        {...props}
    >
        <g clipPath="url(#clip0_star_icon)">
            <path
                d="M6.62255 10.3301C6.56305 10.0994 6.44284 9.88894 6.27441 9.72051C6.10598 9.55208 5.8955 9.43187 5.66486 9.37237L1.57616 8.31804C1.50641 8.29824 1.44501 8.25622 1.40129 8.19837C1.35758 8.14052 1.33392 8.06998 1.33392 7.99747C1.33392 7.92496 1.35758 7.85442 1.40129 7.79657C1.44501 7.73872 1.50641 7.69671 1.57616 7.67691L5.66486 6.62191C5.89542 6.56247 6.10585 6.44235 6.27427 6.27405C6.44269 6.10574 6.56295 5.8954 6.62255 5.66488L7.67688 1.57619C7.69648 1.50615 7.73845 1.44446 7.79639 1.4005C7.85433 1.35655 7.92506 1.33276 7.99778 1.33276C8.0705 1.33276 8.14123 1.35655 8.19917 1.4005C8.25711 1.44446 8.29908 1.50615 8.31868 1.57619L9.37234 5.66488C9.43184 5.89552 9.55206 6.10601 9.72049 6.27443C9.88892 6.44286 10.0994 6.56308 10.33 6.62258L14.4187 7.67624C14.489 7.69563 14.5511 7.73756 14.5952 7.79559C14.6394 7.85361 14.6634 7.92454 14.6634 7.99747C14.6634 8.07041 14.6394 8.14133 14.5952 8.19936C14.5511 8.25738 14.489 8.29931 14.4187 8.3187L10.33 9.37237C10.0994 9.43187 9.88892 9.55208 9.72049 9.72051C9.55206 9.88894 9.43184 10.0994 9.37234 10.3301L8.31801 14.4188C8.29841 14.4888 8.25644 14.5505 8.1985 14.5944C8.14057 14.6384 8.06984 14.6622 7.99712 14.6622C7.92439 14.6622 7.85367 14.6384 7.79573 14.5944C7.73779 14.5505 7.69582 14.4888 7.67622 14.4188L6.62255 10.3301Z"
                stroke="currentColor"
                strokeWidth="1.33291"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M13.3291 1.99939V4.66521"
                stroke="currentColor"
                strokeWidth="1.33291"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M14.662 3.33228H11.9962"
                stroke="currentColor"
                strokeWidth="1.33291"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2.66583 11.3297V12.6626"
                stroke="currentColor"
                strokeWidth="1.33291"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M3.3323 11.9962H1.99939"
                stroke="currentColor"
                strokeWidth="1.33291"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </g>
        <defs>
            <clipPath id="clip0_star_icon">
                <rect width="15.9949" height="15.9949" fill="currentColor" />
            </clipPath>
        </defs>
    </svg>
);
