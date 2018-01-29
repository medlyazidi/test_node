var express = require('express');  
var app = express();  
var server = require('http').createServer(app); 

app.set('view engine', 'ejs');

app.get("/shoping", function (req, res) {
	console.log("Hello word");
});


app.get('/', function(req, res){ 
	// 
 	res.render('index',{title:"homepage",users : [
            { name: 'John' },
            { name: 'Mike' },
            { name: 'Samantha' }
  ]});
});


server.listen(3000,function(){
	console.log("Server connect port : 3000");
}); 
