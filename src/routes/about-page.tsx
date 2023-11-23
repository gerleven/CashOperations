import { Box, Stack, Typography } from "@mui/material";

export default function About() {
  return (
    <>
      <Stack direction="column" alignItems={"center"} justifyContent={"center"}>
        <Box className="detailsPanel">
          <Stack
            direction="column"
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography variant="h2" fontSize={"35px"}>
              About Page
            </Typography>
            <br />
            <Typography variant="h2" fontSize={"25px"} textAlign={"center"}>
              This section is under construction...
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
