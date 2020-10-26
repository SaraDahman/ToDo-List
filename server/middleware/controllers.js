const UserSchema = require('../DB/models');
const bcrypt = require('bcrypt');


// Signing up new users
exports.signup = async (req, res) =>{

    let { userName , password } = req.body

    try {

        // check if the username exists
        let finduser = await UserSchema.findOne({userName})

        if(finduser){
            res.send({message : 'username is used'})
        } else {

            // if the username doesn't exist
            // hash the password
            let hashedPassword = await bcrypt.hash(password, 10)

            // create a document of the new user
            let user = new UserSchema({
                userName,
                password : hashedPassword
            })
        
            // save the new user
            user.save()
            .then(() => {
                res.send({message : 'Welcome' , name : user.userName})
            })
            .catch((err) => console.log(err , 'error in sign up'))
        }
    } catch (error) {
        console.log(error);
    }
}

exports.signin = async (req, res) =>{
    let {userName , password} = req.body;

    try {
        let user = await UserSchema.findOne({userName})
        
        if(user){

            var result = await bcrypt.compare(password, user.password)

                if(result){
                    res.send({message : 'Welcome again' , name : user.userName})
                } else {
                    res.send({message : 'incorrect password'})
                }

            } else {
            res.send({message : 'username doesn\'t exist'})
        }
    } catch (error) {
        
    }
}


exports.addTask = async (req, res) =>{
    let { userName } = req.params;
    let { task } = req.body
    let user = await UserSchema.findOne({userName})

    if(user){
        
        user.tasks.push(task)
        user.save()
        .then(() => { res.send('task added') })
        .catch((error) => { console.log(error) })
    }
}

// exports.removeTask = async (req , res) => {
//     let { userName } = req.params;
//     let { task } = req.body;

//     let user = await UserSchema.findOne({userName})

//     if(user){
//         taskArray = user.tasks;
//         for(var i = 0 ; i < taskArray.length ; i++){
//             if( task === taskArray[i] ){
//                 taskArray.splice(i , 1)
//                 user.save()
//                 .then(() => {res.send('task removed')})
//                 .catch((err) => { console.log(err) })
//             }
//         }
//     }
// }

exports.removeTask = async (req , res) => {
    let { userName } = req.params;
    let { index } = req.body;
    index = Number(index)
    let user = await UserSchema.findOne({userName})

    if(user){
        taskArray = user.tasks;
        taskArray.splice(index , 1)
        user.save()
        .then(() => {res.send('task removed')})
        .catch((err) => { console.log(err) })
    }
}

exports.allTasks = async (req , res) => {
    let { userName } = req.params

    let user = await UserSchema.findOne({userName})

    if(user){
        res.send(user.tasks)
    }
}

