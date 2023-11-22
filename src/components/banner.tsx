import "../App.css";
import logo from "../assets/icons/mp_logo.svg";

import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material";
import { CustomBaseButton } from "../utils/custom-buttons";


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
      <div className="banner" style={{backgroundColor: theme.palette.blueBanner.main}}>
        <IconButton sx={{ marginLeft: "16px" }} onClick={handleBack}>
        <CustomBaseButton>
          <ArrowBackIcon sx={{
            height: "32px",
            width: "32px",
            color: theme.palette.common.white,
          }}/>
        </CustomBaseButton>
        </IconButton>
        <img src={logo} alt="Mercado_Pago_imagen" className="banner-logo" onClick={handleHome} style={{cursor: "pointer"}}/>
      </div>
    </>
  );
}
