const mongoose = require('mongoose'),
    Cart = mongoose.model('cart');

// let throwError = function (error) {
//     if (error) {
//         throw Error(error);
//     }
// };

remove = function (userObj, callback) {
    Cart.remove({name:userObj.name}, function(product){
    });

};

module.exports.removeCart = (request, response) =>  {

    console.log("Ab "+JSON.stringify(request.body))
    console.log("scan Product Controller");
    let product = Object.assign({}, request.body);

    remove(product, function(product) {
        if (product != null && product != '' && product != []) {
            response.status(200);
        } else {
            response.status(204);
        }
    });
};