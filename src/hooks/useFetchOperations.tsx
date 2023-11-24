import { useEffect } from "react";
import { Ioperation } from "../interfaces/global-interfaces";

export function useFetchOperations(setOperationsFullList: Function, setOperationsFilteredList: Function) {
  useEffect(() => {
    const url = `${import.meta.env.VITE_URL_API}/operations`;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        const operationsFetched: Ioperation[] =
          result.operations as Ioperation[];
          setOperationsFullList(operationsFetched.slice(0, 30));
          setOperationsFilteredList(operationsFetched.slice(0, 30));
      } catch (error: any) {
        throw new Error(error);
      }
    };

    fetchData();
  }, []);
}
