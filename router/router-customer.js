'use strict';

module.exports = function(app) {
    var controller = require('../controller/customer-controller');

    app.route('/customer').get(controller.customer);
    app.route('/customer').post(controller.insertCust);
    app.route('/customer/:id').get(controller.getCustomerById);
    app.route('/customer/:id').delete(controller.delCust);
    app.route('/customer').put(controller.updateCust);
};