const mongoose = require("mongoose");
const MONGO_URL =
  "mongodb://prafullasmailid:praful123@cluster0-shard-00-00.3ll4p.mongodb.net:27017,cluster0-shard-00-01.3ll4p.mongodb.net:27017,cluster0-shard-00-02.3ll4p.mongodb.net:27017/FoodAgain?ssl=true&replicaSet=atlas-hl5eiu-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";
const mongoDB = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected");

    const fetched_data = await mongoose.connection.db.collection("food_items");
    const data = await fetched_data.find({}).toArray();
    const foodCategory = await mongoose.connection.db.collection(
      "foodCategory"
    );
    const catData = await foodCategory.find({}).toArray();
    global.food_items = data;
    global.foodCategory = catData;
  } catch (err) {
    console.error("--", err);
  }
};

module.exports = mongoDB;
