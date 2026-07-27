import { pxToRem } from "../utils/styles-utils";

const DEFAULT_PRIMARY = "#E91E91";

export const createTheme = (primaryColor: string = DEFAULT_PRIMARY) => {
  return {
    color: {
      brand: {
        primary: primaryColor,
      },

      primary: {
        50: "#FDE9F4",
        100: "#FACEE7",
        200: "#F7AAD5",
        300: "#F381C1",
        400: "#EE50A9",
        500: "#E91E91",
        600: "#C61A7B",
        700: "#A31566",
        800: "#79104B",
        900: "#4F0A31",
      },

      secondary: {
        50: "#F3EBF3",
        100: "#E5D4E5",
        200: "#D3B4D3",
        300: "#BE91BE",
        400: "#A565A5",
        500: "#8B3B8B",
        600: "#763176",
        700: "#612961",
        800: "#481E48",
        900: "#2F142F",
      },

      neutral: {
        50: "#F5F5F5",
        100: "#D4D4D4",
        200: "#A3A3A3",
        300: "#737373",
        400: "#525252",
        500: "#404040",
        600: "#303030",
        700: "#242424",
        800: "#181818",
        900: "#111111",
      },

      button: {
        primary: {
          default: primaryColor,
          hover: `color-mix(in srgb, ${primaryColor} 85%, white)`,
          pressed: `color-mix(in srgb, ${primaryColor} 72%, black)`,
          disabled: `color-mix(in srgb, ${primaryColor} 45%, black)`,
          loading: primaryColor,
        },
        secondary: {
          default: "#8B3A8B",
          hover: "#9B569B",
          pressed: "#6C2D6C",
          disabled: "#502650",
          loading: "#8B3A8B",
        },
      },

      danger: {
        default: "#DC2626",
        hover: "#E14444",
        pressed: "#AC1E1E",
        disabled: "#7B1C1C",
        loading: "#DC2626",
        highlight: "#FF6467",
        soft: {
          text: "#4B0D0D",
          background: "#F7CFCF",
          border: "#E45656",
        },
      },

      success: {
        default: "#22C55E",
        hover: "#41CD75",
        pressed: "#1B9A49",
        disabled: "#1A6F39",
        loading: "#22C55E",
        soft: {
          text: "#0C4320",
          background: "#CEF2DC",
          border: "#53D281",
        },
      },

      warning: {
        default: "#FBBF24",
        hover: "#FCC843",
        pressed: "#C4951C",
        disabled: "#8B6B1B",
        loading: "#FBBF24",
        soft: {
          text: "#55410C",
          background: "#FEF1CF",
          border: "#FCCD54",
        },
      },

      info: {
        soft: {
          text: "#142C54",
          background: "#D4E4FD",
          border: "#669EF8",
        },
      },

      text: {
        primary: "rgba(255, 255, 255, 1)",
        secondary: "rgba(255, 255, 255, 0.6)",
        tertiary: primaryColor,
        placeholder: "#A8A8A8",
      },

      background: {
        primary: "rgba(10, 10, 15, 1)",
        secondary: "rgba(255, 255, 255, 0.05)",
        tertiary: primaryColor,
        quaternary: "rgba(255, 255, 255, 0.20)",
        sheet: "#0A0A0A",
        sheetMuted: "rgba(18, 18, 24, 0.95)",
      },

      overlay: "rgba(0, 0, 0, 0.6)",

      border: {
        primary: "rgba(255, 255, 255, 0.10)",
        soft: "rgba(255, 255, 255, 0.05)",
        field: "#343434",
      },
    },

    typography: {
      fontFamily: {
        primary: "Poppins, sans-serif",
        secondary: "Poppins, sans-serif",
      },

      fontSizes: {
        small: pxToRem(12),
        normal: pxToRem(14),
        large: pxToRem(16),
        xLarge: pxToRem(18),
        pointDesktop: pxToRem(20),
        pointDesktopMini: pxToRem(22),
        xxLarge: pxToRem(24),
        xxxLarge: pxToRem(28),
        heading: pxToRem(32),
        mHeading: pxToRem(36),
        xHeading: pxToRem(40),
        xxHeading: pxToRem(48),
      },

      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        xBold: 800,
        extraBold: 900,
      },
    },

    breakpoints: {
      mobile: "579px",
      tablet: "767px",
      desktopMini: "902px",
      smallDesktop: "1023px",
      mediumDesktop: "1279px",
      desktop: "1365px",
      largeDesktop: "1439px",
      wide: "1920px",
    },

    shadows: {
      small: "0 1px 3px rgba(0, 0, 0, 0.12)",
      medium: "0 4px 6px rgba(0, 0, 0, 0.16)",
      large: "0 10px 20px rgba(0, 0, 0, 0.19)",
      xLarge: "0 8px 30px rgba(0,0,0,.15)",
      sheet: "0 -20px 50px 0 rgba(0, 0, 0, 0.50)",
    },

    radii: {
      none: "0px",
      small: pxToRem(4),
      medium: pxToRem(8),
      large: pxToRem(12),
      xLarge: pxToRem(16),
      xxLarge: pxToRem(40),
      pill: "999px",
      circle: "50%",
    },

    zIndex: {
      base: 0,
      header: 100,
      floating: 150,
      dropdown: 200,
      overlay: 300,
      modal: 400,
      tooltip: 500,
      toast: 600,
    },

    transitions: {
      fast: "0.15s ease-in-out",
      normal: "0.25s ease-in-out",
      slow: "0.4s ease-in-out",
    },

    spacing: (factor: number) => `${factor * 8}px`,
  };
};

export const theme = createTheme();
