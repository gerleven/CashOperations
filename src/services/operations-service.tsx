import { Ioperation } from "../interfaces/global-interfaces";

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
      throw new Error(error);
    }
  } else {
    //If not run local it use hardcoded data:
    const operationDetail: Ioperation = {
      id: 1,
      paymentType: "card",
      paymentDescription: "Cobro en efectivo (Example)",
      boxNumber: "Caja 2",
      amount: 751.61,
    };
    return operationDetail;
  }
}
