const mongoose = require('mongoose');

var contactusSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: 'Full name can\'t be empty'
    },
    email: {
        type: String,
        // required: 'Rating can\'t be empty',
        // unique: true
    },
    enquirydetails: {
        type: String,
        // required: 'review can\'t be empty',
     
    },

  

   
});

mongoose.model('Contactus', contactusSchema);
