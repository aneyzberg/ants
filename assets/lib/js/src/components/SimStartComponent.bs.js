// Generated by BUCKLESCRIPT VERSION 2.1.1, PLEASE EDIT WITH CARE
'use strict';

var React                     = require("react");
var ReasonReact               = require("reason-react/lib/js/src/ReasonReact.js");
var Http$ReactTemplate        = require("../lib/Http.bs.js");
var AntIcon$ReactTemplate     = require("./AntIcon.bs.js");
var SimResponse$ReactTemplate = require("../domain/SimResponse.bs.js");

function str(prim) {
  return prim;
}

function startSim() {
  Http$ReactTemplate.json(Http$ReactTemplate.post("/api/sim")).then((function (json) {
            return Promise.resolve(SimResponse$ReactTemplate.parseSimId(json));
          })).then((function (simId) {
          return Promise.resolve(ReasonReact.Router[/* push */0]("sim/" + (String(simId) + "")));
        }));
  return /* () */0;
}

var component = ReasonReact.statelessComponent("SimStart");

function make() {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("div", {
                  className: "sim-start"
                }, React.createElement("h1", undefined, ReasonReact.element(/* None */0, /* None */0, AntIcon$ReactTemplate.make(/* array */[])), "Ants", ReasonReact.element(/* None */0, /* None */0, AntIcon$ReactTemplate.make(/* array */[]))), React.createElement("p", undefined, "Simulate ant colony foraging behavior, using Elixir processes."), React.createElement("button", {
                      onClick: (function () {
                          return startSim(/* () */0);
                        })
                    }, "Start a simulation"));
    });
  return newrecord;
}

exports.str       = str;
exports.startSim  = startSim;
exports.component = component;
exports.make      = make;
/* component Not a pure module */
