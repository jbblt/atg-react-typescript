import { Container } from "@mui/material";
import Box from "@mui/material/Box";

import "./App.css";
import { Footer } from "./components/footer/Footer";
import { NavBar } from "./components/navbar/NavBar";
import { RacesPage } from "./pages/RacesPage";

function App() {
  return (
    <Box
      sx={{
        background: "background.default",
      }}
    >
      <header>
        <NavBar />
      </header>

      <Box
        sx={{
          boxSizing: "border-box",
          minHeight: "100vh",
          paddingBottom: "30rem",
        }}
      >
        <Container maxWidth="sm">
          <Box sx={{ my: 4 }}>
            <RacesPage />
          </Box>
        </Container>
      </Box>

      <footer>
        <Footer />
      </footer>
    </Box>
  );
}

export default App;
