import { Outlet, useNavigation } from "react-router-dom";
import "../App.css";
import Banner from "../components/banner";
import { Stack } from "@mui/material";

export default function Root() {
  //This hook provide props about the navigations, here is used to check the state and give loading status feedback
  const navigation = useNavigation();
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
            className={navigation.state === "loading" ? "loading" : ""}
          >
            <Outlet />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
