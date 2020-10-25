const express = require('express');
const Celebrity = require('../models/celebrity');
const router  = express.Router();


//Get Celebrity
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
  .then((data) => {
      res.render('../celebrities/index', {datas: data})
  }).catch((err) => {
      next('route')
      console.log(err)

  });
})


module.exports = router;
