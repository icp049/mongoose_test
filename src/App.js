

const http = require("http")

//lets create the server

const server = http.createServer((req,res) => {
  //send response

  res.write("server responding! hello!")
  res.end();
})


//server listen to port 3000

server.listen((3000), () => {
  console.log("Listening at port 3000")
})

//create connection with cloud database

let url = "";

const mongoose = require("mongoose");

mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once ('open', function callback () {
  console.log("database connection success");
});
