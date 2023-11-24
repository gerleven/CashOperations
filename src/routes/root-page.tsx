import { Outlet } from "react-router-dom";
import "../App.css";
import Banner from "../components/banner";
import { Box, Stack } from "@mui/material";

export default function Root() {
  return (
    <>
      <Stack
        className="fullscreen"
        direction={"column"}
        justifyContent={"start"}
        alignItems={"center"}
      >
        <Box className="app-wrapper">
          <Banner></Banner>
          <Stack
            direction={"column"}
            justifyContent={"start"}
            alignItems={"center"}
          >
            <Outlet />
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
