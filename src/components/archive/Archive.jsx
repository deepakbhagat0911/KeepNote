import { useContext } from "react";

import styled from "@emotion/styled";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { UnarchiveOutlined as Unarchive } from "@mui/icons-material";
import { DeleteOutlineOutlined as Delete } from "@mui/icons-material";
import { DataContext } from "../Context/Context";
const StyledCard = styled(Card)`
  width: 250px;
  margin: 8px;
`;
const Archive = ({ note }) => {
  const { setNotes, setArchivNotes, setDeleteNotes, archiveNotes } =
    useContext(DataContext);
  const unarchiveNote = (note) => {
    const updatednotes = archiveNotes.filter((data) => data.id !== note.id);
    setArchivNotes(updatednotes);
    setNotes((prev) => [note, ...prev]);
  };
  const deleteNote = (note) => {
    const updatednotes = archiveNotes.filter((data) => data.id !== note.id);
    setArchivNotes(updatednotes);
    setDeleteNotes((prev) => [note, ...prev]);
  };
  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <Unarchive
          fontSize="small"
          style={{ marginLeft: "auto" }}
          onClick={() => unarchiveNote(note)}
        />
        <Delete fontSize="small" onClick={() => deleteNote(note)} />
      </CardActions>
    </StyledCard>
  );
};

export default Archive;
