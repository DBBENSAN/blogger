const router = require('express').Router();

const postRoutes = require('./post-routes');
const userRoutes = require('./user-routes');
const commentRoutes = require('./comments-routes');
const dashboardRoutes = require('./dashboard-routes');
const loginRoutes = require('./login-routes');

router.use('/posts', postRoutes);
router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/login', loginRoutes);

module.exports = router;
