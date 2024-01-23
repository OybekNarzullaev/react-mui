import { Box, Stack } from "@mui/material";

export const MuiResponsiveness = () => {
  return (
    <Stack spacing={4}>
      <Box
        sx={{
          width: {
            xs: 100, // 0
            sm: 200, // 600
            md: 300, // 900
            lg: 400, // 1200
            xl: 500, // 1536
          },
          height: "300px",
          bgcolor: "secondary.dark",
        }}
      ></Box>
      <Stack
        spacing={2}
        direction={{
          xs: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
        }}
      >
        <Box
          sx={{
            width: {
              xs: "100%", // 0
              sm: "100%", // 600
              md: 100, // 900
              lg: 100, // 1200
              xl: 100, // 1536
            },
            height: 100,
            bgcolor: "secondary.main",
          }}
        ></Box>
        <Box
          sx={{
            width: {
              xs: "100%", // 0
              sm: "100%", // 600
              md: 100, // 900
              lg: 100, // 1200
              xl: 100, // 1536
            },
            height: 100,
            bgcolor: "secondary.main",
          }}
        ></Box>
        <Box
          sx={{
            width: {
              xs: "100%", // 0
              sm: "100%", // 600
              md: 100, // 900
              lg: 100, // 1200
              xl: 100, // 1536
            },
            height: 100,
            bgcolor: "secondary.main",
          }}
        ></Box>
      </Stack>
    </Stack>
  );
};
