'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxActions = require('redux-actions');

var _AuthActions = require('./AuthActions');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  tokenRefreshing: false
};

exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, _AuthActions.login, function (state, _ref) {
  var _ref$payload = _ref.payload,
      user = _ref$payload.user,
      accessToken = _ref$payload.accessToken,
      refreshToken = _ref$payload.refreshToken;
  return _extends({}, state, {
    user: user,
    accessToken: accessToken,
    refreshToken: refreshToken
  });
}), _defineProperty(_handleActions, _AuthActions.register, function (state, _ref2) {
  var _ref2$payload = _ref2.payload,
      user = _ref2$payload.user,
      accessToken = _ref2$payload.accessToken,
      refreshToken = _ref2$payload.refreshToken;
  return _extends({}, state, {
    user: user,
    accessToken: accessToken,
    refreshToken: refreshToken
  });
}), _defineProperty(_handleActions, _AuthActions.tokenRefreshed, function (state, _ref3) {
  var accessToken = _ref3.payload.accessToken;
  return _extends({}, state, {
    accessToken: accessToken,
    tokenRefreshing: false
  });
}), _defineProperty(_handleActions, _AuthActions.tokenRefreshing, function (state) {
  return _extends({}, state, {
    tokenRefreshing: true
  });
}), _defineProperty(_handleActions, _AuthActions.logout, function (state) {
  return initialState;
}), _handleActions), initialState);