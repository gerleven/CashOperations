import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import cashImagen from "../assets/icons/cash-32.svg";

export default function OperationDetails() {
  const operation = {
    id: 1,
    paymentType: "cash",
    paymentDescription: "Cobro en efectivo",
    boxNumber: "Caja 2",
    amount: 751.61,
  };

  return (
    <>
      <Stack direction="column" alignItems={"center"} justifyContent={"center"}>
        <Box className="detailsPanel">
          <Stack
            direction="column"
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Stack
              className="paymentPictureContainer"
              direction="column"
              alignItems={"center"}
              justifyContent={"center"}
              sx={{ height: "80px", width: "80px", marginBottom: "20px" }}
            >
              <img
                src={cashImagen}
                alt="cash payment logo"
                style={{ width: "32px" }}
              />
            </Stack>
            <Typography
              variant="inherit"
              fontSize={"30px"}
              textAlign={"center"}
            >
              {operation.paymentDescription}
            </Typography>
            <Typography variant="inherit" fontSize={"25px"}>
              {operation.boxNumber}
            </Typography>
            <Typography variant="inherit" fontSize={"35px"}>
              {operation.amount}
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
