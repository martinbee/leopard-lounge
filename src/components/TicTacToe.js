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

// 9 squares with appropriate borders
// need state to know who's turn it is
// once a square has been clicked it belongs to that player
// that square can't be clicked again
// when three in a row (horiz, diag, vertical) the player who owns those three wins (need to figure out algo)
const initialBoardState = {
  0: {
    player: '',
    border: '',
  },
  1: {
    player: '',
    border: 'horizontals',
  },
  2: {
    player: '',
    border: '',
  },
  3: {
    player: '',
    border: 'verticals',
  },
  4: {
    player: '',
    border: 'all',
  },
  5: {
    player: '',
    border: 'verticals',
  },
  6: {
    player: '',
    border: '',
  },
  7: {
    player: '',
    border: 'horizontals',
  },
  8: {
    player: '',
    border: '',
  },
};

const TicTacToe = () => {
  const [currentPlayer, setCurrentPlayer] = useState('1');
  const [boardState, setBoardState] = useState(initialBoardState);

  const toggleCurrentPlayer = () => {
    if (currentPlayer === '1') {
      setCurrentPlayer('2');
    } else {
      setCurrentPlayer('1');
    }
  };

  const resetBoard = () => setBoardState(initialBoardState);
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
