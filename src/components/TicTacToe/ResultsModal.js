import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';

const ResultsModal = ({ onClose, open, victor }) => {
  const title = victor ? `Player ${victor} Won!` : "Cat's Game";

  return (
    <Dialog 
      onClose={onClose}
      open={open}
      aria-labelledby="tic-tac-toe-results-dialog"
    >
      <DialogTitle id="tic-tac-toe-dialog-title">
        {title}
      </DialogTitle>
    </Dialog>
  );
};

export default ResultsModal;
