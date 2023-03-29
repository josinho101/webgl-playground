import { useState } from "react";

import { FormControl, Slider, Typography } from "@mui/material";

const SliderWithLabel = (props) => {
  const { min = 1, max = 100, step = 1, label, onChange } = props;
  const [value, setValue] = useState(props.value);

  const handleChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }

    onChange && onChange(value);
  };

  return (
    <FormControl sx={{ marginTop: (theme) => theme.spacing(4) }} fullWidth>
      <Typography id="non-linear-slider" gutterBottom>
        {!label ? `${value}` : `${label}: ${value}`}
      </Typography>
      <Slider
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        aria-labelledby="slider"
      />
    </FormControl>
  );
};

export default SliderWithLabel;
