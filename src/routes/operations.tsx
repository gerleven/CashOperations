import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Typography from "@mui/material/Typography";
import cashImagen from "../assets/icons/cash-32.svg";
import creditCardImagen from "../assets/icons/credit_card-32.svg";
import qrCodeImagen from "../assets/icons/qr_code-24.svg";

import MultipleSelectCheckmarks from "../utils/custom-select";
import { Button, OutlinedInput, Stack, useTheme } from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";

import {
  Outlet,
  NavLink,
  useLoaderData,
  useActionData,
  Form,
  redirect,
  useNavigation,
  useSubmit,
} from "react-router-dom";

export default function Operations() {
  const theme = useTheme();
  const navigate = useNavigate();
  const submit = useSubmit();
  const operations = [
    {
      id: 1,
      paymentType: "cash",
      paymentDescription: "Cobro en efectivo",
      cajaNumber: "Caja 2",
      amount: 751.61,
    },
    {
      id: 2,
      paymentType: "qr",
      paymentDescription: "Cobro con QR",
      cajaNumber: "Caja 3",
      amount: 508.31,
    },
    {
      id: 3,
      paymentType: "qr",
      paymentDescription: "Cobro con QR",
      cajaNumber: "Caja 2",
      amount: 695.21,
    },
    {
      id: 4,
      paymentType: "qr",
      paymentDescription: "Cobro con QR",
      cajaNumber: "Caja 3",
      amount: 470.13,
    },
  ];

  const handleOpenOperation = (id: number) => {
    navigate("/detail/" + id);
    // submit();
  };

  return (
    <>
      <Box sx={{ width: "100%", height: "80px", padding: "16px" }}>
        <Stack direction="row" alignItems={"center"}>
          <Box sx={{ width: "50%" }}>
            <Typography variant="h3" fontSize={"40px"}>
              $99.999
            </Typography>
          </Box>
          <Box sx={{ width: "50%" }}>
            <MultipleSelectCheckmarks/>
          </Box>
        </Stack>
      </Box>
      <Box
        sx={{
          width: "100%",
          backgroundColor: theme.palette.common.white,
        }}
      >
        <Stack
          direction={"column"}
          alignItems={"strech"}
          justifyContent={"start"}
        >
          {operations.map((operation) => (
            <ButtonBase onClick={() => handleOpenOperation(operation.id)} key={operation.id}>
              <Box
                key={operation.id}
                sx={{ width: "100%", height: "68px", padding: "5px 16px" }}
              >
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Box>
                    <div
                      className="paymentMethod"
                      style={{ backgroundImage: cashImagen }}
                    >
                      <img src={cashImagen} alt="cash payment logo" />
                    </div>
                    {/* <div className="paymentMethod" style={{backgroundImage: creditCardImagen}}>
                      <img src={creditCardImagen} alt="credit card payment logo" />
                    </div>
                    <div className="paymentMethod" style={{backgroundImage: qrCodeImagen}}>
                      <img src={qrCodeImagen} alt="qr code payment logo" />
                    </div> */}
                  </Box>

                  <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems={"center"}
                  >
                    <Box>
                      <Typography
                        fontSize="20px"
                        color={theme.palette.common.black}
                      >
                        {operation.paymentDescription}
                      </Typography>
                      <Typography
                        component="p"
                        fontSize="18px"
                        color={theme.palette.grey[300]}
                      >
                        {operation.cajaNumber}
                      </Typography>
                    </Box>
                  </Stack>
                  <Typography>$ {operation.amount}</Typography>
                </Stack>
              </Box>
            </ButtonBase>
          ))}
        </Stack>
      </Box>
    </>
  );
}
