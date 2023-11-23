import { useNavigate } from "react-router-dom";
import { CustomButtonPrimary } from "../utils/custom-buttons";
import { Stack } from "@mui/material";

export default function IndexPage() {
  const navigate = useNavigate();

  const handleLoadOperations = () => {
    navigate("/list");
  };

  return (
    <>
      <Stack
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems={"center"}
        sx={{ padding: "2vh" }}
      >
        <CustomButtonPrimary onClick={handleLoadOperations}>
          Load Operations
        </CustomButtonPrimary>
      </Stack>
    </>
  );
}
