import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact>Home</NavLink>
    <NavLink to="/create" activeClassName="is-active">Add Expense</NavLink>
    <button
      type="button"
      onClick={startLogout}
    >
      Logout
    </button>
  </header>
);

Header.propTypes = {
  startLogout: PropTypes.func.isRequired,
};

export default connect(null, { startLogout })(Header);
