import { Mail } from "@mui/icons-material";
import { Badge, Stack } from "@mui/material";

export const MuiBadge = () => {
  return (
    <Stack spacing={2} direction={"row"}>
      <Badge badgeContent={5} color="primary">
        <Mail />
      </Badge>
      <Badge badgeContent={0} color="primary">
        <Mail />
      </Badge>
      <Badge badgeContent={0} showZero color="primary">
        <Mail />
      </Badge>
      <Badge badgeContent={1000} max={200} color="secondary">
        <Mail />
      </Badge>
      <Badge variant="dot">
        <Mail />
      </Badge>
      <Badge variant="dot" invisible>
        <Mail />
      </Badge>
    </Stack>
  );
};
