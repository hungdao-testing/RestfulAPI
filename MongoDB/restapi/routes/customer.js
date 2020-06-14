const customerController = require('../controllers/customer');

module.exports = function(app){
    app.route('/customers/book/:bookNumber').get(customerController.getCustomerByBookNumber);
}