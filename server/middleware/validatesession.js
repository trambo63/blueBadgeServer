const jwt = require('jsonwebtoken');
const {UserModel} = require('../models');

const validateSession = async (req, res, next) => {
    if (req.method == "OPTIONS"){
        return next();
    } else if (req.headers.authorization) {
        const {authorization} = req.headers;
        const payload = authorization ? jwt.varify(authorization, process.env.JWT_SECRET) : undefined;

        if (payload) {
            let foundUser = await UserModel.findOne({
                where: {
                    id: payload.id
                }
            });

            if (foundUser) {
                req.user = founderUser;
                next();
            } else {
                res.status(400).send({
                    message: 'Not Authorized'
                })
            }
        } else {
            res.status(401).send({
                message: 'Not Authorized'
            })
        }
    } else {
        res.status(403).send({
            message: 'Forbidden'
        });
    }
}