const mongoose = require('mongoose')
const { Schema } = mongoose;


const user = new Schema({
    userName : { type : String , unique : true},
    password: { type: String },
    tasks: [{type: String}]
})

const Users = mongoose.model('users', user)

module.exports = Users;

// var test = new Users({
//     userName: 'sara',
//     password:'1234',
//     tasks:['clean the dishes' , 'feed the cats' , 'something else']
// })

// test.save()
// .then(() => console.log('user saved'))
// .catch((err) => console.log(err))