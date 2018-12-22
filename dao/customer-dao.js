var connection = require('../db/conn');

const sqlGetById = 'SELECT * FROM customer WHERE customernumber = ?';
const sqlGetAll = 'SELECT * FROM customer';
const sqlInsert = 'INSERT INTO customer set ?';
const sqlDelete = 'DELETE FROM customer WHERE customernumber = ?';
const sqlUpdate = "UPDATE customer SET ? WHERE customernumber = ?";

exports.getAll = function getAll(callback) {
    connection.query(sqlGetAll, function (error, rows) {
        if (error) {
            console.log(error);
            return callback(error);
        }
        callback(null, rows);
    });
};

exports.getById = function getById(id, callback) {
    connection.query(sqlGetById, id, function (error, rows) {
        if (error) {
            console.log(error);
            return callback(error);
        }
        callback(null, rows);
    });
};

exports.insert = function insert(data, callback) {
    connection.query(sqlInsert, data, function (error, rows){
        if(error){
            console.log(error);
            return callback(error);
        } 
        callback(null, rows);
    });
};

exports.del = function del(id, callback) {
    connection.query(sqlDelete, id, function (error, rows){
        if(error){
            console.log(error);
            return callback(error);
        } 
        callback(null, rows);
    });
};

exports.update = function update(id, data, callback) {
    connection.query(sqlUpdate, [id, data], function (error, rows){
        if(error){
            console.log(error);
            return callback(error);
        } 
        callback(null, rows);
    });
};
