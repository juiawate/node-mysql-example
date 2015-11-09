
var Sequelize = require('sequelize');

// dev version
/*var sequelize = new Sequelize('test', 'dev', 'juiAwate', {
    host: 'localhost',
    dialect: 'mysql'
});*/

// production version
var sequelize = new Sequelize('heroku_cf353dd6d71fd46', 'b992ca7b958b4e', '07357984', {
    host: 'us-cdbr-iron-east-03.cleardb.net'
});

var Contact = sequelize.define('contact', {
    firstName: {
        type: Sequelize.STRING,
        field: 'first_name'
    },
    lastName: {
        type: Sequelize.STRING,
        field: 'last_name'
    },
    phone: {
        type: Sequelize.STRING
    }
});


/*Contact.sync({force: true}).then(function () {
    return Contact.create({
        firstName: 'Jui',
        lastName: 'Awate',
        phone: '123456'
    });
});*/

module.exports = Contact;
