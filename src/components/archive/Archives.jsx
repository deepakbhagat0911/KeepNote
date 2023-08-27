import { useContext } from "react";
import { Box, styled, Grid } from "@mui/material";
import Archive from "./Archive";
import { DataContext } from "../Context/Context";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...(theme.mixins.toolbar || {}),
}));
const Archives = () => {
  const { archiveNotes } = useContext(DataContext);
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        <Grid container marginTop={12}>
          {archiveNotes?.map((note) => {
            return (
              <Grid item>
                <Archive note={note} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Archives;
