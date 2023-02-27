const { Post } = require("../models");

const postData = [
  {
    title: "My First Post",
    post_content: "This is my first post on this blog.",
    user_id: 1
  },
  {
    title: "A Guide to Gardening",
    post_content: "Learn how to grow your own vegetables and flowers.",
    user_id: 2
  },
  {
    title: "The Benefits of Meditation",
    post_content: "Discover the many benefits of a daily meditation practice.",
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postData, { individualHooks: true});

module.exports = seedPosts;