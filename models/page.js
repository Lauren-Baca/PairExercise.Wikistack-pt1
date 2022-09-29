const { Sequelize } = require('sequelize');
const { db } = require('./index');

const Page = db.define('page', {
    title: {
        type: Sequelize.STRING,
    },
    slug: {
        type: Sequelize.STRING,
    },
    content: {
        type: Sequelize.TEXT,
    },
    status: {
        type: Sequelize.ENUM('open', 'closed'),
        // defaultValue: true,
    },
})

module.exports = {
    Page,
}

