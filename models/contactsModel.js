
var Sequelize = require('sequelize');

var sequelize = new Sequelize('test', 'dev', 'juiAwate', {
    host: 'localhost',
    dialect: 'mysql'
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
