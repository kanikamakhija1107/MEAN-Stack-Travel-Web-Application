const mongoose = require('mongoose'),
    Cart = mongoose.model('cart');

// const mongoose = require('mongoose');

// const Package = mongoose.model('Package');

let throwError = function (error) {
    if (error) {
        throw Error(error);
    }
};

findOne = function (userObj, callback) {

    Cart.findOne({ name: userObj.name }, function (err, cart) {
        if (cart != null) {
            cart.quantity = Number(userObj.quantity) + cart.quantity;
            console.log(userObj.packageName);
            cart.name = userObj.packageName;
            cart.price = Number(userObj.price) + cart.price;
            cart.save(function (err, userObj) {
                if (err) {
                    console.error('ERROR!');
                }
                callback(userObj);
            });
        } else {
            let addToCart = new Cart(userObj);
            addToCart.save(function (err, userObj) {
                throwError(err);
                callback(userObj);

            });

        }

    });

};

module.exports.post = function (request, response) {
    let addToCart = Object.assign({}, request.body);
    findOne(addToCart, function (cart) {
        if (cart != null && cart != '' && cart != []) {
            response.status(200);
            response.json(cart);
            console.log(cart);
        } else {
            response.status(401);
            console.log("Cart addition error");
        }
    });
};

//  module.exports.post = (req, res, next) => {
//      var cart = new Cart();

//      cart.name = req.body.packageName;
//      cart.price = req.body.price;
//      cart.quantity = req.body.quantity;

//      cart.save((err, doc) => {
//          if (!err)
//              res.send(doc);
//          else {
//              if (err.code == 11000)
//                  res.status(422).send(['Duplicate found.']);
// //             else
// //                 return next(err);
// //         }
         
// //     });

// //     if (cart != null && cart != '' && cart != []) {
// //         response.status(200);
// //         response.json(cart);
// //         console.log(cart);
// //     } else {
// //         response.status(401);
// //         console.log("Cart addition error");
// //     }
// // }