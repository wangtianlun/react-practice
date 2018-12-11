import React from 'react';
import { autorun, reaction } from 'mobx';
import { inject, observer } from 'mobx-react';

@inject('commonStore')
@observer
class MobxExample extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleUpdateData = this.handleUpdateData.bind(this);
  }

  handleClick() {
    this.props.commonStore.fetchName();
  }

  handleUpdateData() {
     setTimeout(() => {
      // this.props.commonStore.update(Math.random());
      // this.props.commonStore.data.foo = Math.random();
      console.log(this.props.commonStore.data.foo)
     }, 1000)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>click me</button>
        <label>name: {this.props.commonStore.name}</label>

        <button onClick={this.handleUpdateData}>update data </button>
        <label>name: {this.props.commonStore.data.foo}</label>
      </div>
    )
  }

  componentDidMount() {
    reaction(() => this.props.commonStore.data.foo, (data, reaction) => {
      console.log('MobxExample reaction' + data)
    })
    // autorun((reactive) => {
    //   console.log('MobxExample autorun ' + this.props.commonStore.name);
    // }, {
    //   delay: 1000
    // })
  }
}

export default MobxExample;