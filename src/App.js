import Box from "@mui/material/Box";
import Header from "components/Header";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import OptionsTab from "components/OptionsTab";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Box>
          <Header />
          <OptionsTab />
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default App;
