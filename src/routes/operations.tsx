//@ts-ignore
import { useEffect, useState, useContext } from "react";
import { useLoaderData, useSubmit } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

import OperationRow from "../components/operation-row";
import CustomFiltersSelect from "../components/custom-filters-select";
import { IOperation } from "../interfaces/global-interfaces";
import PriceFormatter from "../helpers/price-formatter";
import { MyContext } from "../routes/root-page";

import { getOperationsList } from "../services/operations-service";
// import { useFetchOperations } from "../hooks/useFetchOperations";

// React Router Data API:
export async function loader() {
  const fetchedOperationsList: IOperation[] | undefined =
    await getOperationsList();
  if (!fetchedOperationsList) {
    throw new Response("", {
      status: 404,
      statusText: "Operations not Found",
    });
  }
  return fetchedOperationsList;
}

//Actions Router
export async function action() {
  //React Router V6.4 use this to manage actions like put post and delete  (not used in this case)
  return null;
}

export default function Operations() {
  const fetchedOperationsList: IOperation[] = useLoaderData() as IOperation[];

  const operationsFullList: IOperation[] = fetchedOperationsList;

  const { selectedFilters, setSelectedFilters } = useContext(MyContext);

  const getFilteredList = (): IOperation[] => {
    return selectedFilters.length === 0
      ? (operationsFullList as IOperation[])
      : (operationsFullList.filter((operation) =>
          selectedFilters.includes(operation.paymentDescription)
        ) as IOperation[]);
  };

  const [operationsFilteredList, setOperationsFilteredList] = useState<
    IOperation[]
  >(getFilteredList());

  const [amount, setAmount] = useState<number>(calculateBalance());

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

  useEffect(() => {
    handleApplyFilters();
  }, []);

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
          <Box sx={{ width: "115px" }}>
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
      >
        {operationsFilteredList.length == 0 ? (
          <Typography fontSize={"15px"} textAlign={"center"}>
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
        )}
      </Stack>
    </>
  );
}
