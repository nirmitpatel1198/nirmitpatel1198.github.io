var express = require('express');
var router = express.Router();

/*Home page. */
router.get('/', (req, res, next)=> {
  res.render('index.pug', { title: 'Home', siteHeader: 'THis is my header' });
});


/*Aout me Page.*/
router.get('/about', (req, res, next)=>{
console.log("Hit");
  res.render('about.pug');

});


router.get('/jay',(req,res,next)=>{
  res.send("Success Call");

})
module.exports = router;
