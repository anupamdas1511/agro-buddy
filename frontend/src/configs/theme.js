import { createTheme } from "@mui/material/styles";
import * as Pallete from "./pallete";

export const theme = createTheme({
  typography: {
    fontFamily: "epilogue",
  },
  overrides: {
    MuiButton: {
      raisedPrimary: {},
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: () => ({
          outline: "none",
          "&:hover": {
            outline: "none",
          },
          "&:focus": {
            outline: "none",
          },
        }),
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "contained" && {
            backgroundColor: Pallete.colorAccent,
            color: Pallete.colorPrimary,
            padding: "10px 25px",
            outline: "none",
            borderRadius: '25px',
            "&:hover": {
              backgroundColor: Pallete.colorAccentDark,
              color: Pallete.colorPrimary,
              outline: "none",
            },
            "&:focus": {
              backgroundColor: Pallete.colorAccentDark,
              color: Pallete.colorPrimary,
              outline: "none",
            },
          }),
          ...(ownerState.variant === "text" && {
            backgroundColor: "none",
            color: Pallete.colorAccent,
            padding: "10px 25px",
            outline: "none",
            borderRadius: '25px',
            "&:hover": {
              outline: "none",
            },
            "&:focus": {
              outline: "none",
            },
          }),
          ...(ownerState.variant === "outline" && {
            backgroundColor: "none",
            color: Pallete.colorAccent,
            padding: "10px 25px",
            borderRadius: '25px',
            outline: `2px solid ${Pallete.colorAccent}`,
            "&:hover": {
              outline: `2px solid ${Pallete.colorAccent}`,
            },
            "&:focus": {
              outline: `2px solid ${Pallete.colorAccent}`,
            },
          }),
        }),
      },
    },
  },
});