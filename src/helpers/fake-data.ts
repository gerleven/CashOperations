import { IOperation } from "../interfaces/global-interfaces";

//NOTE:
// To avoid having to upload the API to a host, this list of test data is provided that will be used when the API is not running.

const hardcodedOperationsList: IOperation[] = [
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
    amount: 246.36,
  },
  {
    id: 6,
    paymentType: "cash",
    paymentDescription: "Cobro en efectivo",
    boxNumber: "Caja 2",
    amount: 456.02,
  },
  {
    id: 7,
    paymentType: "cash",
    paymentDescription: "Cobro en efectivo",
    boxNumber: "Caja 1",
    amount: 977.71,
  },
  {
    id: 8,
    paymentType: "cash",
    paymentDescription: "Cobro en efectivo",
    boxNumber: "Caja 3",
    amount: 774.6,
  },
  {
    id: 9,
    paymentType: "cash",
    paymentDescription: "Cobro en efectivo",
    boxNumber: "Caja 3",
    amount: 339.23,
  },
  {
    id: 10,
    paymentType: "card",
    paymentDescription: "Cobro con tarjeta",
    boxNumber: "Caja 1",
    amount: 454.15,
  },
  {
    id: 11,
    paymentType: "card",
    paymentDescription: "Cobro con tarjeta",
    boxNumber: "Caja 1",
    amount: 237.6,
  },
  {
    id: 12,
    paymentType: "qr",
    paymentDescription: "Cobro con QR",
    boxNumber: "Caja 2",
    amount: 60.62,
  },
  {
    id: 13,
    paymentType: "card",
    paymentDescription: "Cobro con tarjeta",
    boxNumber: "Caja 1",
    amount: 801.5,
  },
  {
    id: 14,
    paymentType: "qr",
    paymentDescription: "Cobro con QR",
    boxNumber: "Caja 2",
    amount: 389.85,
  },
  {
    id: 15,
    paymentType: "card",
    paymentDescription: "Cobro con tarjeta",
    boxNumber: "Caja 3",
    amount: 567.75,
  },
  {
    id: 16,
    paymentType: "qr",
    paymentDescription: "Cobro con QR",
    boxNumber: "Caja 1",
    amount: 314.58,
  },
  {
    id: 17,
    paymentType: "qr",
    paymentDescription: "Cobro con QR",
    boxNumber: "Caja 2",
    amount: 87.09,
  },
  {
    id: 18,
    paymentType: "card",
    paymentDescription: "Cobro con tarjeta",
    boxNumber: "Caja 3",
    amount: 693.01,
  },
  {
    id: 19,
    paymentType: "card",
    paymentDescription: "Cobro con tarjeta",
    boxNumber: "Caja 1",
    amount: 324.45,
  },
  {
    id: 20,
    paymentType: "qr",
    paymentDescription: "Cobro con QR",
    boxNumber: "Caja 3",
    amount: 128.2,
  },
];

export default hardcodedOperationsList;
