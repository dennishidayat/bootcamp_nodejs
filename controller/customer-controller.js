'use strict';

var response = require('../model/res');
var customerDaoSequelize = require('../dao/customer-dao-sequelize');
var logger = require('../util/logging/winston-logger');

exports.customer = function(req, res) {
    customerDaoSequelize.getAll(function (error, rows){
        if(error){
            logger.error('error while select: '+error);
            response.err(error, res);
        } else{
            response.ok(rows, res)
        }
    });
};

exports.getCustomerById = function (req, res) {
    customerDaoSequelize.getById(req.params['id'], function (err, data) {
        if (err) {
            logger.error('error call getById : ' + err);
            response.err(err, res);
        }
        response.ok(data, res)
    });
};

exports.insertCust = function (req, res) {
    customerDaoSequelize.insert(req.body, function (err, data) {
        if (err) {
            logger.info('error call insert : ' + err);
            response.err(err, res);
        }
        response.ok('data inserted with id ' + data.insertId, res);
    });
};

exports.delCust = function (req, res) {
    customerDaoSequelize.del(req.params['id'], function (err, data) {
        if (err) {
            logger.error(err);
            response.ok(err, res);
        } else {
            response.ok('success delete id : '+req.params['id'], res)
        }
    });
}

exports.updateCust = function updateCust(req, res) {
    customerDaoSequelize.getById(req.body.customernumber, function(err, data){//check customer exists
        if(err){
            logger.error('error call getById : '+err);
            response.err(err, res);
        } else if(data==null){
            response.datanotfound('customer not found', res);
        }else{
            //if exists, then continue update
            customerDao.update(req.body.customernumber, req.body, function(err, data){
                if(err){
                    logger.error('error call update : '+err);
                    response.err(error, res);
                } 
                response.ok('updated data : '+ data.message, res);
            });
        }
    });
};
