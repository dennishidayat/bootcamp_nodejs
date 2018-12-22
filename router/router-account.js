'use strict';

module.exports = function(app) {
    var controller = require('../controller/account-controller');

    app.route('/account').get(controller.account);
    app.route('/account').post(controller.insertAcc);
    app.route('/account/:id').get(controller.getAccById);
    app.route('/account/:id').delete(controller.delAcc);
    app.route('/account').put(controller.updateAcc);
};