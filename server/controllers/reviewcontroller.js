const router = require('express').Router();
const { validateSession } = require('../middleware');
const { ReviewModel } = require('../models');

//get by movie_id
router.get('/:id', async (req, res) => {
    try{
        const movieReviews = await ReviewModel.findAll({
            where: {
                movie_id: req.params.id
            }
        });
        res.status(200).json(movieReviews)
    } catch (err) {
        res.status(500).json({
            message: `Failed to retrive reviews: ${err}`
        })
    }
});

//GET ALL BY USER
router.get('/byUser', validateSession, async (req, res) => {
    try{
        const locateReviews = await ReviewModel.findAll({
            where: {
                owner_id: req.user.id
            }
        });
        res.status(200).json({
            message: 'Reviews Retrived!',
            locateReviews
        })
    } catch (err) {
        res.status(500).json({
            message: `Failed to retrive reviews: ${err}`
        })
    }
});

router.post('/post', validateSession, async (req, res) => {
    const{
        reviewTitle,
        reviewersPost,
        movie_id
    } = req.body;

    try {
        const Review = await ReviewModel.create({
            reviewTitle,
            reviewersPost,
            movie_id,
            owner_id: req.user.id
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

router.put('/:id', validateSession, async (req, res) => {
    const {
        reviewTitle,
        reviewersPost
    } = req.body;
    try {
        const reviewUpdated = ReviewModel.update({reviewTitle, reviewersPost},
            {where: { id: req.params.id}});
            res.status(200).json({
                message: 'review successfully updated',
                reviewUpdated
            });

    }catch(err) {
        res.status(500).json({
            message: `Failed to update review: ${err}`,
        })
    }
});

router.delete('/:id', validateSession, async (req, res) => {
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