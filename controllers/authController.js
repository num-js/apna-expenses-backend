const UsersModel = require('../models/usersModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/**
 * User SignUp Controller
 * @param {Object} req
 * @param {Object} res
 * @returns Signup - status and message/error
 */
const signupUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(422).json({ error: "email and password required" });
        }

        //Check Email already exists
        const user = await UsersModel.findOne({ email });
        if (user) {
            return res.status(422).json({ error: "email already exists" });
        }

        //Password Hash
        const hashedPassword = await bcrypt.hash(password, 11);

        //Save into DB
        await new UsersModel({
            email,
            password: hashedPassword
        }).save();

        return res.status(201).json({ message: "Signup success, you can login now." });
    } catch (error) {
        res.status(400).json({ error: 'internal server error: ' + error })
    }
}


/**
 * User SignIn Controller
 * @param {Object} req
 * @param {Object} res 
 * @returns Signin - status and message/error
 */
const signinUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(422).json({ error: "email and password required" });
        }

        //Check Email already exists
        const user = await UsersModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "invalid user" });
        }

        //Password checking
        const isCorrectPassword = await bcrypt.compare(password, user.password)
        if (!isCorrectPassword) {
            return res.status(401).json({ error: "invalid Email and Password" });
        }

        //token generate with JWT
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)


        return res.status(200).json({
            token,
            message: "Login success",
        });
    } catch (error) {
        res.status(400).json({ error: 'internal server error: ' + error })
    }
}

module.exports = { signupUser, signinUser };