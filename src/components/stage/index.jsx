import { useRef } from "react";

import { Box } from "@mui/material";
import { useEffect } from "react";

const Stage = (props) => {
  const gl = useRef(undefined);
  const canvas = useRef(undefined);

  useEffect(() => {
    canvas.current = document.getElementById("stage");
    gl.current = canvas.current.getContext("webgl");

    if (!gl.current) {
      console.error("WebGL not supported!");
    }
  }, []);

  return (
    <Box>
      <canvas
        id="stage"
        style={{ display: "block", width: "100vw", height: "100vh" }}
      ></canvas>
    </Box>
  );
};

export default Stage;
