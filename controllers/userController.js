const { User } = require('../models/userModel');
exports.createUser = async (req,res) => {
    try {
        const newPassword = await bcrypt.hash(req.body.password, 10);
        const user = _.pick(req.body, ['fullName', 'username', 'password']);
        user.password = newPassword;
        const created = await User.create(user);
        res.status(200).json({
            success: true,
            token: created.generateAuthToken()
        })
    }catch(err) {
        res.status(400).json({
            success: false,
            message: err.message
        })
    }
}
