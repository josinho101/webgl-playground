import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SelectWithLabel = (props) => {
  const marginTop = 4;
  const { id, label, value, onChange, items } = props;

  return (
    <FormControl
      sx={{ marginTop: (theme) => theme.spacing(marginTop) }}
      fullWidth
    >
      <InputLabel id={id} variant="standard" className="select-label">
        {label}
      </InputLabel>
      <Select
        labelId={id}
        value={value}
        variant="standard"
        onChange={onChange}
        sx={{
          "& .MuiSvgIcon-root": {
            color: "white",
          },
        }}
      >
        {Object.keys(items).map((item) => {
          return (
            <MenuItem key={item} value={items[item]}>
              {items[item]}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectWithLabel;
