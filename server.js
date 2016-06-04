var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

app.use(express.static(path));

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/type",function(req,res){
  res.sendFile(path + "type.html");
});


app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

/*app.listen(5000,function(){
  console.log("Live at Port 5000");
});*/

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});