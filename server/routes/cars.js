'use strict';
var mongoose = require("mongoose");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send(true);
});

/* GET car make */
router.get('/make', function(req, res, next) {
    var CarMake = mongoose.model('CarMake');

    CarMake.getAllCarMake(function(err, doc) {
        if (err) {
            res.send({ erro: err, doc: doc });
        } else {
            if (doc.length > 0) {
                res.send(doc);
            } else {
                // seed with examples not yet inserted in DB
                res.send([
                    { id: 1, name: 'Ford' },
                    { id: 2, name: 'Acura' }
                ]);
            }
        }
    });
});

/* GET car models */
router.get('/model', function(req, res, next) {
    var CarModel = mongoose.model('CarModel');

    CarModel.getAllCarModel(function(err, doc) {
        if (err) {
            res.send({ error: err, doc: doc });
        } else {
            if (doc.length > 0) {
                res.send(doc);
            } else {
                // seed with examples not yet inserted in DB
                res.send([
                    { id: 1, make: 1, name: 'Edge', description: 'Ford Edge information', img: 'favicon.ico' },
                    { id: 2, make: 1, name: 'Escape', description: 'Ford Escape information', img: 'favicon.ico' },
                    { id: 3, make: 2, name: 'ILX', description: 'Acura ILX information', img: 'favicon.ico' },
                    { id: 4, make: 2, name: 'MDX', description: 'Acura MDX information', img: 'favicon.ico' }
                ]);
            }
        }
    });
});

module.exports = router;