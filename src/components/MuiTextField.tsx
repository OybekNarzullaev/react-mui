import { Stack, TextField } from "@mui/material";
import { useState } from "react";

export const MuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction={"row"} spacing={2}>
        <TextField label="outlined" variant="outlined" />
        <TextField label="filled" variant="filled" />
        <TextField label="standard" variant="standard" />
      </Stack>
      <Stack direction={"row"} spacing={2} display={"block"}>
        <TextField label="secondary small" size="small" color="secondary" />
        <TextField label="main text" helperText="helper some text" />
        <TextField label="disabled" disabled />
        <TextField
          label="read only label"
          value={"read only field"}
          InputProps={{ readOnly: true }}
        />
      </Stack>
      <Stack direction={"row"} spacing={2} display={"block"}>
        <TextField
          label="amout"
          InputProps={{
            startAdornment: "$",
          }}
        />
        <TextField
          label="weight"
          InputProps={{
            endAdornment: "kg",
          }}
        />
        <TextField label="password" type="password" required />
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <TextField
          required
          label="name"
          error={!value}
          value={value}
          helperText={!value && "Input your name"}
          onChange={(e) => setValue(e.target.value)}
        ></TextField>
      </Stack>
    </Stack>
  );
};
