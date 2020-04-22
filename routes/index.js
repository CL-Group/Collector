var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cs271', {useNewUrlParser: true, useUnifiedTopology: true});
const Record = mongoose.model('Record', { name: String, content: String, keys: String, intervals: String});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/doc', function(req, res, next) {
  let data = req.body;
  let {name, content, keys, intervals} = data
  const doc = new Record({ name, content, keys, intervals });
  doc.save().then((err) => {
    if (err) {
      res.json({status: 0, msg: 'fail'})
    } else {
      res.json({status:1, msg: 'ok'})
    }
  });
})

module.exports = router;
