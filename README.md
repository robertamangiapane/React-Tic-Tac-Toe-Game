## Demo

The project is hosted on Heroku:

`https://game-tic-tac-toe-react.herokuapp.com/`

## Project Setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- Setup Eslint:
  - npm install eslint  —save-dev
  - ./node_modules/.bin/eslint --init
  - ./node_modules/.bin/eslint yourfile.js (to run eslint)
  - npm install --save-dev eslint-plugin-jasmine
  - Add “plugins": ["jasmine"] to eslint json file
  - Add "jasmine": true to eslint json file
  - Add "extends": "plugin:jasmine/recommended"

- To create a React APP:
  - npx create-react-app my-app
  - cd my-app
  - yarn start

---------
## Development
User Stories:

- As a player X,/O so I can play TTT, I would like to see when is my turn
- As a player X/O, so I can play TTT, I would like to be able to see available fields
- As a player X/O, so I can play TTT, I would like to be able to claim a field
- As a player X/O, so I can play with another player, I would like to see that my turn is ended
- As a player X/O, so I can win, I should be able to claim all fields in a row, column or diagonal
- As a player X/O, so I know if I won or not, I would like to see a result of the game
- As a player X/O, so I can start a new game, I would like to know when the game is over

Class:
- Game(turns, board, players, result)
- Player(name)
- Board(fields)

Game Methods:
- Start new game
- Check game over
- claim_field(index)

Board Methods:
- claim_field

---------
## Makers Instructions

### Tic-Tac-Toe-Tech-Test

Try our Tic Tac Toe Tech Test!
This is a very common tech test as it demonstrates a candidate's knowledge of basic data structures.

### The brief
The rules of tic-tac-toe are as follows:

* There are two players in the game (X and O)
* Players take turns until the game is over
* A player can claim a field if it is not already taken
* A turn ends when a player claims a field
* A player wins if they claim all the fields in a row, column or diagonal
* A game is over if a player wins
* A game is over when all fields are taken
* Build the business logic for a game of tic tac toe. It should be easy to implement a working game of tic tac toe by combining your code with any user interface, whether web or command line.

---------
