import { useEffect } from "react";
import { IOperation } from "../interfaces/global-interfaces";
import hardcodedOperationsList from "../helpers/fake-data";

export function useFetchOperations(
  setOperationsFullList: Function,
  setOperationsFilteredList: Function
) {
  useEffect(() => {
    if (import.meta.env.DEV) {
      //When run local, it call the API:
      const url = `${import.meta.env.VITE_URL_API}/operations`;
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const result = await response.json();
          let operationsFetched: IOperation[] =
            result.operations as IOperation[];
          // operationsFetched = operationsFetched.slice(0, 2); //To test with a reduced list
          setOperationsFullList(operationsFetched);
          setOperationsFilteredList(operationsFetched);
        } catch (error: any) {
          if (
            window.confirm("La API no responde! Ejecute 'node app.js' en la ruta 'API/app.js' o presione Aceptar para continuar con datos de prueba:")
          ) {
            //If API not work, you can use this fake data:
            setOperationsFullList(hardcodedOperationsList.slice(0, 30));
            setOperationsFilteredList(hardcodedOperationsList.slice(0, 30));
          }
          throw new Error(error);
        }
      };

      fetchData();
    } else {
      //If not run local it use hardcoded data:
      setOperationsFullList(hardcodedOperationsList.slice(0, 30));
      setOperationsFilteredList(hardcodedOperationsList.slice(0, 30));
    }
  }, []);
}
