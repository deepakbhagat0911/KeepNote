import { createContext, useContext } from "react";

import styled from "@emotion/styled";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { ArchiveOutlined as Archive } from "@mui/icons-material";
import { DeleteOutlineOutlined as Delete } from "@mui/icons-material";
import { DataContext } from "../Context/Context";
const StyledCard = styled(Card)`
  width: 250px;
  margin: 8px;
`;
const Note = ({ note }) => {
  const { notes, setNotes, setArchivNotes, setDeleteNotes } =
    useContext(DataContext);
  const archiveNote = (note) => {
    const updatednotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatednotes);
    setArchivNotes((prev) => [note, ...prev]);
  };
  const deleteNote = (note) => {
    const updatednotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatednotes);
    setDeleteNotes((prev) => [note, ...prev]);
  };
  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <Archive
          fontSize="small"
          style={{ marginLeft: "auto" }}
          onClick={() => archiveNote(note)}
        />
        <Delete fontSize="small" onClick={() => deleteNote(note)} />
      </CardActions>
    </StyledCard>
  );
};

export default Note;
