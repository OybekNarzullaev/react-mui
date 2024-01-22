import { Face } from "@mui/icons-material";
import { Avatar, Chip, Stack } from "@mui/material";
import { useState } from "react";

export const MuiChip = () => {
  const [chips, setChips] = useState(["chip1", "chip2", "chip3"]);
  const handleDelete = (chipToDelete: string) => {
    setChips(chips.filter((item) => item !== chipToDelete));
  };
  return (
    <Stack spacing={1} direction={"row"}>
      <Chip label="chip" color="primary" size="small" />
      <Chip label="chip" color="secondary" size="small" variant="outlined" />
      <Chip
        label="chip"
        color="primary"
        size="small"
        variant="outlined"
        avatar={<Avatar>V</Avatar>}
      />
      <Chip
        label="chip"
        color="primary"
        size="small"
        variant="filled"
        icon={<Face />}
      />
      <Chip label="click" onClick={() => alert("click")} color="success" />
      <Chip
        label="Delete"
        onClick={() => alert("click")}
        onDelete={() => alert("Delete")}
        color="error"
      />
      {chips.map((chip) => (
        <Chip onDelete={() => handleDelete(chip)} label={chip} key={chip} />
      ))}
    </Stack>
  );
};
