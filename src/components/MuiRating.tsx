import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Rating, Stack } from "@mui/material";
import React, { useState } from "react";

export const MuiRating = () => {
  const [value, setValue] = useState<number | null>(null);
  const handleHandler = (
    _event: React.SyntheticEvent<Element, Event>,
    newValue: number | null
  ) => {
    console.log(newValue);

    setValue(newValue);
  };
  return (
    <Stack display={"block"} direction={"column"}>
      <Rating value={value} onChange={handleHandler} />
      <Rating precision={0.5} size="large" />
      <Rating
        precision={0.5}
        size="large"
        icon={<Favorite fontSize="inherit" />}
        emptyIcon={<FavoriteBorder fontSize="inherit" />}
      />
      <Rating
        precision={0.5}
        size="large"
        value={3}
        readOnly
        icon={<Favorite fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorder fontSize="inherit" />}
      />
      <Rating
        precision={0.5}
        size="large"
        highlightSelectedOnly
        icon={<Favorite fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorder fontSize="inherit" />}
      />
    </Stack>
  );
};
