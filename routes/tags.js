var express = require('express');
var router = express.Router();
var Tag = require('../models/tag');

router.get('/', function(req, res, next) {
  var query = Tag.find({});
  query.where('memeId', req.query.memeId);
  query.exec( function(err, tags, count) {
    res.json(tags);
  });
});

router.post('/', function(req, res, next) {
  new Tag({
    tagName: req.body.tagName,
    memeId: req.body.memeId
  }).save( function(err, tag, count) {
    res.json(tag);
  });
});

router.delete('/:id', function(req, res) {
  Tag.findById(req.params.id, function(err, tag) {
    tag.remove();
    res.status(200).send({success: true});
  });
});

module.exports = router;
