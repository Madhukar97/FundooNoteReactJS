import { Divider, List } from "@mui/material";
import MuiDrawer from '@mui/material/Drawer';
import { styled, useTheme } from '@mui/material/styles';
import * as React from "react";
import menuicon from "../../assets/menu-icon.png";
import "../dashboard/Header.scss";
import notesimg from "../../assets/icons8-idea-24.png";
import remainderimg from "../../assets/icons8-doorbell-24.png";
import editimg from "../../assets/icons8-edit-24.png";
import archiveimg from "../../assets/icons8-archive-24.png";
import binimg from "../../assets/icons8-trash-24.png";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

function Header() {

  const [openState, setOpenState] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpenState(!openState);
  };

  return (
    <>
      <header>
        <div className="header">
          <a className="menu-button">
            <img
              src={menuicon}
              alt="menu icon"
              height={"21px"}
              onClick={handleDrawerOpen}
            ></img>
          </a>
          <img
            src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
            alt="logo"
            height={"40px"}
          />
          <h4>Fundo</h4>
          <input
            className="searchbar"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn0 btn-search" type="submit">
            Search
          </button>
          <a href="/login" className="logout-link">
            <button className="btn0 logout">Logout</button>
          </a>
        </div>
      </header>
      <hr />
      <div className="container">
        <Drawer variant="permanent" open={openState}>
          <div className="sidebar">
            <div className="sidebar-item">
              <img src={notesimg} alt="" />
              Notes
            </div>
            <div className="sidebar-item">
              <img src={remainderimg} alt="" />
              Remainders
            </div>
            <div className="sidebar-item">
              <img src={editimg} alt="" />
              Edit labels
            </div>
            <div className="sidebar-item">
              <img src={archiveimg} alt="" />
              Archive
            </div>
            <div className="sidebar-item">
              <img src={binimg} alt="" />
              Bin
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
}

export default Header;
