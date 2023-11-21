import { createTheme } from "@mui/material/styles";

//You have to use module augmentation to add new variables to the Theme and ThemeOptions.
declare module "@mui/material/styles" {
  interface Theme {
    brandColors?: {
      blueBanner: string;
      primary: string;
      secondary: string;
      lightGrey: string;
      white: string;
      darkGrey: string;
      black: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    brandColors?: {
      blueBanner: string;
      primary: string;
      secondary: string;
      lightGrey: string;
      white: string;
      darkGrey: string;
      black: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: { main: "#3483FA", light: "#009EE3" },
    secondary: { main: "rgba(65, 137, 230, 0.15);" },
    common: { black: "rgba(0, 0, 0, 0.90);", white: "#FFFFFF" },
    grey: { 200: "#EDEDED", 600: "rgba(0, 0, 0, 0.55);" },
  },
  brandColors: {
    blueBanner: "#009ee3",
    primary: "#3483fa",
    secondary: "rgba(65, 137, 230, 0.15)",
    lightGrey: "#ededed",
    white: "#ffffff",
    darkGrey: "rgba(0, 0, 0, 0.55)",
    black: "rgba(0, 0, 0, 0.9)",
  },
  components: {
    MuiIconButton: {
      defaultProps: {
        style: { padding: "0" },
      },
      styleOverrides: {},
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {},
    },
    MuiSvgIcon: {
      defaultProps: {},
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            height: "32px",
            width: "32px",
            color: theme.palette.common.white,
          }),
      },
    },
  },
  typography: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: 14,
  },
});

export default theme;
