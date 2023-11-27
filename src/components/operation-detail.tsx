import "../styles/App.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { pictureMap } from "../helpers/payment-picture-mapping";

export default function OperationDetail({ operation }: any) {
  return (
    <>
      <Box className="detailsPanel">
        <Stack
          direction="column"
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ height: "100%" }}
        >
          <Stack
            direction="column"
            alignItems={"center"}
            justifyContent={"start"}
            spacing={2}
          >
            <Stack
              className="paymentPictureContainer"
              direction="column"
              alignItems={"center"}
              justifyContent={"center"}
              sx={{ height: "80px", width: "80px", marginBottom: "20px" }}
            >
              <img
                src={pictureMap[operation.paymentType]}
                alt="cash payment logo"
                style={{ width: "32px" }}
              />
            </Stack>

            <Typography
              fontSize={"30px"}
              textAlign={"center"}
            >
              {operation.paymentDescription}
            </Typography>
            <Typography fontSize={"25px"}>
              {operation.boxNumber}
            </Typography>
            <Typography fontSize={"35px"}>
              {operation.amount}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
