const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        index: true
    },
    email: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    editedAt: {
        type: Date,
    }
});

PostSchema.index({
    'text': 'text',
});

const Post = mongoose.model( 'Post', PostSchema);
module.exports = Post;
