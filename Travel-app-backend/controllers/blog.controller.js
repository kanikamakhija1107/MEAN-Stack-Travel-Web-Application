const mongoose = require('mongoose');

const Blog = mongoose.model('Blog');


module.exports.createBlog = (req, res, next) => {
    var blog = new Blog();

    blog.title = req.body.title;
    blog.content = req.body.content;
    blog.name = req.body.name;
    blog.date = req.body.date;
   

    blog.save((err, doc) => {
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
module.exports.blog = (req, res, next) =>{
    
    Blog.find(
        (err, blogs) => {
            if (err)
            console.log(err);
                else
                res.json(blogs);
        }
    );
}
// 


