import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { CustomButtonPrimary, CustomButtonSecondary } from "../utils/custom-buttons";
import { ListSubheader, Stack } from "@mui/material";
import { useState } from "react";

interface ICustomFiltersSelect{
    filtersList: string[];
     selectedFilters: string[];
     setSelectedFilters: Function;
     handleApplyFilters: Function;
     handleCleanFilters: Function;
}

export default function CustomFiltersSelect({filtersList, selectedFilters, setSelectedFilters, handleApplyFilters, handleCleanFilters}: ICustomFiltersSelect) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleChange = (event: SelectChangeEvent<typeof selectedFilters>) => {
    const {
      target: { value },
    } = event;
    setSelectedFilters(
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleApply = () => {
    handleApplyFilters();
    handleClose();
  };

  const handleClean = () => {
    handleCleanFilters();
    handleClose();
  };

    const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const ITEM_HEIGHT = 54;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * (filtersList.length + 2) + ITEM_PADDING_TOP,
        width: 250,
      },
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "right",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "right",
    },
  };

  return (
    <FormControl fullWidth>
      <Select
        labelId="custom-filters-label"
        id="custom-filters-checkbox"
        multiple
        displayEmpty
        onClose={handleClose}
        onOpen={handleOpen}
        value={selectedFilters}
        onChange={handleChange}
        renderValue={() => `Filtros (${selectedFilters.length})`}
        MenuProps={MenuProps as {}}
        open={isOpen}
      >
        {filtersList.map((filter) => (
          <MenuItem key={filter} value={filter}>
            <Checkbox checked={selectedFilters.indexOf(filter) > -1} color="primary" />
            <ListItemText primary={filter} />
          </MenuItem>
        ))}
        <ListSubheader>
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={1}
            sx={{ width: "100%", padding: "10px" }}
          >
            <CustomButtonPrimary onClick={handleApply}>
              Aplicar
            </CustomButtonPrimary>
            <CustomButtonSecondary onClick={handleClean}>
              Limpiar
            </CustomButtonSecondary>
          </Stack>
        </ListSubheader>
      </Select>
    </FormControl>
  );
}
