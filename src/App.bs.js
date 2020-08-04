'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

var initialState = {
  seconds: 30,
  isTicking: false
};

function reducer(state, action) {
  switch (action) {
    case /* Start */0 :
        return {
                seconds: state.seconds,
                isTicking: true
              };
    case /* Stop */1 :
        return {
                seconds: state.seconds,
                isTicking: false
              };
    case /* Reset */2 :
        return {
                seconds: 30,
                isTicking: state.isTicking
              };
    case /* Tick */3 :
        if (state.isTicking && state.seconds > 0) {
          return {
                  seconds: state.seconds - 1 | 0,
                  isTicking: state.isTicking
                };
        } else {
          return state;
        }
    
  }
}

function App(Props) {
  var match = React.useReducer(reducer, initialState);
  var dispatch = match[1];
  React.useEffect((function () {
          var timer = setInterval((function (param) {
                  return Curry._1(dispatch, /* Tick */3);
                }), 1000);
          return (function (param) {
                    clearInterval(timer);
                    
                  });
        }), []);
  return React.createElement("div", undefined, React.createElement("div", undefined, String(match[0].seconds)), React.createElement("button", {
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
                }, "Reset"));
}

var make = App;

exports.initialState = initialState;
exports.reducer = reducer;
exports.make = make;
/* react Not a pure module */
