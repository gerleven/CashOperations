import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Box, ButtonBase, ButtonBaseProps } from "@mui/material";

export const CustomBaseButton = styled(ButtonBase)<ButtonBaseProps>(() => ({
  "&:hover": {
    filter: "brightness(0.95)",
  },
  "&:focus": {
    outline: "none",
  },
}));
export const CustomButtonPrimary = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    filter: "brightness(0.95)",
  },
  "&:focus": {
    outline: "none",
  },
}));

export const CustomButtonSecondary = styled(Button)<ButtonProps>(
  ({ theme }) => ({
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      filter: "brightness(0.95)",
    },
    "&:focus": {
      outline: "none",
    },
  })
);

export default function CustomizedButtons() {
  return (
    <Box>
      <Stack spacing={2} direction="row">
        <CustomButtonPrimary>CustomButton Primary</CustomButtonPrimary>
        <CustomButtonSecondary>CustomButton Secondary</CustomButtonSecondary>
      </Stack>
    </Box>
  );
}
