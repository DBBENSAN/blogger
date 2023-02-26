const sequelize = require('../config/connection');

const seedUsers = require('./userData');
const seedPosts = require('./postData.js');
const seedComments = require('./commentData.js');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  await seedPosts();
  await seedComments();

  console.log('Database seeded!')
  process.exit(0);
};

seedDatabase();