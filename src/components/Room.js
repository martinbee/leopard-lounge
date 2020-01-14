import React from 'react';
import {
  Container,
  Typography,
} from '@material-ui/core';
import styled from 'styled-components';

import TicTacToe from './TicTacToe';

const GameInfoWrapper = styled.div`
  margin-bottom: 3rem;
`;
const GameInfo = styled.div`
  display: flex;
`;

const Text = styled(Typography)`
  text-align: center;
`;
const Label = styled(Typography)`
  margin-right: 1rem;
  font-weight: bold;
`;

const Room = ({ game }) => (
  <Container maxWidth="sm">
    <GameInfoWrapper>
      <GameInfo>
        <Label variant="h6">GAME:</Label>
        <Text variant="h6">Tic Tac Toe</Text>
      </GameInfo>
      <GameInfo>
        <Label variant="h6">Players:</Label>
        <Text variant="h6">2</Text>
      </GameInfo>
    </GameInfoWrapper>
    <TicTacToe />
  </Container>
);

export default Room;
