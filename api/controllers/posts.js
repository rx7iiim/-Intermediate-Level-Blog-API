const Post = require('../models/post');
const User = require('../models/user');
const Comment = require('../models/comment');


exports.createPost = async (req, res) => {
  try {
    const { title, content, category, authorId } = req.body;
    const post = await Post.create({ title, content, category, author: authorId });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({ include: User });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, category } = req.body;
    const updated = await Post.update({ title, content, category }, { where: { id } });
    updated ? res.status(200).json({ message: 'Post updated' }) : res.status(404).json({ message: 'Post not found' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Post.destroy({ where: { id } });
    deleted ? res.status(200).json({ message: 'Post deleted' }) : res.status(404).json({ message: 'Post not found' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
