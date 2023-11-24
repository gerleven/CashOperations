import { Ioperation } from "../interfaces/global-interfaces";

const hardcodedOperationsList: Ioperation[] = [
  {
    id: 1,
    paymentType: "cash",
    paymentDescription: "Cobro en efectivo",
    boxNumber: "Caja 2",
    amount: 751.61,
  },
  {
    id: 2,
    paymentType: "qr",
    paymentDescription: "Cobro con QR",
    boxNumber: "Caja 3",
    amount: 508.31,
  },
  {
    id: 3,
    paymentType: "qr",
    paymentDescription: "Cobro con QR",
    boxNumber: "Caja 2",
    amount: 695.21,
  },
  {
    id: 4,
    paymentType: "qr",
    paymentDescription: "Cobro con QR",
    boxNumber: "Caja 3",
    amount: 470.13,
  },
  {
    id: 5,
    paymentType: "card",
    paymentDescription: "Cobro con tarjeta",
    boxNumber: "Caja 3",
    amount: 246.36
},
{
    id: 6,
    paymentType: "cash",
    paymentDescription: "Cobro en efectivo",
    boxNumber: "Caja 2",
    amount: 456.02
},
];

export default hardcodedOperationsList;