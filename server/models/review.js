const {DataTypes} = require('sequelize');
const db = require('../db');

const Review = db.define('review', {    // look into fetch rating logic on the from end to log review to movie
    reviewTitle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    reviewersPost: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

module.exports = Review;