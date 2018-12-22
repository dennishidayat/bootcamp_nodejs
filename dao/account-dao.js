var connection = require('../db/conn');

const sqlGetAll = 'SELECT * FROM account';
const sqlInsert = 'INSERT INTO account SET ?';
const sqlGetById = 'SELECT * FROM account WHERE accountnumber = ?';
const sqlUpdate = 'UPDATE account SET ? WHERE accountnumber = ?';
const sqlDelete = 'DELETE FROM account WHERE accountnumber = ?';

exports.getAll = function getAll(callback) {
    connection.query(sqlGetAll, function (error, rows) {
        if (error) {
            console.log(error)
            return callback(error);
        } else {
            callback(null, rows);
        }
    });
};

exports.insert = function insert(data, callback) {
    connection.query(sqlInsert, data, function (error, rows) {
        if (error) {
            console.log(error)
            return callback(error)
        } else {
            callback(null, rows);
        }
    });
};

exports.getById = function getById(id, callback) {
    connection.query(sqlGetById, id, function (error, rows){
        if (error) {
            console.log(error)
            return callback(error)
        } else {
            callback(null, rows);
        }
    });
};

exports.update = function update(id, data, callback) {
    connection.query(sqlUpdate, [data, id], function (error, rows){
        if (error) {
            console.log('error while select account number : ' +error);
            return callback(error);
        }
            callback(null, rows);
    });

}

exports.del = function del(id, callback) {
    connection.query(sqlDelete, id, function(error, rows) {
        if (error) {
            console.log('error while delete : ' + error);
            return callback(error);
        }
        callback(null, rows);
    });
}