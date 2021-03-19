const {DataTypes} = require('sequelize');
const db = require('../db');

const Review = db.define('review', {    // look into fetch rating logic on the from end to log review to movie
    reviewTitle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    reviewersPost: {
        type: DataTypes.STRING(1000),
        allowNull: false
    },
    owner_id : {
        type: DataTypes.INTEGER,
        allownull: false
    },
    movie_id : {
        type: DataTypes.INTEGER,
        allownull: false
    }
})

module.exports = Review;