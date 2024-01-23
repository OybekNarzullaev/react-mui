import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Stack } from "@mui/material";

export const MuiTimeline = () => {
  return (
    <Stack spacing={4}>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent color={"text.secondary"}>
            09:30
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>city 1</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>city 2</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            {/* <TimelineConnector /> */}
          </TimelineSeparator>
          <TimelineContent>city 3</TimelineContent>
        </TimelineItem>
      </Timeline>
    </Stack>
  );
};
