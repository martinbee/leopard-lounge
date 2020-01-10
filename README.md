# Leopard Lounge

## App

This app is a multiplayer game room lounge built with React, Lambda, DynamoDB, Cognito, and using Serverless for deployments/configuration.

## Plan

- Set up initial lounge portion
- Build the concept of a game room
- Add basic local tic tac toe using state hidden behind data repository functions
- Add local hangman using state hidden behind data repository functions
- Add authentication
- Store moves in DynamoDB
- Add the ability to host a room
- Add the ability to join a room
- Tests

### Lounge Portion
- Add material ui
- Add react router
- Add layout component
- Add home screen as lounge
- Lounge should show number of users logged on
- Lounge should have two buttons `join` and `create room`

### Join Room Flow
- Screen that has an input asking for a room number
- Maybe handle passwords at some point

### Create Room Flow
- Screen with game choices
- Once a game has been selected then screen with local or online
- Local will start a room
- Online will start a room with a code

## Games

#### Tic Tac Toe
#### Hangman

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).