//@ts-ignore
import { useLoaderData, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import { Stack } from "@mui/material";
import OperationRow from "../components/operation-row";
import { useEffect, useState } from "react";
import CustomFiltersSelect from "../components/custom-filters-select";
import { Ioperation } from "../interfaces/global-interfaces";
import { useFetchOperations } from "../hooks/useFetchOperations";
import PriceFormatter from "../helpers/price-formatter";

export async function loader() {
  return null;
}

export async function action() {
  return null;
}

export default function Operations() {
  //@ts-ignore
  const [amount, setAmount] = useState(9999.99);
  const [operationsFullList, setOperationsFullList] = useState<Ioperation[]>(
    []
  );
  const [operationsFilteredList, setOperationsFilteredList] = useState<
    Ioperation[]
  >([]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const navigate = useNavigate();
  const handleOpenOperation = (id: number) => {
    navigate("/detail/" + id);
  };

  const filtersList = [
    "Cobro con QR",
    "Cobro con tarjeta",
    "Cobro en efectivo",
  ];

  // Hook to retrive operations (when run local it call the API, when run in github pages it use Fake Data)
  useFetchOperations(setOperationsFullList, setOperationsFilteredList);

  useEffect(() => {
    const balance = operationsFilteredList.reduce(
      (accumulator, currentValue) => {
        return accumulator + currentValue.amount;
      },
      0
    );
    setAmount(balance);
  }, [operationsFilteredList]);

  // Functions
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
            operationsFilteredList.map((operation, index) => (
              <OperationRow
                key={index}
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
