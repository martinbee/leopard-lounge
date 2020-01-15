import React, { useState } from 'react';
import {
  Typography,
  Button,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from '@material-ui/core';
import styled from 'styled-components';

import Box from './Box';
import ResultsModal from './ResultsModal';

const gameHeight = '42';

const GameHeader = styled.div`
  display: flex;
`;
const GameHeaderSection = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
`;
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
  border-top: ${({ isFirstRow }) => isFirstRow ? 'none' : '.25px solid black'};
  border-bottom: ${({ isLastRow }) => isLastRow ? 'none' : '.25px solid black'};
  display: flex;
`;
const SelectFormControl = styled(FormControl)`
  width: 8rem;
`;

const checkBoardForVictory = (rowIndex, boxIndex, boardState, player) => {
  const numberOfRows = boardState.length;
  let rowCount = 0;
  let colCount = 0;
  let diagCount = 0;
  let reverseDiagCount = 0;

  for (let i = 0; i < numberOfRows; i += 1) {
    const rowValue = boardState[rowIndex][i];
    const colValue = boardState[i][boxIndex];
    const diagValue = boardState[i][i];
    const reverseDiagValue = boardState[i][numberOfRows - (i + 1)];

    if (rowValue === player) rowCount += 1;
    if (colValue === player) colCount += 1;
    if (diagValue === player) diagCount += 1;
    if (reverseDiagValue === player) reverseDiagCount += 1;
  }

  if (rowCount === numberOfRows) return true;
  if (colCount === numberOfRows) return true;
  if (diagCount === numberOfRows) return true;
  if (reverseDiagCount === numberOfRows) return true;

  return false;
};

const numberOfRowsOptions = [3, 4, 5, 6];
const initialPlayerState = '1';

const getBlankBoard = (numberOfRows = 1) => new Array(numberOfRows)
  .fill(new Array(numberOfRows).fill(''));

const TicTacToe = () => {
  const [numberOfRows, setNumberOfRows] = useState(3);
  const initialBoardState = getBlankBoard(numberOfRows);
  const [boardState, setBoardState] = useState(initialBoardState);
  const [currentPlayer, setCurrentPlayer] = useState(initialPlayerState);
  const [victor, setVictor] = useState('');
  const [showResultsScreen, setShowResultsScreen] = useState(false);

  const toggleCurrentPlayer = () => {
    if (currentPlayer === '1') {
      setCurrentPlayer('2');
    } else {
      setCurrentPlayer('1');
    }
  };

  const claimBox = (rowIndexToClaim, boxIndexToClaim) => {
    const updatedBoard = boardState.map((row, rowIndex) => {
      if (rowIndex === rowIndexToClaim) {
        return row.map((box, boxIndex) => {
          if (boxIndex === boxIndexToClaim) return currentPlayer;

          return box;
        });
      }

      return row;
    });

    setBoardState(updatedBoard);

    const hasPlayerWon = checkBoardForVictory(
      rowIndexToClaim,
      boxIndexToClaim,
      updatedBoard,
      currentPlayer,
    );

    if (hasPlayerWon) {
      setVictor(currentPlayer); // this does not disappear
      setShowResultsScreen(true);
    } else {
      // feels clunky, maybe count moves?? logic doesn't work
      const isCatsGame = updatedBoard.reduce((acc, row) => {
        if (Boolean(acc)) return acc;
        const emptyValues = row.filter(value => !Boolean(value));

        return !emptyValues.length;
      }, false);

      if (isCatsGame) {
        setShowResultsScreen(true);
      } else {
        toggleCurrentPlayer();
      }
    }
  };

  const resetBoard = () => {
    setShowResultsScreen(false);
    setBoardState(getBlankBoard(numberOfRows));
    setCurrentPlayer(initialPlayerState);
    setVictor('');
  };

  // do better here
  const boardHasAMove = boardState.reduce((hasMove, rows) => {
    if (!hasMove) return rows.find(move => move);

    return hasMove;
  }, false);

  const selectNumberOfRows = (evt) => {
    const number = evt.target.value;
    setNumberOfRows(number);
    setBoardState(getBlankBoard(number));
  };

  return (
    <>
      <GameHeader>
        <GameHeaderSection>
          <Text>Turn: Player {currentPlayer}</Text>
        </GameHeaderSection>
        <GameHeaderSection>
          <Button
            onClick={resetBoard}
            color="secondary"
            variant="contained"
            disabled={!boardHasAMove}
          >
            Reset
          </Button>
        </GameHeaderSection>
        <GameHeaderSection>
          <SelectFormControl>
            <InputLabel id="number-of-rows-select-label">
              Number of Rows
            </InputLabel>
            <Select
              labelId="number-of-rows-select-label"
              id="number-of-rows-select"
              value={numberOfRows}
              onChange={selectNumberOfRows}
            >
              {numberOfRowsOptions.map((number) => (
                <MenuItem key={number} value={number}>
                  {number}
                </MenuItem>
              ))}
            </Select>
          </SelectFormControl>
        </GameHeaderSection>
      </GameHeader>
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
                    claim={claim}
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
      <ResultsModal
        onClose={resetBoard}
        open={Boolean(showResultsScreen)}
        victor={victor}
      />
    </>
  );
};


export default TicTacToe;
