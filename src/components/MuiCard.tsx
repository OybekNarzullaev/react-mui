import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export const MuiCard = () => {
  return (
    <Box width={"300px"}>
      <Card>
        <CardMedia
          component={"img"}
          height={"140px"}
          src="https://blog.logrocket.com/wp-content/uploads/2023/10/complete-guide-react-refs.png"
          alt="image"
        />
        <CardContent>
          <Typography component={"div"} gutterBottom variant="h5">
            React
          </Typography>
          <Typography variant="body2" color={"text.secondary"}>
            React apps are made out of components. A component is a piece of the
            UI (user interface) that has its own logic and appearance. A
            component can be as small as a button, or as large as an entire
            page.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
