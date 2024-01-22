import { Mail } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export const MuiList = () => {
  return (
    <>
      <Box sx={{ width: "400px", bgcolor: "#efefef", marginBottom: "10px" }}>
        <List>
          <ListItem>
            <ListItemIcon>
              <Mail />
            </ListItemIcon>
            <ListItemText primary="List item 1" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <Mail />
            </ListItemIcon>
            <ListItemText primary="List item 2" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Mail />
            </ListItemIcon>
            <ListItemText primary="List item 3" />
          </ListItem>
        </List>
      </Box>
      <Box sx={{ width: "400px", bgcolor: "#efefef", marginBottom: "10px" }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Mail />
              </ListItemIcon>
              <ListItemText primary="List item 1" secondary="clickable" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <Mail />
            </ListItemIcon>
            <ListItemText primary="List item 2" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <Mail />
            </ListItemIcon>
            <ListItemText primary="List item 3" />
          </ListItem>
        </List>
      </Box>
      <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Mail />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="List item 1" secondary="secondary text" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Mail />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="List item 2" secondary="secondary text" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Mail />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="List item 3" secondary="secondary text" />
          </ListItem>
        </List>
      </Box>
    </>
  );
};
