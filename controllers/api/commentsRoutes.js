const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Comment, Post, User } = require('../../models');

router.post('/:postId/comments', withAuth, async (req, res) => {
   try {
      const { postId } = req.params;
      const { comment } = req.body;
      const userId = req.session.user_id;
      const newComment = await Comment.create({
         comment,
         post_id: postId,
         user_id: userId,
      });

      const post = await Post.findOne({
         where: { id: postId },
         include: [
            {
               model: User,
               attributes: ['name'],
            },
            {
               model: Comment,
               include: [
                  {
                     model: User,
                     attributes: ['name'],
                  },
               ],
            },
         ],
      });

      res.render('dashboard', { post });
   } catch (err) {
      res.status(500).json(err);
   }
});

module.exports = router;