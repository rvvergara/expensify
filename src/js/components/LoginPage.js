import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div>
    <button
      type="button"
      onClick={startLogin}
    >
      Login
    </button>
  </div>
);

LoginPage.propTypes = {
  startLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(null, mapDispatchToProps)(LoginPage);
