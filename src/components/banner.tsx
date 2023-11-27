import "../App.css";
import logo from "../assets/icons/mp_logo.svg";

import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Stack, useTheme } from "@mui/material";

import { useLocation, Form } from "react-router-dom";

export default function Banner() {
  const theme = useTheme();
  const location = useLocation();

  return (
    <>
      <Stack
        className="banner"
        direction="row"
        alignItems={"center"}
        justifyContent={"start"}
        sx={{ backgroundColor: theme.palette.blueBanner.main }}
      >
        {location.pathname != "/list" && (
          <Form method="get" action="/list">
          <IconButton
            className="noFocusBorder"
            sx={{ marginLeft: "16px" }}
            // onClick={handleBack}
            type="submit" // <-- here i'm using React Router Data API to navigate instead of using a traditional handle with a navigate("/list")
          >
            <ArrowBackIcon
              sx={{
                height: "32px",
                width: "32px",
                color: theme.palette.common.white,
              }}
            />
          </IconButton>
          </Form>
        )}
        <Box className="banner-logo">
          <img
            src={logo}
            alt="Mercado_Pago_imagen"
          />
        </Box>
      </Stack>
    </>
  );
}
