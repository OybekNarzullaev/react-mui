import { ErrorOutlineRounded } from "@mui/icons-material";
import { Alert, AlertTitle, Button, Stack } from "@mui/material";

export const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert
        icon={<ErrorOutlineRounded />}
        severity="error"
        onClose={() => alert("close")}
      >
        <AlertTitle>Error!</AlertTitle>
        This is en error alert
      </Alert>
      <Alert severity="warning">This is en error warning</Alert>
      <Alert severity="info">This is en error info</Alert>
      <Alert severity="success">This is en error success</Alert>
      <Alert variant="outlined" severity="error">
        This is en error alert
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is en error warning
      </Alert>
      <Alert variant="outlined" severity="info">
        This is en error info
      </Alert>
      <Alert variant="outlined" severity="success">
        This is en error success
      </Alert>
      <Alert variant="filled" severity="error">
        This is en error alert
      </Alert>
      <Alert variant="filled" severity="warning">
        This is en error warning
      </Alert>
      <Alert variant="filled" severity="info">
        This is en error info
      </Alert>
      <Alert
        variant="filled"
        severity="success"
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        <AlertTitle>Success</AlertTitle>
        This is en error success
      </Alert>
    </Stack>
  );
};
