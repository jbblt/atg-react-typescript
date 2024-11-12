import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export const NavBar = () => {
  return (
    <Box sx={{ maxWidth: "100vw", overflow: "hidden" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
            ATG Horse Racing
          </Typography>
          {/*Todo: Manage global Api context to display the selected Race or use a button to select a race pallalely to input Select*/}
          <Button color="inherit"></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
