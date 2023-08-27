import { useContext } from "react";
import { Box, styled, Grid } from "@mui/material";
import DeleteNote from "./DeleteNote";
import { DataContext } from "../Context/Context";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...(theme.mixins.toolbar || {}),
}));
const DeleteNotes = () => {
  const { deleteNotes } = useContext(DataContext);
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        <Grid container marginTop={12}>
          {deleteNotes?.map((note) => {
            return (
              <Grid item>
                <DeleteNote note={note} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default DeleteNotes;
