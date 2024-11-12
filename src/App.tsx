import Box from "@mui/material/Box";

import "./App.css";
import { Footer } from "./components/footer/Footer";
import { NavBar } from "./components/navbar/NavBar";
import { RacesPage } from "./pages/RacesPage";

function App() {
  return (
    <Box
      sx={{
        width: "100vw",
        backgroundColor: "background.default",
      }}
    >
      <header>
        <NavBar />
      </header>

      <Box
        sx={{
          paddingX: "2rem",
          boxSizing: "border-box",
          minHeight: "100vh",
          paddingBottom: "30rem",
          paddingTop: "2rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <RacesPage />
      </Box>

      <footer>
        <Footer />
      </footer>
    </Box>
  );
}

export default App;
