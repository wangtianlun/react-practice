import React from 'react';
import searchDecorator from './searchDecorator';

@searchDecorator
class Example extends React.Component {
  render() {
    return (
      <div>
        search
      </div>
    )
  }
}

export default Example;