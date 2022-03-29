import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import menuicon from "../../assets/menu-icon.png";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import "../dashboard/Dashboard.scss";
import { RefreshOutlined } from "@material-ui/icons";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {
  LogoutOutlined,
  SearchOutlined,
  SettingsAccessibilityOutlined,
  SettingsOutlined,
  ViewAgendaOutlined,
} from "@mui/icons-material";
import { Route, Routes, useNavigate } from "react-router";
import Notes from "./Notes";
import Archive from "../dashboard/Archive";
import Trash from "../dashboard/Trash";
import { NoteServices } from "../../services/NoteService";

let noteService = new NoteServices();

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const menuList = [
  {
    text: "Notes",
    icon: <LightbulbOutlinedIcon />,
  },
  {
    text: "Reminders",
    icon: <NotificationsNoneOutlinedIcon />,
  },
  {
    text: "Edit labels",
    icon: <EditOutlinedIcon />,
  },
  {
    text: "Archive",
    icon: <ArchiveOutlinedIcon />,
  },
  {
    text: "Bin",
    icon: <DeleteOutlineOutlinedIcon />,
  },
];

export default function MiniDrawer() {

  let navigate = useNavigate();

  let userInfo = localStorage.getItem("fundooUserToken")

  React.useEffect(() => {
    if (!userInfo){
     navigate("/login")   
    }
},[])


  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const changeRoute = (route) => {
    switch (route) {
      case "Archive":
        navigate("archive");
        break;
      case "Notes":
        navigate("");
        break;
      case "Bin":
        navigate("trash");
        break;
      default:
        navigate("");
        break;
    }
  };
  
  let [noteTitles, setNoteTitles] = React.useState([]);

  let getTitles = () => {
    noteService.getAllNotes().then(response => {
        setNoteTitles(response.data)
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });
  }

  

  let [query, setQuery] = React.useState("")

  let searchTheNotes = (event) => {
    setQuery(event.target.value);
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="inherit" className="app-bar">
        <Toolbar>
          <div className="header">
            <IconButton
              style={{ width: "30px", padding: "0px 25px", height: "30px" }}
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
            >
              <MenuIcon className="menu-button" />
            </IconButton>
            <img
              src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
              alt="logo"
              height={"40px"}
              width={"40px"}
            />
            <h4>Fundo</h4>
            <div>
            <Autocomplete
              className="searchinput"
              id="free-solo-demo"
              freeSolo
              options={noteTitles.map((option) => option.title)}
              renderInput={(params) => (
                <TextField {...params} placeholder="search" onChange={searchTheNotes} onClick={getTitles}/>
              )}
            />
            </div>
            <div className="header-icons">
              <IconButton className="icon-button">
                <RefreshOutlined />
              </IconButton>
              <IconButton className="icon-button">
                <ViewAgendaOutlined />
              </IconButton>
              <IconButton className="icon-button">
                <SettingsOutlined />
              </IconButton>
              <a href="/login" className="logout-link">
                <button className="btn0 logout">
                  <LogoutOutlined />
                </button>
              </a>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader></DrawerHeader>
        <Divider />
        <List>
          {menuList.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => changeRoute(item.text)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Routes>
          <Route path="archive" element={<Archive />} />
          <Route path="trash" element={<Trash />} />
          <Route path="" element={<Notes query = {query}/>} />
        </Routes>
      </Box>
    </Box>
  );
}
