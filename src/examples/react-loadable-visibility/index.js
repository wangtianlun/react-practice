import React from 'react';
import LoadableVisibility from 'react-loadable-visibility/react-loadable'
import Loading from '../react-loadable/Loading';

const LoadableComponent = LoadableVisibility({
  loader: () => import('./example'),
  loading: Loading
})

export default class Index extends React.Component {
  render() {
    return (
      <LoadableComponent />
    )
  }
}