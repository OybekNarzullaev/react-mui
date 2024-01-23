import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { createTheme, colors, ThemeProvider, Typography } from "@mui/material";
// import DateFnsUtils from '@date-io/date-fns';
import Mytypography from "./components/Mytypography";
import { MuiButton } from "./components/MuiButton";
// import { MuiTextField } from "./components/MuiTextField";
// import { MuiSelect } from "./components/MuiSelect";
// import { MuiCheckBox } from "./components/MuiCheckBox";
// import { MuiSwitch } from "./components/MuiSwitch";
// import { MuiRating } from "./components/MuiRating";
// import { MuiRadioButton } from "./components/MuiRadioButton";
// import { MuiAutoComplete } from "./components/MuiAutoComplete";
// import { MuiLayout } from "./components/MuiLayout";
// import { MuiCard } from "./components/MuiCard";
// import { MuiAccordion } from "./components/MuiAccordion";
// import { MuiImageList } from "./components/MuiImageList";
// import { MuiNavbar } from "./components/MuiNavbar";
// import { MuiLink } from "./components/MuiLink";
// import { MuiBreadCrumbs } from "./components/MuiBreadCrumbs";
// import { MuiDrawer } from "./components/MuiDrawer";
// import { MuiSpeedDial } from "./components/MuiSpeedDial";
// import { MuiBottomNavigation } from "./components/MuiBottomNavigation";
// import { MuiAvatar } from "./components/MuiAvatar";
// import { MuiBadge } from "./components/MuiBadge";
// import { MuiList } from "./components/MuiList";
// import { MuiChip } from "./components/MuiChip";
// import { MuiTooltip } from "./components/MuiTooltip";
// import { MuiTable } from "./components/MuiTable";
// import { MuiAlert } from "./components/MuiAlert";
// import { MuiSnackbar } from "./components/MuiSnackbar";
// import { MuiDialog } from "./components/MuiDialog";
// import { MuiProgress } from "./components/MuiProgress";
// import { MuiSkeleton } from "./components/MuiSkeleton";
// import { MuiLoadingButon } from "./components/MuiLoadingButon";
// import { MuiPicker } from "./components/MuiPicker";
// import { MuiTab } from "./components/MuiTab";
// import { MuiTimeline } from "./components/MuiTimeline";
// import { MuiMasonry } from "./components/MuiMasonry";
import { MuiResponsiveness } from "./components/MuiResponsiveness";

const theme = createTheme({
  palette: {
    secondary: {
      main: colors.lightGreen[600],
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
});
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="app">
          <Typography variant="h1">Material UI</Typography>
          <Mytypography />
          <MuiButton />
          {/* <MuiTextField /> */}
          {/* <MuiSelect /> */}
          {/* <MuiRadioButton /> */}
          {/* <MuiCheckBox /> */}
          {/* <MuiSwitch /> */}
          {/* <MuiRating /> */}
          {/* <MuiAutoComplete /> */}
          {/* <MuiLayout /> */}
          {/* <MuiCard /> */}
          {/* <MuiAccordion /> */}
          {/* <MuiImageList /> */}
          {/* <MuiNavbar /> */}
          {/* <MuiLink /> */}
          {/* <MuiBreadCrumbs /> */}
          {/* <MuiDrawer /> */}
          {/* <MuiSpeedDial /> */}
          {/* <MuiBottomNavigation /> */}
          {/* <MuiAvatar /> */}
          {/* <MuiBadge /> */}
          {/* <MuiList /> */}
          {/* <MuiChip /> */}
          {/* <MuiTooltip /> */}
          {/* <MuiTable /> */}
          {/* <MuiAlert /> */}
          {/* <MuiSnackbar /> */}
          {/* <MuiDialog /> */}
          {/* <MuiProgress /> */}
          {/* <MuiSkeleton /> */}
          {/* <MuiLoadingButon /> */}
          {/* <MuiPicker /> */}
          {/* <MuiTab /> */}
          {/* <MuiTimeline /> */}
          {/* <MuiMasonry /> */}
          <MuiResponsiveness />
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;
