var express = require('express');
var router = express.Router();
const boardContollers=require("../controllers/boardController")
/* GET home page. index */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });
});

/* GET home page. nosotros */
router.get('/nosotros', function(req, res, next) {
  res.render('nosotros', { title: "nosotros somos..." });
});

router.get('/board',boardContollers.index);

module.exports = router;
