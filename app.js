'use strict'
const express = require('')

var app = express()
const port = process.env.PORT || 8080;

var bodyParser = require('body-parser');


//Express middleware
app.use(bodyParser.json()); // for parsing application/json

//Express routing
app.use('/static', express.static(__dirname + '/public'));

app.get('/', function(req, res){
	// res.render('index');
	res.sendFile(__dirname + '/public/index.html');
});

app.get('/api', (req, res) => {
    res.json({ fname:'Steve', lname:'Song'});
})

app.get('/users/:userType/:userId/:messageType', function(req, res){
	var userType = req.params.userType;
	var userId = parseInt(req.params.userId);
	var messageType = req.params.messageType;

    res.status(200);
	var path = req.path;
	res.locals.path = path;
	res.json( { devInfo: { 
		user_type: userType, 
		user_id: userId,
		message_type: messageType,
		url: req.originalUrl
	}});
});


app.get('/users/:userType/:userId/:messageType', function(req, res){
	var userType = req.params.userType;
	var userId = parseInt(req.params.userId);
	var messageType = req.params.messageType;

    res.status(200);
	var path = req.path;
	res.locals.path = path;
	res.json( { devInfo: { 
		user_type: userType, 
		user_id: userId,
		message_type: messageType,
		url: req.originalUrl
	}});
});

app.get('/v1/users/retrieve/', (req, res) => {
    var from;
    if(req.query.hasOwnProperty('from') ){
        from = req.query.from;
    } else {
        from = "no parameter"
    }

    res.json({
        parameter : req.query,
        from : from
    })
})


app.post('/v1/users/add/:userId', (req, res) => {
    res.json({ message: 'success',
        user_id:req.params.userId
    })
})


console.log('server start!')
app.listen(port, ()=>{
    console.log('server is running... port:' + port);
})

