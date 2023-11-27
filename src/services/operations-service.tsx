import { IOperation } from "../interfaces/global-interfaces";
import hardcodedOperationsList from "../helpers/fake-data";

//Get the full list of operations
export async function getOperationsList() {
  if (import.meta.env.DEV) {
    //When run local, ir call the API:
    const url = `${import.meta.env.VITE_URL_API}/operations`;

    try {
      const response = await fetch(url);
      const result = await response.json();
      const operationsList: IOperation[] = result.operations as IOperation[];
      // operationsList = operationsList.slice(0, 2); //To test with a reduced list
      return operationsList;
    } catch (error: any) {
      if (window.confirm("La API no responde! Ejecute 'node app.js' en la ruta 'API/app.js' o presione Aceptar para continuar con datos de prueba:")) {
        //If API not work, you can use this fake data:
        return hardcodedOperationsList as IOperation[];
      }
      // throw new Error(error);
    }
  } else {
    return hardcodedOperationsList as IOperation[];
  }
}

//Get a operation detail
export async function getOperationDetail(id: number) {
  if (import.meta.env.DEV) {
    //When run local, ir call the API:
    const url = `${import.meta.env.VITE_URL_API}/operation/${id}`;

    try {
      const response = await fetch(url);
      const result = await response.json();
      const operationDetail: IOperation = result.operation as IOperation;
      return operationDetail;
    } catch (error: any) {
      if (window.confirm("La API no responde! Ejecute 'node app.js' en la ruta 'API/app.js' o presione Aceptar para continuar con datos de prueba:")) {
        //If API not work, you can use this fake data:
        return loadHarcodedDataOperationDetail(id);
      }
      // throw new Error(error);
      }
  } else {
    return loadHarcodedDataOperationDetail(id);
  }
}

function loadHarcodedDataOperationDetail(id: number): IOperation {
  //If not running local or API not work, it'll use hardcoded data or an example in case the operation doesn't exist in the hardcoded list:
  return (
    hardcodedOperationsList.find((x) => x.id == id) ||
    ({
      id: 1,
      paymentType: "card",
      paymentDescription: "Cobro en efectivo (Example)",
      boxNumber: "Caja 2",
      amount: 751.61,
    } as IOperation)
  );
}
