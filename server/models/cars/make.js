'use strict';
var mongoose = require("mongoose");

var carMakeSchema = new mongoose.Schema({
    name: String
});

var CarMake = module.exports = mongoose.model('CarMake', carMakeSchema);

module.exports.getCarMakeById = function(id, callback) {
    CarMake.findById(id, callback);
};

module.exports.getCarMakeByName = function(name, callback) {
    CarMake.findOne({ name: name }, callback);
};

module.exports.getAllCarMake = function(callback) {
    CarMake.find(callback);
};