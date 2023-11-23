import "../App.css";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import cashImagen from "../assets/icons/cash-32.svg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { Stack, useTheme } from "@mui/material";
import { CustomBaseButton } from "../utils/custom-buttons";

import { Ioperation } from "../interfaces/global-interfaces";



export default function OperationRow({operation, handleOpenOperation}: {operation: Ioperation, handleOpenOperation: Function}) {
  const theme = useTheme();
  
  return (
    <>
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
    </>
  );
}
