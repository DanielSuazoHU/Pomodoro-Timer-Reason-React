'use strict';

var React = require("react");
var ReactDOMRe = require("reason-react/src/legacy/ReactDOMRe.bs.js");
var App$MyReactApp = require("./App.bs.js");

ReactDOMRe.renderToElementWithId(React.createElement(App$MyReactApp.make, {}), "root");

/*  Not a pure module */
