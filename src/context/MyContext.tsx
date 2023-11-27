import { useState } from "react";
import { IMyContext } from "../interfaces/global-interfaces";

const useMyContext = ():IMyContext =>{
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
    return contextDefaultValue;
  }

  export default useMyContext;