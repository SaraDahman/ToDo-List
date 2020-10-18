const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
var routes = require('./middleware/router')
const mongoose = require('mongoose')
var bodyParser = require('body-parser')




app.use(bodyParser.urlencoded({ extended: false }));           
app.use(bodyParser.json())

mongoose.connect('mongodb+srv://Sara:screw.the.world@cluster0.otpuf.mongodb.net/ToDo-list?retryWrites=true&w=majority', 
{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('DB connected'))
.catch((err) =>{ console.log(err)})


app.use('/' , routes)



if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
