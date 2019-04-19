import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './routers/AppRouter';
import 'normalize.css/normalize.css';
import '../scss/style.scss';

ReactDOM.render(<AppRoutes />, document.getElementById('app'));
