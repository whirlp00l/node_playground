var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({message:'heheheh'});
});

router.get('/event/:id', function(req, res, next){
  console.log(req.params.id);
  res.json({message:req.params.id});
});

router.post('/event',function(req, res, next){
  var id
});

module.exports = router;
