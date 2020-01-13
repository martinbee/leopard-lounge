import React from 'react';
import {
  Typography,
} from '@material-ui/core';
import styled from 'styled-components';

const Text = styled(Typography)`
  text-align: center;
`;

// 9 squares with appropriate borders
// need state to know who's turn it is
// once a square has been clicked it belongs to that player
// that square can't be clicked again
// when three in a row (horiz, diag, vertical) the player who owns those three wins (need to figure out algo)

const TicTacToe = () => {
  return (
    <div style={{ border: '1px solid grey', height: '42vh' }}>

    </div>
  );
};


export default TicTacToe;
