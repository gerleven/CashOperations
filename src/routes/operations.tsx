import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import cashImagen from "../assets/icons/cash-32.svg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import MultipleSelectCheckmarks from "../utils/custom-select";
import { Stack, useTheme } from "@mui/material";
import { CustomBaseButton } from "../utils/custom-buttons";

// import {useSubmit} from "react-router-dom";

export default function Operations() {
  const theme = useTheme();
  const navigate = useNavigate();
  // const submit = useSubmit();
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
            <MultipleSelectCheckmarks />
          </Box>
        </Stack>
      </Box>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Stack
          direction={"column"}
          alignItems={"strech"}
          justifyContent={"start"}
          sx={{ padding: "15px 0" }}
        >
          {operations.map((operation) => (
            <CustomBaseButton
              onClick={() => handleOpenOperation(operation.id)}
              key={operation.id}
            >
              <Box
                key={operation.id}
                sx={{ width: "100%", height: "68px", padding: "5px 16px", backgroundColor: theme.palette.common.white,}}
              >
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Box sx={{ width: "15%" }}>
                    <Box className="paymentMethod">
                      <img src={cashImagen} alt="cash payment logo" />
                    </Box>
                    {/* <img src={creditCardImagen} alt="credit card payment logo" />
                    <img src={qrCodeImagen} alt="qr code payment logo" /> */}
                  </Box>

                  <Box sx={{ width: "60%" }}>
                    <Stack
                      direction="column"
                      justifyContent="center"
                      alignItems={"start"}
                    >
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
                    </Stack>
                  </Box>
                  <Box sx={{ width: "30%" }}>
                    <Stack
                      direction="row"
                      justifyContent="end"
                      alignItems="center"
                    >
                      <Typography fontSize={"20px"}>
                        $ {operation.amount}
                      </Typography>
                      <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </CustomBaseButton>
          ))}
        </Stack>
      </Box>
    </>
  );
}
