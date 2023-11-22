import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import cashImagen from "../assets/icons/cash-32.svg";

export default function OperationDetails() {
  const operation = {
    id: 1,
    paymentType: "cash",
    paymentDescription: "Cobro en efectivo",
    cajaNumber: "Caja 2",
    amount: 751.61,
  };

  return (
    <>
      <Box className="panel">
        <Stack
          direction="column"
          alignItems={"center"}
          justifyContent={"space-evenly"}
          sx={{ height: "300px" }}
        >
          <Box
            className="paymentMethod"
            sx={{ width: "80px", height: "80px", margin: "20px" }}
          >
            <img
              src={cashImagen}
              alt="cash payment logo"
              style={{ width: "32px" }}
            />
          </Box>
          <Typography variant="inherit" fontSize={"40px"}>
            {operation.paymentDescription}
          </Typography>
          <Typography variant="inherit" fontSize={"25px"}>
            {operation.cajaNumber}
          </Typography>
          <Typography variant="inherit" fontSize={"35px"}>
            {operation.amount}
          </Typography>
        </Stack>
      </Box>
    </>
  );
}
