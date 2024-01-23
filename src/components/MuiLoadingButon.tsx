import { Save } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Stack } from "@mui/material";

export const MuiLoadingButon = () => {
  return (
    <Stack spacing={2} direction={"row"}>
      <LoadingButton variant="contained">Submit</LoadingButton>
      <LoadingButton variant="contained" loading>
        Submit
      </LoadingButton>
      <LoadingButton variant="contained" loadingIndicator="loading...">
        Fetch data
      </LoadingButton>
      <LoadingButton variant="contained" loading loadingIndicator="loading...">
        Fetch data
      </LoadingButton>
      <LoadingButton
        variant="contained"
        loadingPosition="start"
        startIcon={<Save />}
      >
        Save
      </LoadingButton>
      <LoadingButton
        variant="contained"
        loadingPosition="start"
        startIcon={<Save />}
        loading
      >
        Save
      </LoadingButton>
    </Stack>
  );
};
