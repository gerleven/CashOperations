import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Cobros con QR",
  "Cobros con tarjeta",
  "Cobros en efectivo",
];

export function CustomSelect({filters, handleChange}: any) {
  return (
    <>
      {/* <InputLabel id="demo-multiple-checkbox-label">{`Filtros (${filters.length})`}</InputLabel> */}
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={filters}
        onChange={handleChange}
        // input={<OutlinedInput label={`Filtros (${filters.length})`} />}
        renderValue={() => `Filtros (${filters.length-1})`}
        MenuProps={MenuProps}
      >
        {names.map((filter) => (
          <MenuItem key={filter} value={filter}>
            <Checkbox checked={filters.indexOf(filter) > -1} color="primary"/>
            <ListItemText primary={filter} />
          </MenuItem>
        ))}
      </Select>
    </>
  );
}

export default function MultipleSelectCheckmarks() {
  const [filters, setFilters] = React.useState<string[]>([""]);

  const handleChange = (event: SelectChangeEvent<typeof filters>) => {
    const {
      target: { value },
    } = event;
    setFilters(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl fullWidth>
        <CustomSelect filters={filters} handleChange={handleChange}></CustomSelect>
      </FormControl>
    </div>
  );
}
