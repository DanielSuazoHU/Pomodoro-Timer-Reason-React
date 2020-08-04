'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var State$MyReactApp = require("./State.bs.js");
var Timer$MyReactApp = require("./Timer.bs.js");
var EditTime$MyReactApp = require("./EditTime.bs.js");

function App(Props) {
  var match = React.useReducer(State$MyReactApp.reducer, State$MyReactApp.initialState);
  var dispatch = match[1];
  var state = match[0];
  React.useEffect((function () {
          var timer = setInterval((function (param) {
                  return Curry._1(dispatch, /* Tick */3);
                }), 1000);
          return (function (param) {
                    clearInterval(timer);
                    
                  });
        }), []);
  return React.createElement("div", undefined, React.createElement("button", {
                  onClick: (function (param) {
                      return Curry._1(dispatch, /* TogglePhase */4);
                    })
                }, "Switch timer"), React.createElement(Timer$MyReactApp.make, {
                  seconds: state.seconds
                }), React.createElement("button", {
                  onClick: (function (param) {
                      return Curry._1(dispatch, /* Stop */1);
                    })
                }, "Stop"), React.createElement("button", {
                  onClick: (function (param) {
                      return Curry._1(dispatch, /* Start */0);
                    })
                }, "Start"), React.createElement("button", {
                  onClick: (function (param) {
                      return Curry._1(dispatch, /* Reset */2);
                    })
                }, "Reset"), React.createElement(EditTime$MyReactApp.make, {
                  phase: "Work",
                  value: state.workTime,
                  onChange: (function (e) {
                      return Curry._1(dispatch, /* SetTime */{
                                  _0: /* Work */0,
                                  _1: e
                                });
                    })
                }), React.createElement(EditTime$MyReactApp.make, {
                  phase: "Play",
                  value: state.playTime,
                  onChange: (function (e) {
                      return Curry._1(dispatch, /* SetTime */{
                                  _0: /* Play */1,
                                  _1: e
                                });
                    })
                }));
}

var make = App;

exports.make = make;
/* react Not a pure module */
