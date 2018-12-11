import React from 'react';
import styles from './example.scss';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        {JSON.stringify(styles)}
      </div>
    )
  }
}