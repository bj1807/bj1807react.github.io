<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import App from './weekend/component/Html';
import * as serviceWorker from './serviceWorker';
=======
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./login";
import * as serviceWorker from "./serviceWorker";
>>>>>>> 9f1e7870e0bce1ce63ab030f5d77cf86be8f4c7f

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
