const express = require('express');
const mongodb = require('mongodb');
const JwtOperations = require('../../config/JwtOperations');

const router = express.Router();

// Get Posts
router.get('/', JwtOperations.getToken, async (req, res) => {
    JwtOperations.verifyToken(req, res);
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});

// Add Posts
router.post('/', JwtOperations.getToken, async (req, res) => {
    JwtOperations.verifyToken(req, res);
    const posts = await loadPostsCollection();
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
});
// Delete Posts
router.delete('/:id', JwtOperations.getToken, async (req, res) => {
    JwtOperations.verifyToken(req, res);
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});// in mongo id is a special type of ObjectID
    res.status(200).send();
});

async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb://sa:asd123@ds255754.mlab.com:55754/posts');
    return client.db('posts').collection('posts')
}


module.exports = router;


