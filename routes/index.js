var express = require('express');
var router = express.Router();

/*Home page. */
router.get('/', (req, res, next)=> {
  res.render('index.pug', { title: 'Home', siteHeader: 'THis is my header' });
});


/*Aout me Page.*/
router.get('/about', (req, res, next)=>{
  res.render('about.pug');

});


/*skills Page.*/
router.get('/services', (req, res, next)=>{
  res.render('services.pug');

});

/*Projects Page.*/
router.get('/projects', (req, res, next)=>{
  res.render('projects.pug');

});

/*Contact Me Page.*/
router.get('/contact', (req, res, next)=>{
  res.render('contact.pug');

});
module.exports = router;
