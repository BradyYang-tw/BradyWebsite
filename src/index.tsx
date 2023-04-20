import * as React from 'react';
import { render } from 'react-dom';
import Home from "./containers/Home/Home";
import './index.css'

const APP = () => (
  <Home></Home>
);

render(<APP/>, document.getElementById('root'));