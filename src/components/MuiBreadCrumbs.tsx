import { NavigateNext } from "@mui/icons-material";
import { Breadcrumbs, Link, Stack, Typography } from "@mui/material";

export const MuiBreadCrumbs = () => {
  return (
    <Stack spacing={4} m={4}>
      <Breadcrumbs separator={<NavigateNext fontSize="small" />}>
        <Link href="#" underline="hover">
          Home
        </Link>
        <Link href="#" underline="hover">
          Catalog
        </Link>
        <Link href="#" underline="hover">
          Accessories
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
      <Breadcrumbs maxItems={3}>
        <Link href="#" underline="hover">
          Home
        </Link>
        <Link href="#" underline="hover">
          Catalog
        </Link>
        <Link href="#" underline="hover">
          Accessories
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
      <Breadcrumbs maxItems={3} itemsAfterCollapse={2}>
        <Link href="#" underline="hover">
          Home
        </Link>
        <Link href="#" underline="hover">
          Catalog
        </Link>
        <Link href="#" underline="hover">
          Accessories
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
      <Breadcrumbs maxItems={3} itemsBeforeCollapse={2}>
        <Link href="#" underline="hover">
          Home
        </Link>
        <Link href="#" underline="hover">
          Catalog
        </Link>
        <Link href="#" underline="hover">
          Accessories
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
    </Stack>
  );
};
