import React from 'react';
import Board from './Board';
import { observe } from './Game';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      knightPosition: [1, 7]
    }
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const { knightPosition } = this.state
    return (
      <div>
        <Board knightPosition={knightPosition} />
      </div>
    )
  }

  componentDidMount() {
    observe(this.handleChange)
  }

  handleChange(knightPosition) {
    
    this.setState({ knightPosition })
  }
}