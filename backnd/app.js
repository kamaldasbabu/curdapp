const bodyParser = require('body-parser');
const express = require('express');
var cors = require('cors');
const Post = require('./models/postSchema.js');
const mongoose= require('mongoose');
url = 'mongodb+srv://kb:etg9wzGKwf8Rc1XG@cluster0.fkl2b.mongodb.net/angular?retryWrites=true&w=majority'
mongoose.connect(url, {userNewUrlParser: true}).then(()=> {
    console.log("connected to db");
}).catch(()=> {
    console.log("failed db");
})
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use((req, res, next)=> {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept",
//         "HttpHeaders"

//     );
//     res.setHeader("Access-Control-Allow-Methods",
//     "GET","POST", "PUT", "DELETE", "PATCH", "UPDATE"
//     );
//     next();
// });
app.use(cors());
app.get("/api/readposts", (req, res, next)=>{

    Post.find().then(documents => {
        
    res.status(200).json({
        message: 'Successfully',
        posts: documents
    });
 });
});
app.post("/api/createpost", (req, res, next) => {
    const newPost = new Post({
        title: req.body.title,
        content: req.body.content
    });
    newPost.save();
    console.log("server"+newPost);
    res.status(201).json({
        message: 'Post Success'
    });
});
app.delete("/api/deletepost/:id", (req, res, next)=> {
    Post.deleteOne(req.param.id)
    .then(()=> {
       res.status(200).send("DELETED"); 
    }).catch((err)=> {
        res.status(500).send(err);
    });
});



module.exports = app;