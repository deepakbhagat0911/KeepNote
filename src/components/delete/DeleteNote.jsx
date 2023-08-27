import { useContext } from "react";

import styled from "@emotion/styled";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { RestoreFromTrashOutlined as Restore } from "@mui/icons-material";
import { DeleteForeverOutlined as Delete } from "@mui/icons-material";
import { DataContext } from "../Context/Context";
const StyledCard = styled(Card)`
  width: 250px;
  margin: 8px;
`;
const DeleteNote = ({ note }) => {
  const { notes, setNotes, setArchivNotes, setDeleteNotes, deleteNotes } =
    useContext(DataContext);
  const restoreNote = (note) => {
    const updatednotes = deleteNotes.filter((data) => data.id !== note.id);
    setDeleteNotes(updatednotes);
    setNotes((prev) => [note, ...prev]);
  };
  const deleteNote = (note) => {
    const updatednotes = deleteNotes.filter((data) => data.id !== note.id);
    setDeleteNotes(updatednotes);
  };
  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <Delete
          fontSize="small"
          style={{ marginLeft: "auto" }}
          onClick={() => deleteNote(note)}
        />
        <Restore fontSize="small" onClick={() => restoreNote(note)} />
      </CardActions>
    </StyledCard>
  );
};

export default DeleteNote;
