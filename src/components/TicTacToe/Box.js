import React from 'react';
import styled from 'styled-components';
import Cross from '@material-ui/icons/Close';
import Circle from '@material-ui/icons/RadioButtonUnchecked';

const BoxButton = styled.button`
  border: none;
  border-left: ${({ isFirstBox }) => isFirstBox ? 'none' : '.25px solid black'};
  border-right: ${({ isLastBox }) => isLastBox ? 'none' : '.25px solid black'};
  text-align: center;
  height: 100%
  flex: 1;
  background: none;
  cursor: pointer;
  &:disabled {
    color: initial;
    cursor: default;
  }
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

const Box = ({ claim, player, isFirstBox, isLastBox }) => (
  <BoxButton
    onClick={claim}
    isFirstBox={isFirstBox}
    isLastBox={isLastBox}
    disabled={player}
  >
    {renderIcon(player)}
  </BoxButton>
);

export default Box;
