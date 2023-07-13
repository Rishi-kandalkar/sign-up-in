const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        unique: true,
      },
    last_name: {
        type: String,
        required: true,
        unique: true,
      },
    email: {
        type: String,
        required: true,
        unique: true,
      },
    password: {
        type: String,
        required: true,
        unique: true,
      }
});

UserSchema.statics.signin = function signin(email, password) {
    return this.findOne({
        email: email,
        password: password,
    })
    .then((user) => {
        if (!user) {
            return { success: false, message: 'User not found' };
        }
        return { success: true, user: user };
    })
    .catch((error) => {
        console.error(error);
        return { success: false, message: 'An error occurred' }
    })
};

const UserModel = mongoose.model("User", UserSchema);


exports.UserSchema = UserSchema
exports.UserModel = UserModel