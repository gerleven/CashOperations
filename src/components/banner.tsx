import "../App.css";
import logo from "../assets/icons/mp_logo.svg";

import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Banner() {
      return (
    <>
          <div className="banner">
        <IconButton sx={{marginLeft: "16px"}}>
          <ArrowBackIcon/>
        </IconButton>
        <img src={logo} alt="Mercado_Pago_imagen" className="banner-logo" />
      </div>
    </>
  );
}
