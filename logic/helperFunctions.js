'use strict';
var sayHello = function (name) {
    var sentence = "Hello " + name;
    return sentence;
};
var getConsignments = function (eparcelResponse) {
    return eparcelResponse.tracking_results;
};
module.exports.sayHello = sayHello;
