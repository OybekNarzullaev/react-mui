import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import {
  Send,
  FormatBold,
  FormatItalic,
  FormatUnderlined,
} from "@mui/icons-material";
import React, { useState } from "react";

export const MuiButton = () => {
  const [formats, setFormats] = useState<string[] | null>(null);

  console.log(formats);

  const handleFormatChange = (
    _event: React.MouseEvent,
    updatedFormats: string[] | null
  ) => {
    setFormats(updatedFormats);
  };
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction={"row"}>
        {/* variants */}
        <Button variant="text" href="https://google.com" target="_blank">
          Google
        </Button>
        <Button variant="text">text</Button>
        <Button variant="contained">contained </Button>
        <Button variant="outlined">outlined </Button>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
      </Stack>
      <Stack display={"block"} spacing={2} direction={"row"}>
        <Button variant="contained" size="small">
          small
        </Button>
        <Button variant="contained" size="medium">
          medium
        </Button>
        <Button variant="contained" size="large">
          large
        </Button>
      </Stack>
      <Stack display={"block"} direction={"row"} spacing={2}>
        <Button variant="contained" startIcon={<Send />}>
          Send
        </Button>
        <Button variant="contained" endIcon={<Send />} disableElevation>
          Send disableElevation
        </Button>
        <Button variant="contained" endIcon={<Send />} disableRipple>
          Send disableRipple
        </Button>
        <Button variant="contained" endIcon={<Send />} disableFocusRipple>
          Send disableFocusRipple
        </Button>
        <Button variant="contained" endIcon={<Send />} disableTouchRipple>
          Send disableTouchRipple
        </Button>
        <IconButton aria-label="send" size="small" color="success">
          <Send />
        </IconButton>
      </Stack>

      <Stack direction={"row"}>
        <ButtonGroup
          variant="contained"
          color="secondary"
          size="large"
          orientation="vertical"
          aria-label="alingnment button group"
        >
          <Button>left</Button>
          <Button>center</Button>
          <Button>right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction={"row"}>
        <ToggleButtonGroup
          aria-label="text formatting"
          value={formats}
          onChange={handleFormatChange}
          exclusive
        >
          <ToggleButton value={"bold"} aria-label="bold">
            <FormatBold />
          </ToggleButton>
          <ToggleButton value={"italic"} aria-label="italic">
            <FormatItalic />
          </ToggleButton>
          <ToggleButton value={"underlined"} aria-label="underlined">
            <FormatUnderlined />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};
