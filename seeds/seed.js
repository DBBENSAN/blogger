const sequelize = require('../config/connection');

const users = require('./userData.json');
const posts = require('./postData.json');
const users = require('./commentData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await users();
  await posts();
  await comments();


  process.exit(0);
};

seedDatabase();