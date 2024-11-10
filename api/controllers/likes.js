// Like a post
exports.likePost = async (req, res) => {
    try {
      const { id: postId } = req.params;
      const post = await Post.findByPk(postId);
      if (!post) return res.status(404).json({ message: 'Post not found' });
  
      const likes = post.likes || [];
      if (!likes.includes(req.body.userId)) {
        likes.push(req.body.userId);
        await post.update({ likes });
        res.status(200).json({ message: 'Post liked' });
      } else {
        res.status(400).json({ message: 'User already liked this post' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Unlike a post
  exports.unlikePost = async (req, res) => {
    try {
      const { id: postId } = req.params;
      const post = await Post.findByPk(postId);
      if (!post) return res.status(404).json({ message: 'Post not found' });
  
      const likes = post.likes || [];
      const userIndex = likes.indexOf(req.body.userId);
      if (userIndex !== -1) {
        likes.splice(userIndex, 1);
        await post.update({ likes });
        res.status(200).json({ message: 'Post unliked' });
      } else {
        res.status(400).json({ message: 'User has not liked this post' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  