import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import { Stack } from "@mui/material";
import OperationRow from "../components/operation-row";
import operationsList from "../helpers/fake-data";
import { useState } from "react";
import CustomFiltersSelect from "../components/custom-filters-select";
import { IFilterOption } from "../interfaces/global-interfaces";

// import {useSubmit} from "react-router-dom";

export default function Operations() {
  //@ts-ignore
  const [amount, setAmount] = useState(99.99);
  //@ts-ignore
  const [operations, setOperations] = useState([...operationsList]);

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
      description: "Cobros con QR",
    },
    {
      id: "card",
      value: false,
      description: "Cobros con tarjeta",
    },
    {
      id: "cash",
      value: false,
      description: "Cobros en efectivo",
    },
    {
      id: "debito",
      value: false,
      description: "Cobros con debito",
    },
  ];
  
  const filtersList = filterOprions.map(
    (filterOption) => filterOption.description
  );
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleApplyFilters = () => {
    console.log("Aplicar filtros")
  };

  const handleCleanFilters = () => {
    setSelectedFilters([]);
    handleApplyFilters();
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
            <Typography variant="h3" fontSize={"40px"}>
              ${amount}
            </Typography>
          </Box>
          <Box sx={{ width: "30%" }}>
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
