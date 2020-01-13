import React, { useState } from 'react';
import {
  Typography,
} from '@material-ui/core';
import styled from 'styled-components';


const Text = styled(Typography)`
  text-align: center;
`;

const BoxWrapper = styled.div`
  height: 42vh;
  display: flex;
  flex-wrap: wrap;
`;
const Box = styled.div`
  border-right: ${({ border }) => border === 'horizontals' && '1px solid black'};
  border-left: ${({ border }) => border === 'horizontals' && '1px solid black'};
  border-top: ${({ border }) => border === 'verticals' && '1px solid black'};
  border-bottom: ${({ border }) => border === 'verticals' && '1px solid black'};
  border: ${({ border }) => border === 'all' && '1px solid black'};
  text-align: center;
  height: 14vh;
  width: 33%;
`;

// 9 squares with appropriate borders
// need state to know who's turn it is
// once a square has been clicked it belongs to that player
// that square can't be clicked again
// when three in a row (horiz, diag, vertical) the player who owns those three wins (need to figure out algo)
const initialClaimMap = {
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
  const [claimMap, setClaimMap] = useState(initialClaimMap);

  const toggleCurrentPlayer = () => {
    if (currentPlayer === '1') {
      setCurrentPlayer('2');
    } else {
      setCurrentPlayer('1');
    }
  };

  return (
    <>
      <div>
        <Text>Turn: Player {currentPlayer}</Text>
      </div>
      <BoxWrapper>
        {Object.entries(claimMap).map(([key, properties]) => {
          const { player, border } = properties;

          const claimBox = () => {
            if (!player) {
              const updatedClaimMap = {
                ...claimMap,
                [key]: {
                  player: currentPlayer,
                  border,
                },
              };
              setClaimMap(updatedClaimMap);
              toggleCurrentPlayer();
            }
          };

          return (
            <Box
              key={key}
              border={border}
              onClick={claimBox}
            >
              {player}
            </Box>
          );
        })}
      </BoxWrapper>
    </>
  );
};


export default TicTacToe;
