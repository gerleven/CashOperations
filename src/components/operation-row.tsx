import "../styles/App.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack, useTheme } from "@mui/material";

import rightArrowIcon from "../assets/icons/chevron_right.svg";
import { CustomBaseButton } from "../utils/custom-buttons";
import { IOperation } from "../interfaces/global-interfaces";
import { thumbnailPictureMap } from "../helpers/payment-picture-mapping";
import PriceFormatter from "../helpers/price-formatter";

interface IOperationRow {
  operation: IOperation;
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
                  src={thumbnailPictureMap[operation.paymentType]}
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
                <Typography fontSize={"20px"} noWrap>
                  {PriceFormatter(operation.amount)}
                </Typography>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  style={{ marginLeft: "10px" }}
                >
                  <img src={rightArrowIcon} alt="rigth arrow icon" />
                </Stack>
                {/* <KeyboardArrowRightIcon></KeyboardArrowRightIcon> */}
              </Stack>
            </Box>
          </Stack>
        </Box>
      </CustomBaseButton>
    </>
  );
}
