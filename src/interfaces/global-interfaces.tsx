export interface IOperation {
  id: number;
  paymentType: string;
  paymentDescription: string;
  boxNumber: string;
  amount: number;
}

export interface IError {
  statusText: any;
  message: any;
}

export interface IMyContext {
  selectedFilters: string[];
  setSelectedFilters: any;
  useFakeData: boolean;
  fakeDataOn: any;
  fakeDataOff: any;
}
