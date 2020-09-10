const mongoose = require('mongoose'),
Package = mongoose.model('Package');

let throwError = function(error) {
    if (error) {
        throw Error(error);
    }
};

findById = function(travelId, callback) {
    // console.log(productID);
    Package.findById(travelId, function(err, foundProduct) {
        throwError(err);
        callback(foundProduct);
    });
};

module.exports.get = function(request, response) {
    findById(request.params.travelId, function(product) {
        // console.log(product);
        response.status(200);
        response.json(product);
    });
};