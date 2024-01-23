import { Avatar, Box, Skeleton, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export const MuiSkeleton = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 3000);

    return () => clearTimeout(t);
  }, []);
  return (
    <Stack spacing={4} direction={"row"}>
      <Stack width={"250px"}>
        <Skeleton variant="text" animation={false} />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" height={180} />
      </Stack>
      <Box sx={{ width: "250px" }}>
        {loading ? (
          <Skeleton
            variant="rectangular"
            width={256}
            height={144}
            animation="wave"
          />
        ) : (
          <img
            src="https://blog.logrocket.com/wp-content/uploads/2023/10/complete-guide-react-refs.png"
            width={256}
            alt="reactJS"
            height={144}
          />
        )}
        <Stack
          spacing={1}
          direction={"row"}
          sx={{ width: "100%", marginTop: "12px" }}
        >
          {loading ? (
            <Skeleton
              variant="circular"
              width={40}
              height={40}
              animation="wave"
            />
          ) : (
            <Avatar>V</Avatar>
          )}
        </Stack>
        <Stack sx={{ width: "80%" }}>
          {loading ? (
            <>
              <Typography variant="body1">
                <Skeleton width={"100%"} animation="wave" />
              </Typography>
            </>
          ) : (
            <Typography variant="body1">React tutorial</Typography>
          )}
        </Stack>
      </Box>
    </Stack>
  );
};
