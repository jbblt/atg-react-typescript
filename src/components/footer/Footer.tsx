import { List, ListItem } from "@mui/material";
import Box from "@mui/material/Box";

export const Footer = () => {
  return (
    <Box
      sx={{
        minHeight: "30rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "6rem",
        backgroundColor: "primary.main",
        position: "sticky",
        width: "100vw",
        bottom: "-300px",
      }}
    >
      <Box>
        <a
          href="https://www.swedishhorseracing.com/"
          className="footer-logo-link"
          title="ATG"
        >
          <img height={30} width={70} alt="ATG" src="atg-logo.svg" />
        </a>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          color: "primary.contrastText",
          fontSize: "1.3rem",
        }}
      >
        <List component="ul">
          <ListItem
            sx={{
              justifyContent: "center",
            }}
          >
            Copyright/database-right AB Trav och Galopp (556180-4161)
          </ListItem>
          <ListItem
            sx={{
              justifyContent: "center",
            }}
          >
            V75, V86, V64 och HARRY BOY are examples of trademarks that belong
            to AB Trav och Galopp
          </ListItem>
          <ListItem
            sx={{
              justifyContent: "center",
              fontWeight: "bold",
            }}
          >
            <a href="https://www.atg.se/hjalp/regler-och-villkor">
              Our terms and conditions
            </a>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
