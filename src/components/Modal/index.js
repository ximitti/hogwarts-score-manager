// react
import { useState } from "react";

// material ui
import { Box, Modal, IconButton } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";

// components
import ScoreChange from "../ScoreChange";
//--------------------------------------------

// -------------------------------------------
const ModalScore = ({ student }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Box>
        <IconButton onClick={handleOpen} araia-label="edit">
          <AddBoxIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box>
        <Modal open={open} onClose={handleClose}>
          <ScoreChange close={handleClose} student={student} />
        </Modal>
      </Box>
    </Box>
  );
};

export default ModalScore;
