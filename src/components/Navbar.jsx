import styled from "@emotion/styled";
import {
  AppBar,
  Box,
  InputBase,
  Toolbar,
  Typography,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { React, useState } from "react";
import ChairIcon from "@mui/icons-material/Chair";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "5px",
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
}));

export default function Navbar() {
  const [opened, setOpened] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          SAS Cozycode.
        </Typography>
        <ChairIcon
          fontSize="large"
          sx={{ display: { xs: "block", sm: "none" } }}
        ></ChairIcon>
        <Search>
          <InputBase placeholder="search..."></InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30, display: { xs: "none", sm: "block" } }}
            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            onClick={(e) => setOpened(true)}
          />
          <Typography sx={{ display: { xs: "none", sm: "block" } }}>
            Salim
          </Typography>
        </Icons>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={opened}
        onClose={(e) => setOpened(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}
