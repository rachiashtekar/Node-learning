// const express = require("express");
// let ejs = require("ejs");
// const app = express();

// app.set("view engine", "ejs");
// const port = 5000;

// const USERS = [
//   {
//     name: "aniket",
//     // username :"aniket",
//     image:
//       "https://media.licdn.com/dms/image/D4D03AQELylHrUfHQ7A/profile-displayphoto-shrink_800_800/0/1689762709906?e=1718236800&v=beta&t=AywKiGY22B--jvj9-Z8OcjEQ-VgKZjoucEYu58rncB0",
//     email: "aniket@gmail.com",
//     hobbies: ["swimming", "dancing", "coding"],
//     ispremium: false,
//   },
//   {
//     name: "rachi",
//     // username : 'rachi',
//     image:
//       "https://media.licdn.com/dms/image/D5603AQGe243wFw-epQ/profile-displayphoto-shrink_800_800/0/1684161000346?e=2147483647&v=beta&t=OYsNvkBQSRRETUQ4O6ZP-WJ-mLmmzt0Dcnw877XBKJE",
//     email: "rachi@gmail.com",
//     hobbies: ["singing", "playing", "dancing", "cooking", "swimming"],
//     ispremium: true,
//   },
//   {
//     name: "rachis",
//     // username : "rachis",
//     image:
//       "https://media.licdn.com/dms/image/D5603AQGe243wFw-epQ/profile-displayphoto-shrink_800_800/0/1684161000346?e=2147483647&v=beta&t=OYsNvkBQSRRETUQ4O6ZP-WJ-mLmmzt0Dcnw877XBKJE",
//     email: "rachis@gmail.com",
//     hobbies: ["singing", "playing", "dancing", "cooking", "swimming"],
//     ispremium: true,
//   },
// ];

// app.get("/", (req, res) => {
//   res.send("Hello Worldddddddddddddddddddd!");
// });

// // when user is not in USER-JSON file the it will redirect on 404 file
// app.get("/404", (req, res) => {
//   res.sendFile(__dirname + "/404.html");
// });

// app.get("/:name", (req, res) => {
//   const { name } = req.params;
//   const userDetails = USERS.find((user) => user.name === name);
//   if (userDetails) {
//     res.render("user", userDetails);
//   } else {
//     res.redirect("/404");
//   }
// });

// app.get("/:cityname", (req, res) => {
//   const { cityname } = req.params;
//   res.send(cityname.toUpperCase());
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

// ------------------------------------------------------------------------------------------------------------------------------

//   app.get('/rachi', (req, res) => {
//     res.render('user',{name:"rachi",
//     image: "https://media.licdn.com/dms/image/D5603AQGe243wFw-epQ/profile-displayphoto-shrink_800_800/0/1684161000346?e=2147483647&v=beta&t=OYsNvkBQSRRETUQ4O6ZP-WJ-mLmmzt0Dcnw877XBKJE",
//     email : "rachi@gmail.com",
//      hobbies : ['singing', 'playing' , 'dancing' , 'cooking' , 'swimming'],
//      ispremium : true

// })
//   })

// app.get('/mumbai', (req, res) => {
//   res.render('example',{cityname:"mumbai"})
// })
// app.get('/banglore', (req, res) => {
//   res.render('example',{cityname:"banglore"})
// })

// app.get('/rachi', (req, res) => {
//     res.sendFile(__dirname + '/user.html')
//   })


// How to connect with moongoose

// const express = require('express')
// const ejs = require('ejs')
// const app = express()
// app.set('view engine', 'ejs')
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('our first node express server : ')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })