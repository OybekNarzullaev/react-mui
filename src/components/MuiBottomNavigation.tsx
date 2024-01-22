import { Favorite, Home, Person } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";

export const MuiBottomNavigation = () => {
  const [value, setValue] = useState<number>(0);
  return (
    <BottomNavigation
      sx={{ position: "absolute", width: "100%", bottom: 0 }}
      value={value}
      showLabels
      onChange={(_event, newValue) => setValue(newValue)}
    >
      <BottomNavigationAction value={10} label="Home" icon={<Home />} />
      <BottomNavigationAction value={10} label="Favorite" icon={<Favorite />} />
      <BottomNavigationAction value={10} label="Person" icon={<Person />} />
    </BottomNavigation>
  );
};
