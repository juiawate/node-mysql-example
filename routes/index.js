var express = require('express');
var router = express.Router();
var Contact = require('../models/contactsModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Contacts' });
});

router.get('/getContacts', function(req, res, next) {
  //res.render('index', { title: 'Contacts' });
  Contact.findAll().then(function (data) {
    console.log(data);
    //res.render('index', { title: 'Contacts', contacts: data[0].dataValues });
    res.status(200).json({contacts: data});
  });
});

router.post('/addContact', function (req, res) {
  Contact.create(req.body,{isNewRecord: true}).then(function (data) {
    console.log(data);
    res.status(200).json({contact: data})
  });
});

module.exports = router;
