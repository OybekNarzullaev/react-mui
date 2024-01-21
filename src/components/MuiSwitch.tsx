import { Box, FormControlLabel, Switch } from "@mui/material";
import React, { useState } from "react";

export const MuiSwitch = () => {
  const [value, setValue] = useState<boolean>(false);
  return (
    <Box>
      <FormControlLabel
        label="dark"
        control={
          <Switch
            size="small"
            color="success"
            checked={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue(e.target.checked)
            }
          />
        }
      />
    </Box>
  );
};
