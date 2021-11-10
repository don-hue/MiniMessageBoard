const express = require('express');
const router = express.Router();
const messages = require('./messages')

/* GET new Message listing. */
router.get('/', function(req, res, next) {
  res.render('new', {title:'New Form'});
});

router.post('/', function(req,res,next){
  messages.push({text: req.body.textMessage, user:req.body.Author, added:new Date()})
  res.redirect('/')
})

module.exports = router;
