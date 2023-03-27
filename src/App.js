import { Container } from "@mui/material";
import Sidebar from "./components/sidebar";

const App = () => {
  return (
    <Container
      sx={{
        minWidth: "100vw",
        minHeight: "100vh",
        padding: "1rem",
        backgroundColor: "#a2a1a5",
      }}
    >
      <Sidebar />
    </Container>
  );
};

export default App;
