import { useState, useRef, useContext } from "react";
import { Box, TextField, styled } from "@mui/material";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { DataContext } from "../Context/Context";
import { v4 as uuid } from "uuid";
const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 60vw;
  box-shadow: 0 1px 2px 0 rgb(60 64 67/30%), 0 2px 6px 2px rgb(60 64 67/15%);
  padding: 10px 15px;
  border-radius: 8px;
  border-color: #e0e0e0;
  min-height: 30px;
  margin: auto;
`;
const note = {
  id: "",
  heading: "",
  text: "",
};
const Form = () => {
  const [showTextField, setShowTextField] = useState(false);
  const [addNote, setAddNotes] = useState({ ...note, id: uuid() });
  const { setNotes } = useContext(DataContext);
  const ContainerRef = useRef();

  const onTextAreaClick = () => {
    setShowTextField(true);
    ContainerRef.current.style.minHeight = "70px";
  };

  const handleClickAway = () => {
    setShowTextField(false);
    ContainerRef.current.style.minHeight = "30px";
    setAddNotes({ ...note, id: uuid() });
    if (addNote.heading || addNote.text) {
      setNotes((prev) => [addNote, ...prev]);
    }
  };

  const onTextChange = (e) => {
    let changeNote = { ...addNote, [e.target.name]: e.target.value };
    setAddNotes(changeNote);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Container ref={ContainerRef}>
        {showTextField && (
          <TextField
            placeholder="Title"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            onChange={(e) => onTextChange(e)}
            name="heading"
            value={addNote.heading}
          />
        )}
        <TextField
          placeholder="Take a Note..."
          multiline
          maxRows={Infinity}
          variant="standard"
          InputProps={{ disableUnderline: true }}
          onClick={onTextAreaClick}
          onChange={(e) => onTextChange(e)}
          name="text"
          value={addNote.text}
        />
      </Container>
    </ClickAwayListener>
  );
};

export default Form;
