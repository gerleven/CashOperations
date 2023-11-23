import { Box, Stack, Typography } from "@mui/material";

export default function ErrorPage() {
  return (
    <>
      <Stack direction="column" alignItems={"center"} justifyContent={"center"} sx={{width: "100vw"}}>
        <Box className="detailsPanel">
          <Stack
            direction="column"
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography variant="h2" fontSize={"35px"}>
              Error Page
            </Typography>
            <br />
            <Typography variant="h2" fontSize={"25px"}>
              Algo salio mal...
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
