import React, { useState } from 'react';
import {
  Container,
  Typography,
  Button,
} from '@material-ui/core';
import styled from 'styled-components';

import { CleanLink } from './styles';
import logo from '../images/leopard-152.png';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Text = styled(Typography)`
  text-align: center;
`;

const GamesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const GameButton = styled(Button)`
  width: 8rem;
  padding: 1rem;
  margin: 1rem;
`;


// on load show content
// if user clicks on create or host then trigger login screen
// these routes can be wrapped in a login component hook to check

// welcome message
// number of people playing
// choose a game
// then host or join buttons should appear
// these buttons should be protected routes
const games = [
  'Snowman',
  'Tic-Tac-Toe',
]; // come from api eventually

// should flow like so: two tabs, join/create
// join should just ask for room code
// create shoul have selects for games
// select for local or online
// create button at bottom that's disabled until game is chosen

const Lobby = () => {
  const [selectedGame, selectGame] = useState('');

  return (
    <Container maxWidth="md">
      <Section>
        <Text variant="h4">Welcome To Leopard Lounge</Text>
        <img src={logo} alt="leopard logo" />
        <Text variant="body1"># of Players Playing: 0</Text>
      </Section>
      <Section>
        <Text variant="h6">Choose a game:</Text>
        <GamesWrapper>
          {games.map((game) => {
            const chooseGame = () => selectGame(game);
            const chosen = selectedGame === game;

            return (
              <GameButton
                key={game}
                onClick={chooseGame}
                variant="contained"
                color={chosen ? 'primary' : 'default'}
              >
                {game}
              </GameButton>
            );
          })}
        </GamesWrapper>
      </Section>
      {selectedGame && (
        <Section>
          <Text variant="h6">Next Steps:</Text>
          <div>
            <GameButton
              onClick={() => {}}
              variant="contained"
              color="default"
            >
              Join
            </GameButton>
            <CleanLink
              to={{
                pathname: '/room',
                state: {
                  game: selectedGame,
                },
              }}
            >
              <GameButton
                onClick={() => {}}
                variant="contained"
                color="default"
              >
                Create
              </GameButton>
            </CleanLink>
          </div>
        </Section>
      )}
    </Container>
  );
};

export default Lobby;

// lobby, welcome message, # of players, choose a game, join/create buttons
