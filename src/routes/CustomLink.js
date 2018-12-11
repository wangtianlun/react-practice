import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

function CustomLink({ to, name, activeClass, location }) {
  return (
    <Link to={to} className={location.pathname === to ? activeClass : ''}>{name}</Link>
  )
}

export default withRouter(CustomLink);