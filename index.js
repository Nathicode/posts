const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Post = require('./models/post');
const url = 'mongodb+srv://nathi:qwer123@cluster0.16xnlht.mongodb.net/?retryWrites=true&w=majority'
const port = process.env.PORT || 4000;
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    Post.find().sort({ createdAt: -1 })
    .then((result) => {
        res.render('index', { socials: result });
    })
    .catch((err) => {
        console.log(err);
    })
   
});
mongoose.connect(url)
.then((result) => {
    console.log('connected');
    app.listen(port, () => {
        console.log('successfully connected');
    })
})
.catch((err) => {
    console.log(err);
})
app.get('/post', (req, res) => {
    res.render('post');
})
app.post('/post-posts', (req, res) => {
    const post = new Post(req.body);
    post.save()
    
    .then((result) => {
        console.log(result);
    res.redirect('/')
        
    })
    .catch((err) => {
        console.log(err);
    })
});
app.get('/posts/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    Post.findById(id)
   .then((result) => {
        res.render('single', { social: result })
    })
    .catch((err) => {
        console.log(err);
    })
})
