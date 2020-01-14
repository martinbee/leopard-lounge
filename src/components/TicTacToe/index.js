import React, { useState, useCallback } from 'react';
import {
  Typography,
  Button,
} from '@material-ui/core';
import styled from 'styled-components';

import Box from './Box';

const gameHeight = '42';

const Text = styled(Typography)`
  text-align: center;
`;

const BoxWrapper = styled.div`
  height: ${gameHeight}vh;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const Row = styled.div`
  height: ${({ rowHeight }) => rowHeight};
  border-top: ${({ isFirstRow }) => isFirstRow ? 'none' : '.5px solid black'};
  border-bottom: ${({ isLastRow }) => isLastRow ? 'none' : '.5px solid black'};
  display: flex;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

// when three in a row (horiz, diag, vertical) the player who owns those three wins (need to figure out algo)
// could split into three rows and then on every move check if there are 3 boxes with a players value, if so, then
// check the first row, then second row, then third row, then all three rows[0], [1], [2], then row one[0], two[1], three[2]
// and row three[0], two[1], three[2]

// alt row solution
// col=row=diag=rdiag=0
// winner=false
// for i=1 to n
//   if cell[x,i]=player then col++
//   if cell[i,y]=player then row++
//   if cell[i,i]=player then diag++
//   if cell[i,n-i+1]=player then rdiag++
// if row=n or col=n or diag=n or rdiag=n then winner=true

// grid (is this better??)
// vertical: check minus 3 recursively, then plus 3 recursively
// horizontal: if %3 then check right; if [1,4,7] check left and right; else check left
// diagonal: check [4] if present, then check [0, 2, 6, 8];

const initialPlayerState = '1';
// border on a grid:
// row level: if index === n (no bottom border), if index === 0 (no top border)
// box level: if index === n (no left border), if index === 0 (no right border)
const initialRowState = [
  '',
  '',
  '',
];

// add ability to generate board of n size
// need to generate initial state based on n
// will be an array of arrays
// [["" * n] * n]

const getInitialBoardState = (numberOfRows = 1) => new Array(numberOfRows)
  .fill(new Array(numberOfRows).fill(''));

const TicTacToe = () => {
  const [numberOfRows, setNumberOfRows] = useState(5);
  const initialBoardState = getInitialBoardState(numberOfRows);
  const [boardState, setBoardState] = useState(initialBoardState);
  const [currentPlayer, setCurrentPlayer] = useState(initialPlayerState);

  const toggleCurrentPlayer = () => {
    if (currentPlayer === '1') {
      setCurrentPlayer('2');
    } else {
      setCurrentPlayer('1');
    }
  };

  const claimBox = (rowIndex, boxIndex) => console.log(rowIndex, boxIndex);

  const resetBoard = () => {
    setBoardState(initialRowState);
    setCurrentPlayer(initialPlayerState);
  };
  const resetDisabled = false;

  return (
    <>
      <div>
        <Text>Turn: Player {currentPlayer}</Text>
      </div>
      <BoxWrapper>
        {boardState.map((row, rowIndex) => {
          const rowHeight = `${gameHeight / numberOfRows}vh`;
          const isFirstRow = rowIndex === 0;
          const isLastRow = rowIndex === numberOfRows - 1;

          return (
            <Row
              key={rowIndex}
              rowHeight={rowHeight}
              isFirstRow={isFirstRow}
              isLastRow={isLastRow}
            >
              {row.map((player, boxIndex) => {
                const key = `${rowIndex}, ${boxIndex}`;
                const claim = () => claimBox(rowIndex, boxIndex);
                const isFirstBox = boxIndex === 0;
                const isLastBox = boxIndex === numberOfRows - 1;

                return (
                  <Box
                    key={key}
                    claimBox={claim}
                    player={player}
                    isFirstBox={isFirstBox}
                    isLastBox={isLastBox}
                  />
                );
              })}
            </Row>
          );
        })}
      </BoxWrapper>
      <ButtonWrapper>
        <Button
          onClick={resetBoard}
          color="secondary"
          variant="contained"
          disabled={resetDisabled}
        >
          Reset
        </Button>
      </ButtonWrapper>
    </>
  );
};


export default TicTacToe;
