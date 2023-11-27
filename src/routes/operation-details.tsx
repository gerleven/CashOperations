import { Stack } from "@mui/material";
import OperationDetail from "../components/operation-detail";
import { getOperationDetail } from "../services/operations-service";
import { IOperation } from "../interfaces/global-interfaces";
import { useLoaderData } from "react-router-dom";


// React Router Data API:
export async function loader({ params }: any) {
  const operationDetail: IOperation | undefined = await getOperationDetail(
    params.id
  );
  if(!operationDetail){
    throw new Response("", {
    status: 404,
    statusText: "Operation not Found"
    });
  }
  return operationDetail;
}

export async function action() {
  return null;
}


export default function OperationDetails() {
  const operationDetail: IOperation = useLoaderData() as IOperation; //fetch the operation detail with react router data api
  
  return (
    <>
      <Stack direction="column" alignItems={"center"} justifyContent={"start"}>
        <OperationDetail operation={operationDetail}></OperationDetail>
      </Stack>
    </>
  );
}
