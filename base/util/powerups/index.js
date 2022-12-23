"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.whenAvailable = exports.sendMessage = exports.getKey = exports.parseQueryString = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _lodash = _interopRequireDefault(require("lodash.get"));

var parseQueryString = function parseQueryString() {
    var locationHref = (0, _lodash["default"])(window, 'location.href', null);
 
    if (!locationHref) {
        return null;
    }
 
    var pageURL = new URL(locationHref);
    var preHash = {};
    var postHash = {};
    var params = pageURL.searchParams;
    var paramsString = params.toString();
    var embedParams = paramsString.split('?');
    var kv = embedParams[0].split('&');
    preHash = kv.reduce(function (result, item) {
        var _item$split = item.split('='),
            _item$split2 = (0, _slicedToArray2["default"])(_item$split, 2),
            key = _item$split2[0],
            value = _item$split2[1];
 
        return Object.assign(result, (0, _defineProperty2["default"])({}, key, value));
    }, {});
    var hash = pageURL.hash;
 
    if (hash) {
        embedParams = hash.split('?');
 
        if (embedParams.length > 1) {
            kv = embedParams[1].split('&');
            postHash = kv.reduce(function (result, item) {
                var _item$split3 = item.split('='),
                    _item$split4 = (0, _slicedToArray2["default"])(_item$split3, 2),
                    key = _item$split4[0],
                    value = _item$split4[1];
 
                return Object.assign(result, (0, _defineProperty2["default"])({}, key, value));
            }, {});
        }
    }
 
    return Object.assign({}, preHash, postHash);
 };
 
 exports.parseQueryString = parseQueryString;

var getKey = function getKey() {
    var pageURL = new URL((0, _lodash["default"])(window, 'location.href', ''));
    var searchParams = pageURL.searchParams;
    var keyResult = searchParams.get('k');
 
    if (keyResult) {
        return keyResult;
    }
 
    var hash = pageURL.hash;
    if (hash) {
        
        var embedParams = hash.split('?');

        if (embedParams.length > 1) {
                      
            var embedParamsList = embedParams[1].split('&');
            var sessionKey = embedParamsList.reduce(function (accumulator, currentValue) {
                if (currentValue.startsWith('k=')) {
                    var key = currentValue.split('=')[1];
                    return key;
                }
         
                return accumulator;
            
            }, '');
        }
    }

  
 
    return sessionKey;
 };
 
exports.getKey = getKey;

var sendMessage = function sendMessage(action, data) {
    if ((0, _lodash["default"])(window, 'parent', false)) {
        var messagePayload = {
            source: 'custom_embed',
            action: action,
            data: data,
            key: getKey() // we'll define this next
        };
 
        if (action === 'ready') {
            messagePayload.isAnsRequired = true;
        }
 
        window.parent.postMessage(JSON.stringify(messagePayload), '*');
    }
};

exports.sendMessage = sendMessage;