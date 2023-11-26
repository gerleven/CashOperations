import { createTheme } from "@mui/material/styles";

//You have to use module augmentation to add new variables to the Theme and ThemeOptions.
declare module "@mui/material/styles" {
  interface Palette {
    blueBanner: Palette["primary"];
  }

  interface PaletteOptions {
    blueBanner?: PaletteOptions["primary"];
  }
}

let theme = createTheme({
  palette: {
    primary: { main: "#3483FA", light: "#3c8aff" },
    secondary: {
      main: "rgba(65, 137, 230, 0.15);",
      light: "rgba(73, 140, 227, 0.25)",
    },
    common: { black: "rgba(0, 0, 0, 0.90);", white: "#FFFFFF" },
    grey: { 100: "#ededed", 200: "#d9d9d9", 300: "rgba(0, 0, 0, 0.55);" },
    blueBanner: { main: "#009ee3" },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {},
    },
    MuiButton: {
      defaultProps: {},
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            textTransform: "none",
            height: "48px",
            padding: "16px 24px",
            fontSize: "16px",
          }),
      },
    },
    MuiIconButton: {
      defaultProps: {
        style: { padding: "0" },
      },
      styleOverrides: {},
    },
    MuiSvgIcon: {
      defaultProps: {},
      styleOverrides: {
        root: ({ theme }) => theme.unstable_sx({}),
      },
    },
    MuiTypography: {
      defaultProps: {},
    },
    MuiSelect: {
      defaultProps: {},
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
          }),
      },
    },
  },
  typography: {
    fontFamily: "MP-fonts"
  },
});

export default theme;
