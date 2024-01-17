//import json server library
const jsonServer = require("json-server")
const cors = require("cors")

//creating a server
const videoServer = jsonServer.create()

//create a router to connect this file with json file(data.json)
const router = jsonServer.router("data.json")

//create middleware after server creation(json to js data)
const middleware = jsonServer.defaults()

//connect with client(after server creation)
videoServer.use(cors())
videoServer.use(middleware)
videoServer.use(router)

//creating a unique port for running server
const PORT = 4000
//Here we use "listen" method to run the server(here the arrow funtion is check if the server has started running and its optional)
videoServer.listen(PORT,()=>{
    console.log(`Video Server started at port... ${PORT}`);
})  