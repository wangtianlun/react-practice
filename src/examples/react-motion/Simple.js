import React from 'react';
import { Motion, spring } from 'react-motion';
import './style.css';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleMouseDown = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (
      <div>
        <button 
          onMouseDown={this.handleMouseDown} 
          onTouchStart={this.handleTouchStart}>
          Toggle
        </button>

        <Motion style={{ x: spring(this.state.open ? 400 : 0) }}>
          {({x}) => 
            <div className="demo0">
              <div className="demo0-block" style={{
                WebkitTransform: `translate3d(${x}px, 0, 0)`,
                transform: `translate3d(${x}px, 0, 0)`,
              }}></div>
            </div>
          }
        </Motion>
      </div>
    )
  }
}

export default Example;