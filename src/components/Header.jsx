import React from "react";
import { styled } from "@mui/material/styles";
import { Toolbar, AppBar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const Head = styled(AppBar)`
  z-index: 1201;
  background-color: #fff;
  height: 70px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`;
const Header = ({ open, handleDrawer }) => {
  const logo =
    "https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png";
  return (
    <Head open={open}>
      <Toolbar>
        <IconButton
          onClick={handleDrawer}
          edge="start"
          sx={{ marginRight: "20px" }}
        >
          <MenuIcon />
        </IconButton>
        <img src={logo} alt="logo" style={{ width: 30 }} />
        <Typography
          style={{ color: "#5f6368", fontSize: "24px", marginLeft: "25px" }}
        >
          Keep
        </Typography>
      </Toolbar>
    </Head>
  );
};

export default Header;
