import { Outlet, useNavigation } from "react-router-dom";
import "../App.css";
import Banner from "../components/banner";
import { Stack } from "@mui/material";
import {createContext} from 'react';
import { IMyContext } from "../interfaces/global-interfaces";
import { useState } from "react";

export const MyContext = createContext<IMyContext>({} as IMyContext);

export default function Root() {
  const navigation = useNavigation();

  const [useFakeData, setUseFakeData] = useState<boolean>(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const fakeDataOn = ()=>{
    setUseFakeData(true);
  }
  const fakeDataOff = ()=>{
    setUseFakeData(false);
  }
  
  const contextDefaultValue = {
    selectedFilters: selectedFilters,
    setSelectedFilters: setSelectedFilters,
    useFakeData: useFakeData,
    fakeDataOn: fakeDataOn,
    fakeDataOff: fakeDataOff,
  }


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
