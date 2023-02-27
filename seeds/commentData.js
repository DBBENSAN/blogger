const { Comment } = require("../models");

const commentData = [
  {
    comment: "This is a great post!",
    post_id: 1,
    user_id: 1
  },
  {
    comment: "I have a question about this topic...",
    post_id: 1,
    user_id: 2
  },
  {
    comment: "Thanks for sharing!",
    post_id: 2,
    user_id: 3
  },
  {
    comment: "I disagree with some of the points made in this post.",
    post_id: 3,
    user_id: 2
  }
];

const seedComments = () => Comment.bulkCreate(commentData, { individualHooks: true});

module.exports = seedComments;