export interface IOperation {
  id: number;
  paymentType: string;
  paymentDescription: string;
  boxNumber: string;
  amount: number;
}

export interface IOperationsFilters {
  qr: boolean;
  card: boolean;
  cash: boolean;
}

export interface IFilterOption{
    id: string;
    value: boolean;
    description: string;
}

export interface IError {
  statusText: any;
  message: any;
}