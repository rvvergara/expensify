import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify App</h1>
      <p>
        Be Financially Wise!
      </p>
      <button
        type="button"
        onClick={startLogin}
      >
      Login
      </button>
    </div>
  </div>
);

LoginPage.propTypes = {
  startLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(null, mapDispatchToProps)(LoginPage);
