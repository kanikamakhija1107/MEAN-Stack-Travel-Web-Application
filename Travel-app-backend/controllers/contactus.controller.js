const mongoose = require('mongoose');

const Contactus = mongoose.model('Contactus');


module.exports.createContactus = (req, res, next) => {
    var contactus = new Contactus();

    contactus.name = req.body.name;
    contactus.email = req.body.email;
    contactus.enquirydetails = req.body.enquirydetails;
   
   

    contactus.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate found.']);
            else
                return next(err);
        }
         
    });
}

// 
module.exports.contactus = (req, res, next) =>{
    
    Contactus.find(
        (err, contactusd) => {
            if (err)
            console.log(err);
                else
                res.json(contactusd);
        }
    );
}
// 


