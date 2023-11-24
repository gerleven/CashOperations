import { Stack } from "@mui/material";
import OperationDetail from "../components/operation-detail";

export default function OperationDetails() {
  const operation = {
    id: 1,
    paymentType: "card",
    paymentDescription: "Cobro en efectivo",
    boxNumber: "Caja 2",
    amount: 751.61,
  };

  return (
    <>
      <Stack direction="column" alignItems={"center"} justifyContent={"center"}>
        <OperationDetail operation={operation}></OperationDetail>
      </Stack>
    </>
  );
}
