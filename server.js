//The path module provides a lot of very useful functionality to access and interact with the file system
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')

// express application will be created
const app = express()
app.use(morgan("dev"))//devloment mode e  dekhabe
app.use(cors())
app.use('/static', express.static('view'))
app.use(express.json())
const PORT = process.env.PORT || 5000
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
