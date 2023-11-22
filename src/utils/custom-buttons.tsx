import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";

export const CustomButtonPrimary = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
}));

export const CustomButtonSecondary = styled(Button)<ButtonProps>(
  ({ theme }) => ({
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
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
