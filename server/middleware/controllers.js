const UserSchema = require('../DB/models');
const bcrypt = require('bcrypt');


// Signing up new users
exports.signup = async (req, res) =>{

    let { userName , password } = req.body

    try {

        // check if the username exists
        let finduser = await UserSchema.findOne({userName})

        if(finduser){
            res.send('user name is used')
        } else {

            // if the username doesn't exist
            // hash the password
            let hashedPassword = await bcrypt.hash(password, 10)
            console.log(hashedPassword);

            // create a document of the new user
            let user = new UserSchema({
                userName,
                password : hashedPassword
            })
        
            // save the new user
            user.save()
            .then(() => {
                res.send('Welcome')
            })
            .catch((err) => console.log(err))
        }
    } catch (error) {
        console.log(error);
    }
}

exports.signin = async (req, res) =>{
    let {userName , password} = req.body;
}