// const express = require ('express')
// const app = express();
// const port = 5000;

// const customeniddleware = (req,res,next)=>{
//     req.customInfo = 20;
//     console.log("you entered a middleware");
//     next();
// }

                                                               
// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })
//   app.get('/me',customeniddleware, (req, res) => {
//      console.log(req.customInfo)
//     res.sendFile(__dirname+"/index.html")
//   })
// app.listen(port, (err)=>{
//     if(!err){
//         console.log( `server is up and running on ${port} `);
//     }
// })