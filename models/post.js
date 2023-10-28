const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const post = new Schema({
    name: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
}, { timestamps: true});
const Post = mongoose.model('Post', post);
module.exports = Post;