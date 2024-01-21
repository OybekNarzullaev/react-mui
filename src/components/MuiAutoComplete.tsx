import { Autocomplete, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const options = ["HTML", "CSS", "JavaScript"];
export const MuiAutoComplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [values, setValues] = useState<string[]>([]);

  console.log(value);

  const handleChange = (_e: React.SyntheticEvent, newValue: string | null) => {
    setValue(newValue);
  };

  const handleChange2 = (_e: React.SyntheticEvent, newValues: string[]) => {
    // setValue([...values,...newValue]);
    console.log(newValues);

    setValues(newValues);
  };

  return (
    <Stack width={"250px"} spacing={2}>
      <Autocomplete
        options={options}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={handleChange}
        freeSolo
      />
      <Autocomplete
        options={options}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={values}
        multiple
        onChange={handleChange2}
        freeSolo
      />
    </Stack>
  );
};
