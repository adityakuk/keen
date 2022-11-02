const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const PORT = 8000;
const db = require("./db");
const router = require('./routes')



//database connection

// db.connect();

//middle ware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

//cors
app.use((req, res, next) => {
  req.header("Access-Control-Allow-Origin", "*");
  req.header("Access-Control-Allow-Headers", "*");
  next();
});


//routes

app.use("/api", router);

app.use("/uploads", express.static(path.join(__dirname, "/../uploads")));
app.use(express.static(path.join(__dirname, "/../frontend/build")));

app.get("*", (req, res) => {
  try {
    res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
  } catch (e) {
    res.send("Oops! unexpected error");
  }
});

app.use(cors());

//server listening
app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening on port no ${PORT}`);
});

//////////////////////////////////////////////

// const express = require('express')
// const connectToMongo = require('./db').connect;
// const cors = require('cors')
// const path = require('path')
// const app = express()
// const bodyParser = require('body-parser') 
// const PORT = 8000; 

// // app.use()
 
// connectToMongo();

// //middle ware
// app.use(bodyParser.json({limit: '50mb' }))
// app.use(bodyParser.urlencoded({ extended: true, limit: "50mb"}))

// //cors
// app.use((req, res, next) => {
//     // console.log(req)
//     req.header("Access-Control-Allow-Origin", "*")
//     req.header("Access-Control-Allow-Header", "*");
//     next()
// })
// // app.use(
// //     cors({
// //       origin: "http://localhost:3000",
// //       optionsSuccessStatus: 200,
// //       credentials: true,
// //     })
// //   );

// //routes

// app.use('/uploads', express.static(path.join(__dirname, "/../uploads")))
// app.use('/uploads', express.static(path.join(__dirname, "/../frontend/build")))
 
// // connected to backend and frontend
// app.get("*", (req, res)=>{ 
//     try{
//         res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`))
//     }
//     catch (e){
//         res.send("Oops! unexpected error")
//     }
// })

// app.use(cors())

// //server listening
// app.listen(process.env.PORT || 8000, () => {
//     console.log(`Listeing on port number ${PORT}`)
// })
