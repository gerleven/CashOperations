import { Stack } from "@mui/material";
import OperationDetail from "../components/operation-detail";
import { getOperationDetail } from "../services/operations-service";
import { Ioperation } from "../interfaces/global-interfaces";
import { useLoaderData } from "react-router-dom";

export async function loader({params}: any) {
  const operationDetail: Ioperation|null = await getOperationDetail(params.id);
  return operationDetail;
}

export async function action() {
  return null;
}

export default function OperationDetails() {
  const operationDetail = useLoaderData();

  return (
    <>
      <Stack direction="column" alignItems={"center"} justifyContent={"start"}>
        <OperationDetail operation={operationDetail}></OperationDetail>
      </Stack>
    </>
  );
}
