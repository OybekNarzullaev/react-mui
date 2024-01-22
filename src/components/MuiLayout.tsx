import { Box, Divider, Grid, Paper, Stack } from "@mui/material";

export const MuiLayout = () => {
  return (
    <Paper sx={{ padding: "32px" }} elevation={4}>
      <Stack
        sx={{ border: "1px solid" }}
        direction={"row"}
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          component={"div"}
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            padding: "10px",
            height: "100px",
            width: "100px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        ></Box>
        <Box
          color={"white"}
          bgcolor={"success.light"}
          height={"100px"}
          width={"100px"}
          p={"10px"}
        ></Box>
      </Stack>
      <Grid container my={4} columnSpacing={2} rowSpacing={1}>
        <Grid item xs={12} sm={6}>
          <Box p={2} bgcolor={"primary.light"}>
            item 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box p={2} bgcolor={"primary.light"}>
            item 2
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box p={2} bgcolor={"primary.light"}>
            item 3
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box p={2} bgcolor={"primary.light"}>
            item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
