import type { SVGProps } from "react";

export const ChariotIcon = ({
    width = 32,
    height = 24,
    ...props
}: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 32 24"
        fill="none"
        aria-hidden
        {...props}
    >
        <g clipPath="url(#clip0_chariot_icon)">
            <path
                d="M7.99743 22.9953C10.758 22.9953 12.9958 20.7574 12.9958 17.9969C12.9958 15.2363 10.758 12.9985 7.99743 12.9985C5.23689 12.9985 2.99902 15.2363 2.99902 17.9969C2.99902 20.7574 5.23689 22.9953 7.99743 22.9953Z"
                stroke="currentColor"
                strokeWidth="1.49952"
            />
            <path
                d="M7.99792 19.4974C8.82635 19.4974 9.49792 18.8258 9.49792 17.9974C9.49792 17.1689 8.82635 16.4974 7.99792 16.4974C7.1695 16.4974 6.49792 17.1689 6.49792 17.9974C6.49792 18.8258 7.1695 19.4974 7.99792 19.4974Z"
                fill="currentColor"
            />
            <path
                d="M7.99744 17.9969L17.9942 9.99945"
                stroke="currentColor"
                strokeWidth="1.49952"
                strokeLinecap="round"
            />
            <path
                d="M5.99811 13.9982H13.9956"
                stroke="currentColor"
                strokeWidth="1.49952"
                strokeLinecap="round"
            />
            <path
                d="M15.9949 8.49993C17.3752 8.49993 18.4941 7.381 18.4941 6.00073C18.4941 4.62046 17.3752 3.50153 15.9949 3.50153C14.6147 3.50153 13.4957 4.62046 13.4957 6.00073C13.4957 7.381 14.6147 8.49993 15.9949 8.49993Z"
                fill="currentColor"
            />
            <path
                d="M15.9949 8.49994L13.9955 12.9985H16.9946L17.9943 9.99946"
                stroke="currentColor"
                strokeWidth="1.49952"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M19.9936 11.9988C21.993 11.9988 23.9924 9.99942 25.9917 9.99942C27.9911 9.99942 29.9905 11.9988 29.9905 11.9988L30.9901 10.9991C30.9901 10.9991 28.9908 8.00006 25.9917 8.00006C22.9927 8.00006 20.9933 9.99942 18.994 9.99942L19.9936 11.9988Z"
                fill="currentColor"
            />
            <path
                d="M25.9917 9.99943L27.9911 17.9969M22.9927 11.9988L23.9924 17.9969M27.9911 8.00007L29.9904 4.00134H27.9911L25.9917 8.00007"
                stroke="currentColor"
                strokeWidth="1.49952"
                strokeLinecap="round"
            />
        </g>
        <defs>
            <clipPath id="clip0_chariot_icon">
                <rect width="31.9898" height="23.9976" fill="currentColor" />
            </clipPath>
        </defs>
    </svg>
);
