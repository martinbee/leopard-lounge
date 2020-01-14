import React from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import Cross from '@material-ui/icons/Close';
import Circle from '@material-ui/icons/RadioButtonUnchecked';

const BoxButton = styled(Button)`
  border-left: ${({ isFirstBox }) => isFirstBox ? 'none' : '.5px solid black'};
  border-right: ${({ isLastBox }) => isLastBox ? 'none' : '.5px solid black'};
  text-align: center;
  height: 100%
  flex: 1;
  border-radius: 0;
`;

const iconStyles = {
  width: '100%',
  height: '100%',
};

const renderIcon = (player) => {
  if (!player) return null;

  if (player === '1') return <Cross style={iconStyles} />;

  return <Circle style={iconStyles} />;
};

const Box = ({ claimBox, player, isFirstBox, isLastBox }) => (
  <BoxButton
    onClick={claimBox}
    isFirstBox={isFirstBox}
    isLastBox={isLastBox}
  >
    {renderIcon(player)}
  </BoxButton>
);

export default Box;
