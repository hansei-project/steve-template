'use strict'
const express = require('express')

var app = express()
const port = process.env.PORT || 8080;


app.use('/static', express.static(__dirname + '/public'));


app.get('/', function(req, res){
	// res.render('index');
	res.sendFile(__dirname + '/public/index.html');
});

app.get('/api', (req, res) => {
    res.json({ fname:'Steve', lname:'Song'});
})


console.log('server start!')
app.listen(port, ()=>{
    console.log('server is running... port:' + port);
})

