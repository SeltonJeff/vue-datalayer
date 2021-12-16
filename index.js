"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var handleSetOnDataLayer = function (currentDLObject) {
    var requiredDLObject = currentDLObject;
    if (window.dataLayer)
        window.dataLayer.push(requiredDLObject);
    else {
        window.dataLayer = [];
        window.dataLayer.push(requiredDLObject);
    }
};
var handleClickObserver = function (el, currentDLObject) {
    var keys = Object.keys(currentDLObject);
    var values = Object.values(currentDLObject);
    var requiredDLObject = {};
    el.onclick = function () {
        for (var i in Object.keys(currentDLObject)) {
            if (keys[i] !== 'click' && keys[i] !== 'hover')
                requiredDLObject[keys[i]] = values[i];
        }
        requiredDLObject.event = 'click';
        handleSetOnDataLayer(requiredDLObject);
    };
};
var handleMouseOverObserver = function (el, currentDLObject) {
    var keys = Object.keys(currentDLObject);
    var values = Object.values(currentDLObject);
    var requiredDLObject = {};
    el.onmouseover = function () {
        for (var i in Object.keys(currentDLObject)) {
            if (keys[i] !== 'click' && keys[i] !== 'hover')
                requiredDLObject[keys[i]] = values[i];
        }
        requiredDLObject.event = 'mouseOver';
        handleSetOnDataLayer(requiredDLObject);
    };
};
var handleComposeDLObject = function (el, customDLObject) {
    var defaultDLObject = {
        click: true,
        hover: false,
        action: '',
        target: el,
        category: el.tagName.toLowerCase(),
        page: el.baseURI
    };
    return Object.assign(defaultDLObject, customDLObject);
};
vue_1["default"].directive('DLObject', {
    bind: function (el, _a) {
        var value = _a.value;
        var customDLObject = value;
        var currentDLObject = handleComposeDLObject(el, customDLObject);
        if (currentDLObject !== null && currentDLObject.click === true)
            handleClickObserver(el, currentDLObject);
        if (currentDLObject !== null && currentDLObject.hover === true)
            handleMouseOverObserver(el, currentDLObject);
    }
});
