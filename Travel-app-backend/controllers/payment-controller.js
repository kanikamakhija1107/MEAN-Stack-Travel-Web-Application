// const paymentService = require('../service/payment-service');
const mongoose = require('mongoose'),
    Cart = mongoose.model('cart');

let throwError = function(error) {
    if (error) {
        throw Error(error);
    }
};

find = function(cartObj, callback) {
    Cart.find({}, function(err, foundCart) {
        throwError(err);
        callback(foundCart);
    });
};

module.exports.payment = (request, response) => {
    let cart = Object.assign({}, request.body);
    find(cart, function(cart) {
        response.status(200);
        response.json(cart);
    });
};