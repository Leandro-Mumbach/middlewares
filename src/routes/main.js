const router = require('express').Router();
const{index,about,music,contact, admin, login, noEntry} = require('../controllers/mainController');
const accessAdmin = require('../middleware/accessAdmin');

router
    .get('/', index)
    .get('/about', about)
    .get('/music', music)
    .get('/contact', contact)
    .get('/admin', accessAdmin, admin)
    .get('/login', login)
    .get('/noEntry', noEntry)

module.exports= router
