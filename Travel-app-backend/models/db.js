const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (!err) { console.log('MongoDB connection succeeded.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});

require('./user.model');
require('./package.model');

require('./feedback.model');
require('./blog.model');
require('./contactus.model');

require('./payment-model');
require('./productDetail-model');
