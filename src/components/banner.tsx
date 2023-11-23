import "../App.css";
import logo from "../assets/icons/mp_logo.svg";

import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { Box, Stack, useTheme } from "@mui/material";


export default function Banner() {
  const theme = useTheme();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/list");
  };
  const handleHome = () => {
    navigate("/");
  };
  return (
    <>
      <Stack className="banner" direction="row" alignItems={"center"} justifyContent={"start"} sx={{backgroundColor: theme.palette.blueBanner.main}}>
          <IconButton className="noFocusBorder" sx={{ marginLeft: "16px" }} onClick={handleBack}>
            <ArrowBackIcon sx={{
              height: "32px",
              width: "32px",
              color: theme.palette.common.white,
            }}/>
          </IconButton>
          <Box className="banner-logo">
            <img src={logo} alt="Mercado_Pago_imagen" onClick={handleHome} style={{cursor: "pointer"}}/>
          </Box>
        
      </Stack>
    </>
  );
}
