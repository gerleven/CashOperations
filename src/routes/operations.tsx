//@ts-ignore
import { useLoaderData, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import { Stack } from "@mui/material";
import OperationRow from "../components/operation-row";
import { useState } from "react";
import CustomFiltersSelect from "../components/custom-filters-select";
import { IFilterOption, Ioperation } from "../interfaces/global-interfaces";
import { useFetchOperations } from "../hooks/useFetchOperations";
// import {useSubmit} from "react-router-dom";
// import operationsList from "../helpers/fake-data";

export async function loader() {
  // const operations = await fetchOperations();
  // if(!operations){
  //   throw new Response("", {
  //     status: 404,
  //     statusText: "Fetch error"
  //   });
  // }

  // return operationsList;
  return null;
}

export async function action() {
  return null;
}

export default function Operations() {
  // const operationsListFetch = useLoaderData();
  //@ts-ignore
  const [amount, setAmount] = useState(9999.99);
  //@ts-ignore
  const [operationsFullList, setOperationsFullList] = useState<Ioperation[]>(
    []
  );
  const [operationsFilteredList, setOperationsFilteredList] = useState<
    Ioperation[]
  >([]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  useFetchOperations(setOperationsFullList, setOperationsFilteredList);

  const navigate = useNavigate();
  // const submit = useSubmit();

  const handleOpenOperation = (id: number) => {
    navigate("/detail/" + id);
    // submit();
  };

  const filterOprions: IFilterOption[] = [
    {
      id: "qr",
      value: false,
      description: "Cobro con QR",
    },
    {
      id: "card",
      value: false,
      description: "Cobro con tarjeta",
    },
    {
      id: "cash",
      value: false,
      description: "Cobro en efectivo",
    },
  ];

  const filtersList = filterOprions.map(
    (filterOption) => filterOption.description
  );

  const resetOperationFilteredList = () => {
    setOperationsFilteredList(operationsFullList);
  };

  const handleApplyFilters = () => {
    resetOperationFilteredList();
    if (selectedFilters.length != 0) {
      const newList: Ioperation[] = operationsFullList.filter((operation) =>
        selectedFilters.includes(operation.paymentDescription)
      );
      setOperationsFilteredList(newList);
    }
  };

  const handleCleanFilters = () => {
    setSelectedFilters([]);
    resetOperationFilteredList();
  };

  return (
    <>
      <Box sx={{ width: "100%", height: "80px", padding: "16px" }}>
        {/* Header */}
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box sx={{ Maxwidth: "60%" }}>
            <Typography variant="h3" fontSize={"40px"} noWrap>
              ${amount}
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
      <Box className="overFlowyScroll" sx={{ width: "100%" }}>
        <Stack
          direction={"column"}
          alignItems={"strech"}
          justifyContent={"start"}
          sx={{ padding: "15px 0" }}
        >
          {operationsFilteredList.length == 0 ? (
            <Typography variant="h2" fontSize={"15px"} textAlign={"center"}>
              <p>
                <i>Sin Items para mostrar</i>
              </p>
            </Typography>
          ) : (
            operationsFilteredList.map((operation) => (
              <OperationRow
                key={operation.id}
                operation={operation}
                handleOpenOperation={handleOpenOperation}
              ></OperationRow>
            ))
          )}
        </Stack>
      </Box>
    </>
  );
}
