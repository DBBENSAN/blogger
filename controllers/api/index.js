const router = require('express').Router();

const postRoutes = require('./post-routes');
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentsRoutes');
const dashboardRoutes = require('./dashboardRoutes');


router.use('/posts', postRoutes);
router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/dashboard', dashboardRoutes);


module.exports = router;
