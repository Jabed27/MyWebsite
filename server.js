//The path module provides a lot of very useful functionality to access and interact with the file system
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')
const body = require('body-parser')

// express application will be created
const app = express()
//this 'express.json()' is used for parsing the json data from request 
app.use(express.json())
app.use(morgan("dev"))//devloment mode e  dekhabe
app.use(cors())
app.use('/static', express.static('view'))
const contactRoute = require('./api/routes/contact')
const userroute = require('./api/routes/authentication')

//const bodyParser = require('body-parser')
//const { json } = require('body-parser')
app.use('/mywebsite/api/contacts',contactRoute)
app.use('/mywebsite/api/auth',userroute)
const PORT = process.env.PORT || 5000
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended:true}));
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname, '/view/index.html'))
})
app.get('/contact', function(req, res) {
    res.sendFile(path.join(__dirname, '/view/contact.html'));
});
app.get('/signin', function(req, res) {
    res.sendFile(path.join(__dirname, '/view/login.html'));
});
app.get('/signup', function(req, res) {
    res.sendFile(path.join(__dirname, '/view/register.html'));
});
