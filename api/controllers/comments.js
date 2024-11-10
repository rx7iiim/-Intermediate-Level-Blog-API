
exports.addComment = async (req, res) => {
    try {
      const { content, authorId } = req.body;
      const { id: postId } = req.params;
      const comment = await Comment.create({ content, author: authorId, post: postId });
      res.status(201).json(comment);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
 
  exports.getComments = async (req, res) => {
    try {
      const { id: postId } = req.params;
      const comments = await Comment.findAll({ where: { post: postId }, include: User });
      res.status(200).json(comments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

  exports.deleteComment = async (req, res) => {
    try {
      const { id: postId, commentId } = req.params;
      const deleted = await Comment.destroy({ where: { id: commentId, post: postId } });
      deleted ? res.status(200).json({ message: 'Comment deleted' }) : res.status(404).json({ message: 'Comment not found' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  