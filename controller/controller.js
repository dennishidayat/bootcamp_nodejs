'use strict';

var response = require('../model/res');
var connection = require('../db/conn');
var customerDao = require('../dao/customer-dao');
var util = require('util');

exports.testpost = function (req, res) {
    response.ok("works : " + util.inspect(req.body), res)
};

exports.insertCust = function (req, res) {
    customerDao.insert(req.body, function (err, data) {
        if (err) {
            console.log('error call insert : ' + err);
            response.err(err, res);
        }
        response.ok('data inserted with id ' + data.insertId, res);
    });
};

exports.getCustomerById = function (req, res) {
    customer.query(sqlGetById, req.params['id'],
        function (error) {
            if (error) {
                console.log(error)
            } else {
                response.ok('Data not found : ', res)
            }
        });
};

exports.delCust = function (req, res) {
    customerDao.getById(sql, req.params['id']), function (err, data) {
        if (error) {
            console.log(error)
        } else {
            response.ok('Data not found : ', res)
        }
    };
    console.log('number of rows deleted : ' + result.affectedRows);
}