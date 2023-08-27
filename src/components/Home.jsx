import React from "react";
import SideDrawer from "./SideDrawer";
import Notes from "./Notes/Notes";
import { Box } from "@mui/material";
import DeleteNotes from "./delete/DeleteNotes";
import Archives from "./archive/Archives";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Home = () => {
  return (
    <Box style={{ display: "flex", with: "100%" }}>
      <BrowserRouter>
        <SideDrawer />
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/archive" element={<Archives />} />
          <Route path="/delete" element={<DeleteNotes />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default Home;
