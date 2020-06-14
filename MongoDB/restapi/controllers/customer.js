const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//https://github.com/Automattic/mongoose/issues/2461
const Model = mongoose.model('EmptySchema', new Schema({}), 'bookCollection');

exports.getAllCustomers =  (req, res) => {
	
    Model.find({}, (err, doc) => {

        if(err) res.send(err)
        res.json(doc);
    })
}
exports.getCustomerByBookNumber = (req, res) => {
    console.log(req.params)
    Model.find({bookNumber: req.params.bookNumber}, (err, doc) => {
        if(err) res.send(err)
        res.json(doc)
    })
}