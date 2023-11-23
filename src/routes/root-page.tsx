import { Outlet } from "react-router-dom";
import "../App.css";
import Banner from "../components/banner";
import { Box, Stack } from "@mui/material";

export default function Root() {
  return (
    <>
      <Stack
        className="fullscreen"
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box className="app-wrapper">
          <Stack
            direction={"column"}
            justifyContent={"start"}
            alignItems={"center"}
          >
            <Banner></Banner>
            <Outlet />
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
