'use strict';

var response = require('../model/res');
var accountDaoSequelize = require('../dao/account-dao-sequelize');
var logger = require('../util/logging/winston-logger');


exports.account = function account(req, res) {
    accountDaoSequelize.getAll(function (err, rows) {
        if (err) {
            logger.error('error while select : ' + err);
            response.err(err, res);
        }
        response.ok(rows, res);
    });
};

exports.insertAcc = function (req, res) {
    accountDaoSequelize.insert(req.body, function (err, data) {
        if (err) {
            logger.error(err);
            response.err(err, res);
        }
        response.ok('data inserted with id : ' + data.insertId, res);
    });
};

exports.getAccById = function getAccById(req, res) {
    accountDaoSequelize.getById(req.params['id'], function (err, data) {
        if (err) {
            logger.error(err);
            response.err(err, res);
        }
        response.ok(data, res);
    });
}

exports.updateAcc = function (req, res) {
    accountDaoSequelize.getById(req.body.accountnumber, function (err, data) {
        if (err) {
            logger.error(err);
            response.err(err, res);
        } else if (data==null) {
            response.datanotfound('data is empty', res);
        } else {
            accountDaoSequelize.update(req.body.accountnumber, req.body, function(err, data){
                if (err) {
                    logger.error('error message : ' + err);
                    response.err(err, res);
                }
                response.ok('updated : ' + data.message, res);
            });
        }
    });
};

exports.delAcc = function (req, res) {
    accountDaoSequelize.del(req.params['id'], function(err, data) {
        if (err) {
            logger.error('error message : ' + err);
            response.err(err, res);
        }
        response.ok('deleted : ' +req.params['id'], res);
    });
}