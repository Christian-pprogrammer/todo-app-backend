const bcrypt = require('bcrypt');
const _ = require('lodash');
const { User } = require('../models/userModel');
exports.createAuth = async (req,res) => {
    try {
        const user = _.pick(req.body, ['username', 'password']);
        const validUser = await User.findOne({username: user.username});
        if(!validUser) return res.status(400).json({
            success: false,
            message: 'incorrect username or password'
        });
        const validPassword = await bcrypt.compare(req.body.password, validUser.password);
        if(!validPassword) return res.status(400).json({
            success: false,
            message: 'incorrect username or password'
        });
        res.status(200).json({
            success: true,
            token: validUser.generateAuthToken()
        })
    }catch(err) {
        res.status(200).json({
            success: false,
            message: err.message
        })
    }
}