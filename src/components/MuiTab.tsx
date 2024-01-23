import { Favorite } from "@mui/icons-material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import React, { useState } from "react";

export const MuiTab = () => {
  const [value, setValue] = useState("1");
  const handleChange = (_e: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList aria-label="Tabs example" onChange={handleChange}>
            <Tab label="Tab 1" value={"1"}></Tab>
            <Tab label="Tab 2" value={"2"}></Tab>
            <Tab label="Tab 3" value={"3"}></Tab>
          </TabList>
        </Box>
        <TabPanel value="1">1</TabPanel>
        <TabPanel value="2">2</TabPanel>
        <TabPanel value="3">3</TabPanel>
      </TabContext>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, width: "300px", borderColor: "divider" }}>
          <TabList
            variant="scrollable"
            scrollButtons="auto"
            centered
            aria-label="Tabs example"
            onChange={handleChange}
          >
            <Tab
              label="Tab 1"
              value={"1"}
              icon={<Favorite />}
              iconPosition="start"
            ></Tab>
            <Tab label="Tab 2" value={"2"} disabled></Tab>
            <Tab label="Tab 3" value={"3"}></Tab>
            <Tab label="Tab 4" value={"4"}></Tab>
            <Tab label="Tab 5" value={"5"}></Tab>
            <Tab label="Tab 6" value={"6"}></Tab>
          </TabList>
        </Box>
        <TabPanel value="1">1</TabPanel>
        <TabPanel value="2">2</TabPanel>
        <TabPanel value="3">3</TabPanel>
        <TabPanel value="4">4</TabPanel>
        <TabPanel value="5">5</TabPanel>
        <TabPanel value="6">6</TabPanel>
      </TabContext>
    </Box>
  );
};
