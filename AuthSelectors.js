'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var localState = function localState(state) {
  var mount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auth';
  return state[mount];
};

var isTokenRefreshing = exports.isTokenRefreshing = function isTokenRefreshing(state, mount) {
  return localState(state, mount).tokenRefreshing;
};
var selectAccessToken = exports.selectAccessToken = function selectAccessToken(state, mount) {
  return localState(state, mount).accessToken;
};
var selectRefreshToken = exports.selectRefreshToken = function selectRefreshToken(state, mount) {
  return localState(state, mount).refreshToken;
};
var selectUser = exports.selectUser = function selectUser(state, mount) {
  return localState(state, mount).user;
};