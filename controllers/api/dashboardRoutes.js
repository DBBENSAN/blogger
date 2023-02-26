const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Post, User } = require('../../models');

router.get('/', withAuth, async (req, res) => {
   try {
      const userId = req.session.user_id;
      const posts = await Post.findAll({
         where: { user_id: userId },
         include: [
            {
               model: User,
               attributes: ['name'],
            },
         ],
      });

      res.render('dashboard', { posts });
   } catch (err) {
      res.status(500).json(err);
   }
});

router.get('/new', withAuth, (req, res) => {
   res.render('create-post');
});

router.post('/new', withAuth, async (req, res) => {
   try {
      const { title, contents } = req.body;
      const userId = req.session.user_id;

      const newPost = await Post.create({
         title,
         contents,
         user_id: userId,
      });

      res.redirect(`/dashboard/${newPost.id}`);
   } catch (err) {
      res.status(500).json(err);
   }
});

module.exports = router;