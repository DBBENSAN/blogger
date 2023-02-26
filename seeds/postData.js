const { Post } = require("../models");

const postData = [
  {
    name: "My First Post",
    description: "This is my first post on this blog.",
    user_id: 1
  },
  {
    name: "A Guide to Gardening",
    description: "Learn how to grow your own vegetables and flowers.",
    user_id: 2
  },
  {
    name: "The Benefits of Meditation",
    description: "Discover the many benefits of a daily meditation practice.",
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;