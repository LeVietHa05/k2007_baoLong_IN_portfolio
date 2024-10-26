var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendFile('views/index.html', { root: 'public' });
});

router.get('/:folder/:file', function (req, res, next) {
  console.log(req.params.folder + '/' + req.params.file);
  res.sendFile('views/' + req.params.folder + '/' + req.params.file + '.html', { root: 'public' });
});

module.exports = router;
