const router = require('express').Router();

//register 
router.post("/register", async (req, res) => {
    const { firstName,
        lastName,
        email,
        password
    } = req.body;

    try {
        const newUser = await UserModel.create(
            {firstName, 
                lastName,
                email,
                password: bcrypt.hashSync(password, 10),
             });
    }catch {}

    res.status (201).json ({
        message: "User registered!"

    })
 })

module.exports = router;