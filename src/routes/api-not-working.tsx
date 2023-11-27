import { Box, Stack, Typography } from "@mui/material";
import { useSubmit } from "react-router-dom";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { CustomButtonPrimary } from "../utils/custom-buttons";
import {useContext} from 'react';
import {MyContext} from "../routes/root-page";

export default function ApiNotWorking() {
  const {fakeDataOn}: any = useContext(MyContext);
  
  const submit = useSubmit();

  const handleUseTestData = () => {
    fakeDataOn();
    submit(null, { action: "/" });
  };

  return (
    <>
      <Stack
        direction="column"
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ width: "100%" }}
      >
        <Box className="detailsPanel">
          <Stack
            direction="column"
            alignItems={"strech"}
            justifyContent={"center"}
          >
            <Stack direction="row" justifyContent={"center"}>
              <HighlightOffIcon className="error-icon" />
            </Stack>
            <Typography variant="h2" fontSize={"30px"} textAlign={"center"}>
              La API no reponde...
            </Typography>
            <br />

            <Typography textAlign={"left"} fontSize={"20px"}>
              Alternativas:
            </Typography>
            <Typography textAlign={"left"}>
              <p>
                • Corre la API ejecutando el comando <b>"node app.js"</b> en la
                ruta <b>"challenge-mp/API/app.js"</b> y reinicia la aplicacion
              </p>
              <p>• Usa los datos de prueba:</p>
            </Typography>

            <CustomButtonPrimary onClick={handleUseTestData}>
              Usar datos de prueba
            </CustomButtonPrimary>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
