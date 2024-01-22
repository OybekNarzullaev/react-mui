import { Delete } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";

export const MuiTooltip = () => {
  return (
    <>
      <Tooltip title="Delete" placement="top">
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete" placement="right" arrow>
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
      <Tooltip title="delay 200" enterDelay={200} leaveDelay={200} arrow>
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
    </>
  );
};
