import { Container } from "@mui/material";

import Stage from "./components/stage";
import Sidebar from "./components/sidebar";

const App = () => {
  return (
    <Container
      sx={{
        minWidth: "100vw",
        minHeight: "100vh",
        backgroundColor: "#a2a1a5",
        padding: 0,
      }}
    >
      <Sidebar />
      <Stage />
    </Container>
  );
};

export default App;
