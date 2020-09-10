const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlPackage = require('../controllers/package.controller');

const ctrlFeedback = require('../controllers/feedback.controller');
const ctrlBlog = require('../controllers/blog.controller');
const ctrlContactus = require('../controllers/contactus.controller');
const jwtHelper = require('../config/jwtHelper');
const ctrlAddToCart = require('../controllers/addToCart-controller');
const ctrlCartDisplay = require('../controllers/cart-display-controller'); //get
const ctrlPymnt = require('../controllers/payment-controller'); //get
const ctrlremCart = require('../controllers/removeFromCart-controller'); //post
 const ctrlProd = require('../controllers/productDetail-controller');
 const ctrlEmail = require('../controllers/email.controller');
router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.get('/package', ctrlPackage.package);
router.post('/createPackage', ctrlPackage.createPackage);
router.post('/managePackage', ctrlPackage.package);
router.post('/manageBlog', ctrlBlog.blog);
router.post('/feedbacks', ctrlFeedback.createFeedback);
 router.post('/manageFeedback', ctrlFeedback.feedback);
router.post('/blogs', ctrlBlog.createBlog );
router.post('/contactus', ctrlContactus.createContactus );
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.get('/package', ctrlPackage.package);
router.get('/displayfeedbacks', ctrlFeedback.feedback);
router.get('/displayblogs', ctrlBlog.blog);
router.post('/cart', ctrlAddToCart.post);
router.get('/cart', ctrlCartDisplay.get);
router.get('/email/:email', ctrlEmail.get);
  router.get('/payment', ctrlPymnt.payment);
router.post('/cartupdated', ctrlremCart.removeCart);
router.get('/productdetail/:travelId', ctrlProd.get);
module.exports = router;



