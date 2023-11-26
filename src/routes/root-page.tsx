import { Outlet } from "react-router-dom";
import "../App.css";
import Banner from "../components/banner";
import { Stack } from "@mui/material";

export default function Root() {
  return (
    <>
      <Stack
        className="fullscreen"
        direction={"column"}
        justifyContent={"start"}
        alignItems={"center"}
      >
        <Stack
          className="app-wrapper"
          direction={"column"}
          justifyContent={"start"}
          alignItems={"strech"}
        >
          <Banner></Banner>
          <Stack
            direction={"column"}
            justifyContent={"start"}
            alignItems={"strech"}
            sx={{ flexGrow: 1 }}
          >
            <Outlet />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
