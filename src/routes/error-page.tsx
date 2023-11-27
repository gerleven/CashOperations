import { Box, Stack, Typography } from "@mui/material";
import { Form, useRouteError } from "react-router-dom";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { CustomButtonPrimary } from "../utils/custom-buttons";
import { IError } from "../interfaces/global-interfaces";

export default function ErrorPage() {
  
  const error: IError = useRouteError() as IError;
    return (
    <>
      <Stack
        direction="column"
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ width: "100%"}}
      >
        <Box className="detailsPanel">
          <Stack
            direction="column"
            alignItems={"center"}
            justifyContent={"center"}
          >
            <HighlightOffIcon className="error-icon"/>
            <Typography variant="h2" fontSize={"35px"}>
              Algo salio mal...
            </Typography>
            
            <br />
            
            <Typography variant="caption" fontSize={"15px"} textAlign={"left"}>
              <p >Disculpe, ocurrió un error inesperado:</p>
              <p>
                <i>{error.statusText || error.message}</i>
              </p>
            </Typography>

            <Form method="get" action="/" replace>
              <CustomButtonPrimary type="submit">Volver</CustomButtonPrimary>

            </Form>
            
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
