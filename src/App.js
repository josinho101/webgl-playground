import { useEffect } from "react";

import Sidebar from "./components/sidebar";

const App = () => {
  useEffect(() => {
    document.documentElement.classList.add(`theme-dark`);
  }, []);

  return (
    <div className="container">
      <Sidebar />
    </div>
  );
};

export default App;
