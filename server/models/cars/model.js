'use strict';
var mongoose = require("mongoose");

var carModelSchema = new mongoose.Schema({
    name: String,
    make: Number,
    description: String,
    img: String // image URL for car model
});

var CarModel = module.exports = mongoose.model('CarModel', carModelSchema);

module.exports.getCarModelById = function(id, callback) {
    CarModel.findById(id, callback);
};

module.exports.getCarModelByName = function(name, callback) {
    CarModel.findOne({ name: name }, callback);
};

module.exports.getAllCarModel = function(callback) {
    CarModel.find(callback);
};