import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';

const HasWonModal = ({ onClose, open, victor }) => (
  <Dialog 
    onClose={onClose} 
    open={open}
    aria-labelledby={`${victor}-won-tic-tac-toe-dialog`}
  >
    <DialogTitle id="tic-tac-toe-dialog-title">
      Player {victor} Won!
    </DialogTitle>
  </Dialog>
);

export default HasWonModal;
