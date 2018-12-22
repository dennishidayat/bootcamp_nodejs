const { Account } = require('../db/sequelize');
var logger = require('../util/logging/winston-logger');


exports.getAll = function getAll(callback) {
    Account.findAll()
        .then((customer) => {
            return callback(null, customer)
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        });
};

exports.insert = function insert(data, callback) {
    Account.create(data)
        .then((customer) => {
            return callback(null, customer)
        })
        .catch ((error) => {
        logger.error(error);
        return callback(error);
    });
};

exports.getById = function getById(id, callback) {
    Account.findById(id)
    .then((customer)=> {
        return callback(null, customer)
    })
    .catch ((error) => {
        logger.error(error);
        return callback(error);
    });
};

exports.update = function update(id, data, callback) {
    Account.update(data, {
        where: { accountnumber: data.accountnumber },
        returning: true,
        plain: true
      })
    .then(result => {
        logger.info('result  update:');
        logger.info(result);
        return callback(null, data);
    })
    .catch((error)=>{
        logger.error(error);
        return callback(error);
    });
}

exports.del = function del(id, callback) {
    Account.destroy({
        where: { accountnumber: id }
      })
    .then(result => {
        logger.info('result  update:');
        logger.info(result);
        return callback(null, id);
    })
    .catch((error) => {
        logger.error(error);
        return callback(error);
    })
}