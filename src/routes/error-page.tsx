import { Box, Stack, Typography } from "@mui/material";
import { useRouteError, useSubmit } from "react-router-dom";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { CustomButtonPrimary } from "../utils/custom-buttons";

interface IError {
  statusText: any;
  message: any;
}

export default function ErrorPage() {
  const submit = useSubmit();
  const handleGoBack=()=>{
    submit(null, { action: "/" });
  }
  
  const error: IError = useRouteError() as IError;
  return (
    <>
      <Stack
        direction="column"
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ width: "100vw" }}
      >
        <Box className="detailsPanel">
          <Stack
            direction="column"
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography variant="h2" fontSize={"35px"}>
              Algo salio mal...
            </Typography>
            <br />
            <br />
            
            <HighlightOffIcon style={{scale: "3", color: "#a80000"}}></HighlightOffIcon>
            <br />
            <br />
            
            <Typography variant="caption" fontSize={"15px"} textAlign={"left"}>
              <p >Disculpe, ocurrió un error inesperado:</p>
              <p>
                <i>{error.statusText || error.message}</i>
              </p>
            </Typography>

            <CustomButtonPrimary onClick={handleGoBack}>Volver</CustomButtonPrimary>
            
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
