 const express = require('express');
 const app = express();

 app.listen(3000, () => {
    console.log("server is running on port 3000");
 }); 

 app.get('/', (req,res) =>{
    res.send("hello from node API");
 })

 //console.log("Prasanna");