const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({id: this._id,fullName: this.fullName, username: this.username }, process.env.JWT_PRIVATE_KEY);
    return token;
}

const User = mongoose.model("User", userSchema);
module.exports.User = User;