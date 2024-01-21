import { Typography } from "@mui/material";

const Mytypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 heading</Typography>
      <Typography variant="h2">h2 heading</Typography>
      <Typography variant="h3">h3 heading</Typography>
      <Typography variant="h4" gutterBottom>
        h4 heading
      </Typography>
      <Typography variant="h5">h5 heading</Typography>
      <Typography variant="h6">h6 heading</Typography>

      <Typography variant="subtitle1">subtitle 1</Typography>
      <Typography variant="subtitle2">subtitle 2</Typography>

      {/* default aslo <Typography></Typography>*/}
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
        praesentium perferendis laudantium tempora voluptate doloremque, numquam
        aliquam cum dolor quasi, aspernatur ut? Nemo repudiandae hic quaerat
        laboriosam corporis dicta modi.
      </Typography>

      <Typography component="div" variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
        praesentium perferendis laudantium tempora voluptate doloremque, numquam
        aliquam cum dolor quasi, aspernatur ut? Nemo repudiandae hic quaerat
        laboriosam corporis dicta modi.
      </Typography>
    </div>
  );
};

export default Mytypography;
