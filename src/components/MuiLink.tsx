import { Link, Stack, Typography } from "@mui/material";

export const MuiLink = () => {
  return (
    <Stack spacing={2} direction={"row"} m={4}>
      <Link href="#" variant="body2">
        primary
      </Link>
      <Typography variant="h6">
        <Link href="#" color={"secondary"} underline="hover">
          secondary
        </Link>
      </Typography>
    </Stack>
  );
};
