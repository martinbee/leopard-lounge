import React, { useState } from 'react';
import {
  Typography,
  Button,
} from '@material-ui/core';
import styled from 'styled-components';
import Cross from '@material-ui/icons/Close';
import Circle from '@material-ui/icons/RadioButtonUnchecked';


const Text = styled(Typography)`
  text-align: center;
`;

const BoxWrapper = styled.div`
  height: 42vh;
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const Box = styled.button`
  border-right: ${({ border }) => border === 'horizontals' ? '1px solid black' : 'none'};
  border-left: ${({ border }) => border === 'horizontals' ? '1px solid black' : 'none'};
  border-top: ${({ border }) => border === 'verticals' ? '1px solid black' : 'none'};
  border-bottom: ${({ border }) => border === 'verticals' ? '1px solid black' : 'none'};
  border: ${({ border }) => border === 'all' && '1px solid black'};
  background: none;
  text-align: center;
  height: 14vh;
  width: 33.3%;
  cursor: pointer;
`;

const iconStyles = {
  width: '100%',
  height: '100%',
};

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
const TicTacToe = () => {
  const [currentPlayer, setCurrentPlayer] = useState(initialPlayerState);

  const toggleCurrentPlayer = () => {
    if (currentPlayer === '1') {
      setCurrentPlayer('2');
    } else {
      setCurrentPlayer('1');
    }
  };

  const resetBoard = () => {
    setTopRow(initialRowState);
    setMiddleRow(initialRowState);
    setTopRow(initialRowState);
    setCurrentPlayer(initialPlayerState);
  };
  const boxes = Object.entries(boardState);
  const resetDisabled = !boxes.find(([_, properties]) => Boolean(properties.player));

  return (
    <>
      <div>
        <Text>Turn: Player {currentPlayer}</Text>
      </div>
      <BoxWrapper>
        {boxes.map(([key, properties]) => {
          const { player, border } = properties;

          const claimBox = () => {
            if (!player) {
              const updatedBoardState = {
                ...boardState,
                [key]: {
                  player: currentPlayer,
                  border,
                },
              };
              setBoardState(updatedBoardState);
              toggleCurrentPlayer();
            }
          };

          const renderIcon = () => {
            if (!player) return null;


            if (player === '1') return <Cross style={iconStyles} />;

            return <Circle style={iconStyles} />;
          };

          return (
            <Box
              key={key}
              border={border}
              onClick={claimBox}
            >
              {renderIcon()}
            </Box>
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
