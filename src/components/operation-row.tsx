import "../App.css";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { Stack, useTheme } from "@mui/material";
import { CustomBaseButton } from "../utils/custom-buttons";

import { Ioperation } from "../interfaces/global-interfaces";

import pictureMap from "../helpers/payment-picture-mapping"

interface IOperationRow {
  operation: Ioperation;
  handleOpenOperation: Function;
}

export default function OperationRow({
  operation,
  handleOpenOperation,
}: IOperationRow) {
  
  const theme = useTheme();
  return (
    <>
      <CustomBaseButton
        onClick={() => handleOpenOperation(operation.id)}
        key={operation.id}
      >
        <Box
          key={operation.id}
          sx={{
            width: "100%",
            height: "68px",
            padding: "5px 16px",
            backgroundColor: theme.palette.common.white,
          }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box sx={{ width: "15%" }}>
              <Stack
                className="paymentPictureContainer"
                direction="column"
                alignItems={"center"}
                justifyContent={"center"}
                sx={{ height: "40px", width: "40px" }}
              >
                <img
                  src={pictureMap[operation.paymentType]}
                  alt="payment logo"
                  style={{ width: "16px" }}
                />
              </Stack>
            </Box>

            <Box sx={{ width: "60%" }}>
              <Stack
                direction="column"
                justifyContent="center"
                alignItems={"start"}
              >
                <Typography fontSize="20px" color={theme.palette.common.black}>
                  {operation.paymentDescription}
                </Typography>
                <Typography
                  component="p"
                  fontSize="18px"
                  color={theme.palette.grey[300]}
                >
                  {operation.boxNumber}
                </Typography>
              </Stack>
            </Box>
            <Box sx={{ width: "30%" }}>
              <Stack direction="row" justifyContent="end" alignItems="center">
                <Typography
                  fontSize={"20px"}
                  noWrap
                >{`$ ${operation.amount}`}</Typography>
                <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </CustomBaseButton>
    </>
  );
}
