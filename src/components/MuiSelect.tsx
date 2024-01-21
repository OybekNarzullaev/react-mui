import { Box, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";

export const MuiSelect = () => {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState<string[]>([]);

  console.log(country);
  console.log(countries);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };

  const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box width={"250px"}>
      <TextField
        value={country}
        label="Select country"
        select
        fullWidth
        onChange={handleChange}
      >
        <MenuItem value="UZB">Uzbekistan</MenuItem>
        <MenuItem value="USA">USA</MenuItem>
        <MenuItem value="RUS">Russia</MenuItem>
      </TextField>
      <TextField
        value={countries}
        label="Select countries"
        select
        fullWidth
        onChange={handleChange2}
        SelectProps={{ multiple: true }}
      >
        <MenuItem value="UZB">Uzbekistan</MenuItem>
        <MenuItem value="USA">USA</MenuItem>
        <MenuItem value="RUS">Russia</MenuItem>
      </TextField>
    </Box>
  );
};
