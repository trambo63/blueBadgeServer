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

router.post('/', validateSession, async (req, res) => {
    const{
        reviewTitle,
        reviewersPost
    } = req.body;

    try {
        const Review = await ReviewModel.create({
            reviewTitle,
            reviewersPost
        });
        res.status(200).json({
            message: 'Review successfully created', Review,
        });
    }catch (err) {
        res.status(500).json({
            message: `Failed to create review ${err}`,

        });
    }
});

router.put('/:id', async (req, res) => {
    const {
        reviewTitle,
        reviewersPost
    } = req.body;
    try {
        const reviewUpdated = ReviewModel.update({reviewTitle, reviewersPost},
            {where: { id: req.params.id}});
            res.status(200).json({
                message: 'review successfully updated',
            });

    }catch(err) {
        res.status(500).json({
            message: `Failed to update review: ${err}`,
        })
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