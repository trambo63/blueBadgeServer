const router = require('express').Router();
const { validateSession } = require('../middleware');
const { ReviewModel } = require('../models');

router.get('/put', async (req, res) => {
    const {reviewTitle, reviewersPost} = req.body;
    try{
        const reviewUpdated = ReviewModel.update(
            {reviewTitle, reviewersPost},
            {where: {id: req.params.id}}
        )
        res.status(200).json({
            message: "review updated",
            reviewUpdated
        });
    } catch (err) {
        res.status(500).json({
            message: `update failed ${err}`
        });
    }
});

router.delete('/:id', async (req, res) => {
    try{
        await ReviewModel.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            message: "Review Destroyed"
        })
    } catch (err) {
        res.status(500).json({
            message: `Unable to Destroy Review: ${err}`
        })
    }
});

module.exports = router;