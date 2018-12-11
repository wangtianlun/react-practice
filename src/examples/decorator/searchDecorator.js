import React from 'react';

const searchDecorator = Wrapper => {
  return class WrapperComponent extends React.Component {
    componentDidMount() {
      console.log('WrapperComponent mounted');
    }

    render() {
      return (
        <Wrapper  {...this.props} />
      )
    }
  }
}

export default searchDecorator