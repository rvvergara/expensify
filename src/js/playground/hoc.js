import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>
The info is:
      {' '}
      {props.info}
    </p>
  </div>
);

const withAdminWarning = WrappedComponent => props => (
  <div>
    {props.isAdmin && <p>This is private info. Please don't share.</p>}
    <WrappedComponent {...props} />
  </div>
);

const requireAuthentication = WrappedComponent => props => (
  <div>
    {
      props.isAuthenticated ? <WrappedComponent {...props} /> : <h1>Please log in</h1>
    }
  </div>
);

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="This is the detail" />, document.getElementById('app'));

ReactDOM.render(<AuthInfo isAuthenticated={false} />, document.getElementById('app'));
