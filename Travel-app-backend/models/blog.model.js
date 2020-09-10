const mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
    title: {
        type: String,
        // required: 'Full name can\'t be empty'
    },
    content: {
        type: String,
        // required: 'Rating can\'t be empty',
        // unique: true
    },
    name: {
        type: String,
        // required: 'review can\'t be empty',
     
    },

    date: {
        type: String,
             // required: 'Email can\'t be empty',
        
    },

   
});

mongoose.model('Blog', blogSchema);
