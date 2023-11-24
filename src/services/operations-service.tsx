import { Ioperation } from "../interfaces/global-interfaces";
import hardcodedOperationsList from "../helpers/fake-data";

export async function getOperationDetail(id: number) {
  if (import.meta.env.DEV) {
    //When run local, ir call the API:
    const url = `${import.meta.env.VITE_URL_API}/operation/${id}`;

    try {
      const response = await fetch(url);
      const result = await response.json();
      const operationDetail: Ioperation = result.operation as Ioperation;
      return operationDetail;
    } catch (error: any) {
      if (window.confirm("La API no responde, desea cargar data de ejemplo?")) {
        return loadHarcodedData(id);
      }
      throw new Error(error);
    }
  } else {
    return loadHarcodedData(id);
  }
}

function loadHarcodedData(id: number) {
  //If not running local or API not work, it'll use hardcoded data or an example in case the operation doesn't exist in the hardcoded list:
  return (
    hardcodedOperationsList.find((x) => x.id == id) ||
    ({
      id: 1,
      paymentType: "card",
      paymentDescription: "Cobro en efectivo (Example)",
      boxNumber: "Caja 2",
      amount: 751.61,
    } as Ioperation)
  );
}
