'use strict';
// catRoute
const express = require('express')
const router = express.Router();
const {user_list_get, user_get, user_post, checkToken} = require('../controllers/userController');
const {body} = require('express-validator');


router.get('/token', checkToken);
router.get('/', user_list_get);
router.get('/:id', user_get);
router.post('/', 
    body('name').isLength({min: 3}),
    body('email').isEmail(), 
    body('passwd').matches('(?=.*[A-Z]).{8,}'),
    user_post);


router.put('/', (req, res) => {
    res.send('From this endpoint you can put cats.');
});



router.delete('/', (req, res) => {
    res.send('From this endpoint you can delete cats.');
});

module.exports = router;