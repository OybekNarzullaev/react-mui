import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";

export const MuiRadioButton = () => {
  const [value, setValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <Box>
      <FormControl error>
        <FormLabel id="job">Year Experience</FormLabel>
        <RadioGroup aria-labelledby="job" onChange={handleChange} value={value}>
          <FormControlLabel control={<Radio />} label="0-2" value="0-2" />
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio />} label="5-10" value="5-10" />
        </RadioGroup>
        <FormHelperText>Invalid</FormHelperText>
      </FormControl>
    </Box>
  );
};
