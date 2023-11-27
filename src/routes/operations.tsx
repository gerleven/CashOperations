//@ts-ignore
import { useLoaderData, useNavigation, useSubmit } from "react-router-dom";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import { Stack } from "@mui/material";
import OperationRow from "../components/operation-row";
import { useEffect, useState } from "react";
import CustomFiltersSelect from "../components/custom-filters-select";
import { IOperation } from "../interfaces/global-interfaces";
// import { useFetchOperations } from "../hooks/useFetchOperations";
import PriceFormatter from "../helpers/price-formatter";
import { getOperationsList } from "../services/operations-service";
import {useContext} from 'react';
import {MyContext} from "../routes/root-page";

export async function loader() {
  const fetchedOperationsList: IOperation[] | null = await getOperationsList();
  // if(!fetchedOperationsList){
  //   throw new Response("", {
  //     status: 404,
  //     statusText: "Operations not Found"
  //   });
  // }
  return fetchedOperationsList;
}

export async function action() {
  return null;
}

export default function Operations() {
  const fetchedOperationsList: IOperation[] = useLoaderData() as IOperation[];
  
  //@ts-ignore
  const operationsFullList: IOperation[] = fetchedOperationsList;
  const [operationsFilteredList, setOperationsFilteredList] = useState<
  IOperation[]
  >([]);
  const [amount, setAmount] = useState(calculateBalance());
  const {selectedFilters,setSelectedFilters} = useContext(MyContext);
  // const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  
  const submit = useSubmit();
    
  const handleOpenOperation = (id: number) => {
    submit(null, { action: "/detail/" + id });
  };

  const filtersList = [
    "Cobro con QR",
    "Cobro con tarjeta",
    "Cobro en efectivo",
  ];

  // CustomHook to retrive operations (when run local it call the API, when run in github pages it use Fake Data)
  // const [operationsFullList, setOperationsFullList] = useState<IOperation[]>(fetchedOperationsList);
  // useFetchOperations(setOperationsFullList, setOperationsFilteredList);

  useEffect(() => {
    setAmount(calculateBalance());
  }, [operationsFilteredList]);

  useEffect(() => {handleApplyFilters()}, []);
  
  // Functions
  const resetOperationFilteredList = () => {
    setOperationsFilteredList(operationsFullList);
  };

  const handleApplyFilters = () => {
    resetOperationFilteredList();
    if (selectedFilters.length != 0) {
      const newList: IOperation[] = operationsFullList.filter((operation) =>
        selectedFilters.includes(operation.paymentDescription)
      );
      setOperationsFilteredList(newList);
    }
  };

  const handleCleanFilters = () => {
    setSelectedFilters([]);
    resetOperationFilteredList();
  };

  function calculateBalance() {
    return operationsFilteredList.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.amount;
    }, 0);
  }

  return (
    <>
      <Box sx={{ height: "80px", padding: "16px" }}>
        {/* Header */}
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box sx={{ width: "60%" }}>
            <Typography variant="h3" fontSize={"35px"} noWrap>
              {PriceFormatter(amount)}
            </Typography>
          </Box>
          <Box>
            {/*                               Filters */}
            <CustomFiltersSelect
              filtersList={filtersList}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
              handleApplyFilters={handleApplyFilters}
              handleCleanFilters={handleCleanFilters}
            />
          </Box>
        </Stack>
      </Box>

      {/* Operations List */}
      <Stack
        className={"overFlowyScroll"}
        direction={"column"}
        alignItems={"strech"}
        justifyContent={"start"}
      >{(operationsFilteredList.length>0) && operationsFilteredList.map((operation, index) => (
        <OperationRow
          key={index}
          operation={operation}
          handleOpenOperation={handleOpenOperation}
        ></OperationRow>
      ))}
        {/* {operationsFilteredList.length == 0 ? (
          <Typography variant="h2" fontSize={"15px"} textAlign={"center"}>
            <p>
              <i>Sin Items para mostrar</i>
            </p>
          </Typography>
        ) : (
          operationsFilteredList.map((operation, index) => (
            <OperationRow
              key={index}
              operation={operation}
              handleOpenOperation={handleOpenOperation}
            ></OperationRow>
          ))
        )} */}
      </Stack>
    </>
  );
}
