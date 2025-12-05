require("dotenv").config();
const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");
const User = require("./models/User");

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("✅ Connected to Atlas");

    await User.deleteMany(); // clear old data

    const users = [];

    for (let i = 0; i < 10; i++) {
      users.push({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        age: faker.number.int({ min: 18, max: 55 })
      });
    }

    await User.insertMany(users);

    console.log("🎉 10 USERS SEEDED SUCCESSFULLY");
    process.exit();

  })
  .catch(err => console.error("❌ Seed error:", err));
