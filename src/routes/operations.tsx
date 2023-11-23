import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import { Stack } from "@mui/material";
import OperationRow from "../components/operation-row";
import operationsList from "../helpers/fake-data";
import { useState } from "react";
import CustomFiltersSelect from "../components/custom-filters-select";
import { IFilterOption, Ioperation } from "../interfaces/global-interfaces";

// import {useSubmit} from "react-router-dom";

export async function loader(){
  return null;
}

export async function action(){
  return null;
}

export default function Operations() {
  //@ts-ignore
  const [amount, setAmount] = useState(9999.99);
  //@ts-ignore
  const [operations, setOperations] = useState<Ioperation[]>([...operationsList]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  

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
    }
  ];

  const filtersList = filterOprions.map(
    (filterOption) => filterOption.description
  );

  const resetOperation = () => {
    setOperations(operationsList);
  }

  const handleApplyFilters = () => {
    resetOperation();
    if(selectedFilters.length != 0){
      const newList: Ioperation[] = operationsList.filter((operation)=>(selectedFilters.includes(operation.paymentDescription)));
      setOperations(newList);
    }
  };

  const handleCleanFilters = () => {
    setSelectedFilters([]);
    resetOperation();
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
      <Box sx={{ width: "100%" }}>
        <Stack
          direction={"column"}
          alignItems={"strech"}
          justifyContent={"start"}
          sx={{ padding: "15px 0" }}
        >
          {operations.map((operation) => (
            <OperationRow
              key={operation.id}
              operation={operation}
              handleOpenOperation={handleOpenOperation}
            ></OperationRow>
          ))}
        </Stack>
      </Box>
    </>
  );
}
