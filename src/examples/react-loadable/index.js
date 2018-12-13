import React from 'react';
import Loadable from 'react-loadable';
import Loading from './Loading';
import delay from './delay'

const LoadableExample = Loadable({
  loader: () => delay(1000).then(() => import('./Example')),
  loading: Loading
})

export default function App() {
  return <LoadableExample/>;
}