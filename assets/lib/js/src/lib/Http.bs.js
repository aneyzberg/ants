// Generated by BUCKLESCRIPT VERSION 2.1.1, PLEASE EDIT WITH CARE
'use strict';

var Fetch = require("bs-fetch/lib/js/src/Fetch.js");

var jsonHeaders = {
  "Content-Type": "application/json"
};

var getOpts = Fetch.RequestInit[/* make */0](/* Some */[/* Get */0], /* Some */[jsonHeaders], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0)(/* () */0);

var postOpts = Fetch.RequestInit[/* make */0](/* Some */[/* Post */2], /* Some */[jsonHeaders], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0)(/* () */0);

var putOpts = Fetch.RequestInit[/* make */0](/* Some */[/* Put */3], /* Some */[jsonHeaders], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0)(/* () */0);

var deleteOpts = Fetch.RequestInit[/* make */0](/* Some */[/* Delete */4], /* Some */[jsonHeaders], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0)(/* () */0);

function dataAndStatus(response) {
  return response.json().then((function (json) {
                return Promise.resolve(/* record */[
                            /* json */json,
                            /* status */response.status
                          ]);
              }));
}

function get(url) {
  return fetch(url, getOpts).then(dataAndStatus);
}

function post(url) {
  return fetch(url, postOpts).then(dataAndStatus);
}

function put(url, _) {
  return fetch(url, putOpts).then(dataAndStatus);
}

function $$delete(url, _) {
  return fetch(url, deleteOpts).then(dataAndStatus);
}

function json(promise) {
  return promise.then((function (response) {
                return Promise.resolve(response[/* json */0]);
              }));
}

exports.jsonHeaders   = jsonHeaders;
exports.getOpts       = getOpts;
exports.postOpts      = postOpts;
exports.putOpts       = putOpts;
exports.deleteOpts    = deleteOpts;
exports.dataAndStatus = dataAndStatus;
exports.get           = get;
exports.post          = post;
exports.put           = put;
exports.$$delete      = $$delete;
exports.json          = json;
/* getOpts Not a pure module */
