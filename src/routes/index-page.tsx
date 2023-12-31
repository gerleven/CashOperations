import { useSubmit } from "react-router-dom";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { useEffect } from "react";

export default function IndexPage() {
  const submit = useSubmit()

  const handleLoadOperations = () => {
    submit(null, {action: "/list", replace: true});
  };

  useEffect(() => {
    setTimeout(()=>{handleLoadOperations()}, 500);
    
  }, []);

  return (
    <>
      <Stack direction="column" alignItems={"center"} justifyContent={"center"}>
        <Box className="detailsPanel">
          <Typography variant="h2" fontSize={"25px"} textAlign={"center"}>
            Cargando Operaciones...
          </Typography>
          <Stack
            direction="column"
            alignItems={"center"}
            justifyContent={"center"}
            sx={{height: "50%"}}
          >
          <CircularProgress />
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
