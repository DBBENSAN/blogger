const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comments');

Post.belongsTo(User, {
   foreignKey: 'user_id',
   as: 'author',
   onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
   foreignKey: 'post_id',
   as: 'post',
   // onDelete: 'CASCADE',
});

Comment.belongsTo(Post, {
   // foreignKey: 'post_id',
   // as: 'post',
   // onDelete: 'CASCADE',
});

Post.hasMany(Comment, {
   foreignKey: 'post_id',
   as: 'comments',
   // onDelete: 'CASCADE',
 });

 module.exports = { Post, Comment, User };


