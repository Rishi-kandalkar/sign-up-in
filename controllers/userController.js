const UserModel = require("../models/user")




const signUp = (req, res) => {
  console.log("request::::" , req.body)
  const user = new UserModel({
    first_name: req.body.firstname,
    last_name: req.body.lastname,
    email: req.body.email,
    password: req.body.password
  })
}


const signIn = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try{
    const updatedNetwork = UserModel.signin(email, password);
  } catch(err) {
    console.log("err::", err);
  }
};

exports.signUp = signUp;
exports.signIn = signIn;