const Post = require('../../../../models/Post');
const mongodb = require('mongodb');

const createPost = (text, email, res) => {
    const newPost = new Post({
        text,
        email
    });
    newPost.save().then(() => {
        res.status(201).send();
    });
};

const findPost = (email, res) => {
    Post.find({email}, (err, posts) => {
        res.send(posts);
    });
};

const findPostBetweenDatesandKeyword = (fromDate, toDate, keyword, email, res) => {
    let regex = new RegExp(`${keyword}`, "i")

    if (fromDate.toString() === 'Invalid Date' && toDate.toString() === 'Invalid Date') {
        Post.find(
            {
                email,
                text: {$regex: regex},
            }, (err, posts) => {
                res.send(posts);
            });
    } else if (fromDate.toString() === 'Invalid Date' && toDate.toString() !== 'Invalid Date') {
        Post.find(
            {
                email,
                text: {$regex: regex},
                createdAt: {$lte: toDate}
            }, (err, posts) => {
                res.send(posts);
            });
    } else if (fromDate.toString() !== 'Invalid Date' && toDate.toString() === 'Invalid Date') {
        Post.find(
            {
                email,
                text: {$regex: regex},
                createdAt: {$gte: fromDate}
            }, (err, posts) => {
                res.send(posts);
            });
    } else {
        Post.find(
            {
                email,
                text: {$regex: regex},
                createdAt: {$gte: fromDate, $lte: toDate}
            }, (err, posts) => {
                res.send(posts);
            });
    }

};

const editPost = (id, email, text, res) => {
    Post.findOneAndUpdate({_id: id, email: email}, {text: text, editedAt: new Date()}, (err, updatedPost) => {
        if (err) console.log(err);
        res.send(updatedPost);
    });
};

const deletePost = (email, id, res) => {
    Post.deleteOne({_id: new mongodb.ObjectID(id), email: email}).then(() => {// in mongo id is a special type of ObjectID
            res.status(200).send();
        }
    );
};

module.exports.createPost = createPost;
module.exports.deletePost = deletePost;
module.exports.findPost = findPost;
module.exports.findPostBetweenDatesandKeyword = findPostBetweenDatesandKeyword;
module.exports.editPost = editPost;
