const mongoose = require('mongoose');

const Feedback = mongoose.model('Feedback');


module.exports.createFeedback = (req, res, next) => {
    var feedback = new Feedback();

    feedback.name = req.body.name;
    feedback.review = req.body.review;
    feedback.rating = req.body.rating;
    feedback.email = req.body.email;
   

    feedback.save((err, doc) => {
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
module.exports.feedback = (req, res, next) =>{
    
    Feedback.find(
        (err, feedbacks) => {
            if (err)
            console.log(err);
                else
                res.json(feedbacks);
        }
    );
}
// 


