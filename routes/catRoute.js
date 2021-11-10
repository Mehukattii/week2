'use strict';
// catRoute
const express = require('express');
const { body } = require('express-validator');
const multer = require('multer');
const fileFilter = (req, file, cb) => {
  if(file.mimetype.includes('image')){
    cb(null, true);
  } else{
    cb(null, false);
  }
};
const upload = multer({ dest: './uploads/', fileFilter });
const {
  cat_list_get,
  cat_get,
  cat_post,
  cat_put,
  cat_delete,
} = require('../controllers/catController');
const router = express.Router();

router.get('/', cat_list_get);

router.get('/:id', cat_get);

router.post('/', upload.single('cat'),
  body('name').notEmpty(),
  body('birthdate').isDate(),
  body('weight').isNumeric(),
  body('owner').isNumeric(),

  cat_post);

router.put('/', cat_put);

router.delete('/:id', cat_delete);

module.exports = router;