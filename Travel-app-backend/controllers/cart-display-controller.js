// const cartDisplayService = require('../service/cart-display-service');
const mongoose = require('mongoose'),
    Cart = mongoose.model('cart');

// const User = mongoose.model('User');

let throwError = function (error) {
    if (error) {
        throw Error(error);
    }
};

find = function (productName, callback) {

    Cart.find({ name: new RegExp(productName.packageName, 'i') }, function (err, foundProduct) {
        console.log(err);
        throwError(err);

        console.log(foundProduct);
        callback(foundProduct);

    });


    // Cart.findUSer({ userID: productName.userID }, function (err, cart) {
    //     if (cart != null) {
    //         cart.quantity = Number(userObj.quantity) + cart.quantity;
    //         console.log(userObj.packageName);
    //         cart.name = userObj.packageName;
    //         cart.price = Number(userObj.price) + cart.price;
    //         cart.save(function (err, userObj) {
    //             if (err) {
    //                 console.error('ERROR!');
    //             }
    //             callback(userObj);
    //         });
    //     }
    // });

};

module.exports.get = (request, response) => {

    console.log("A " + JSON.stringify(request.body))
    console.log("search Product Controller");
    let productName = Object.assign({}, request.body);
    console.log("I" + productName);
    // find(productName, function (product) {
    find(productName, function (product) {
        // console.log(product);
        if (product != null && product != '' && product != []) {
            response.status(200);
            response.json(product);
            console.log("Product Found\n" + JSON.stringify(product));
        } else {
            console.log(product);
            response.status(204);
            console.log("Product not found");
        }
    });
    // });
};


exports.delete = function (request, response) {
    console.log(request.params.productId);
    remove(request.params.productId, function (product) {
        response.status(200);
        response.json(product);
    });
    console.log("Delete" + JSON.stringify(response.body))
};


// userProfile = (req, res, next) => {
//     User.findOne({ _id: req._id },
//         (err, user) => {
//             if (!user)
//                 return res.status(404).json({ status: false, message: 'User record not found.' });
//             else
//                 return res.status(200).json({ status: true, user: _.pick(user, ['_id', 'fullName', 'email']) });
//         }
//     );
// }