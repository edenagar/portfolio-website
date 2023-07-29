import React from 'react';

import '../index.css';
import Board from './board.js';
import King from '../pieces/king'
import FallenSoldierBlock from './fallen-soldier-block.js';
import initialiseChessBoard from '../helpers/board-initialiser.js';
import aiService from '../../../services/chessService'


export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: initialiseChessBoard(),
      whiteFallenSoldiers: [],
      blackFallenSoldiers: [],
      player: 1,
      sourceSelection: -1,
      status: '',
      turn: 'white'
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.player === 2) {
      this.makeAiMove();
    }
  }

  async makeAiMove() {
    const { squares } = this.state;
    const bestMove = await aiService.getBestMove(squares);

    if (!bestMove) {
      this.setState({ status: 'Game over. AI cannot make a move.' });
      return;
    }

    const { source, destination } = bestMove;
    this.handleMove(source, destination);
  } catch(error) {
    this.setState({ status: 'Error communicating with AI server.' });

  }

  handleClick(i) {
    if (this.state.player === 2) {
      return;
    }

    this.handleMove(this.state.sourceSelection, i);
  }

  handleMove(sourceSelection, destinationSelection) {
    const squares = [...this.state.squares];

    if (sourceSelection === -1) {
      if (!squares[destinationSelection] || squares[destinationSelection].player !== this.state.player) {
        this.setState({ status: "Wrong selection. Choose player " + this.state.player + " pieces." });
        if (squares[destinationSelection]) {
          squares[destinationSelection].style = { ...squares[destinationSelection].style, backgroundColor: "" };
        }
      }
      else {
        squares[destinationSelection].style = { ...squares[destinationSelection].style, backgroundColor: "RGB(111,143,114)" };
        this.setState({
          status: "Choose destination for the selected piece",
          sourceSelection: destinationSelection
        })
      }
      return
    }

    squares[sourceSelection].style = { ...squares[sourceSelection].style, backgroundColor: "" };

    if (squares[destinationSelection] && squares[destinationSelection].player === this.state.player) {
      this.setState({
        status: "Wrong selection. Choose valid source and destination again.",
        sourceSelection: -1,
      });
    }
    else {

      const whiteFallenSoldiers = [];
      const blackFallenSoldiers = [];
      const isDestEnemyOccupied = Boolean(squares[destinationSelection]);
      const isMovePossible = squares[sourceSelection].isMovePossible(sourceSelection, destinationSelection, isDestEnemyOccupied);

      if (isMovePossible) {
        if (squares[destinationSelection] !== null) {
          if (squares[destinationSelection].player === 1) {
            whiteFallenSoldiers.push(squares[destinationSelection]);
          }
          else {
            blackFallenSoldiers.push(squares[destinationSelection]);
          }
        }

        squares[destinationSelection] = squares[sourceSelection];
        squares[sourceSelection] = null;

        const isCheckMe = this.isCheckForPlayer(squares, this.state.player)

        if (isCheckMe) {
          this.setState(oldState => ({
            status: "Wrong selection. Choose valid source and destination again. Now you have a check!",
            sourceSelection: -1,
          }))
        } else {
          let player = this.state.player === 1 ? 2 : 1;
          let turn = this.state.turn === 'white' ? 'black' : 'white';

          this.setState(oldState => ({
            sourceSelection: -1,
            squares,
            whiteFallenSoldiers: [...oldState.whiteFallenSoldiers, ...whiteFallenSoldiers],
            blackFallenSoldiers: [...oldState.blackFallenSoldiers, ...blackFallenSoldiers],
            player,
            status: '',
            turn
          }));
        }
      }
      else {
        this.setState({
          status: "Wrong selection. Choose valid source and destination again.",
          sourceSelection: -1,
        });
      }
    }
  }


  getKingPosition(squares, player) {
    return squares.reduce((acc, curr, i) =>
      acc ||
      ((curr
        && (curr.getPlayer() === player))
        && (curr instanceof King)
        && i),
      null)
  }

  isCheckForPlayer(squares, player) {
    const opponent = player === 1 ? 2 : 1
    const playersKingPosition = this.getKingPosition(squares, player)
    const canPieceKillPlayersKing = (piece, i) => piece.isMovePossible(playersKingPosition, i, squares)
    return squares.reduce((acc, curr, idx) =>
      acc ||
      (curr &&
        (curr.getPlayer() === opponent) &&
        canPieceKillPlayersKing(curr, idx)
        && true),
      false)
  }


  render() {

    return (
      <div>
        <div className="game">
          <div className="game-board">
            <Board
              squares={this.state.squares}
              onClick={(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <h3>Turn</h3>
            <div id="player-turn-box" style={{ backgroundColor: this.state.turn }}>

            </div>
            <div className="game-status">{this.state.status}</div>

            <div className="fallen-soldier-block">

              {<FallenSoldierBlock
                whiteFallenSoldiers={this.state.whiteFallenSoldiers}
                blackFallenSoldiers={this.state.blackFallenSoldiers}
              />
              }
            </div>

          </div>
        </div>
      </div>


    );
  }
}

