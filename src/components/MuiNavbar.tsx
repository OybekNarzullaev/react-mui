import { CatchingPokemon, KeyboardArrowDown } from "@mui/icons-material";
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export const MuiNavbar = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemon />
        </IconButton>
        <Typography sx={{ flexGrow: 1 }} component={"div"} variant="h6">
          POKEMONAPP
        </Typography>
        <Stack direction={"row"} spacing={2}>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">About</Button>
          <Button
            color="inherit"
            id="resources-button"
            onClick={handleClick}
            aria-controls={open ? "resources-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            endIcon={<KeyboardArrowDown />}
          >
            Resources
          </Button>
          <Button color="inherit">Login</Button>
        </Stack>
        <Menu
          open={open}
          id="resources-menu"
          anchorEl={anchorEl}
          MenuListProps={{
            "aria-labelledby": "resources-button",
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>PodCasts</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
