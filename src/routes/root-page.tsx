import "../App.css";
import { createContext } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { Stack } from "@mui/material";
import Banner from "../components/banner";

import { IMyContext } from "../interfaces/global-interfaces";
import useMyContext from "../context/MyContext";

export const MyContext = createContext<IMyContext>({} as IMyContext);

export default function Root() {
  const navigation = useNavigation();

  const contextDefaultValue = useMyContext();

  return (
    <>
      <MyContext.Provider value={contextDefaultValue}>
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
      </MyContext.Provider>
    </>
  );
}
