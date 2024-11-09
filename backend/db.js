const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGO_URI;  
const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("DB connected");

        const foodData = await mongoose.connection.db.collection("fooditems").find({}).toArray();
        const foodCategoryData = await mongoose.connection.db.collection("foodcategory").find({}).toArray();
        //DEBUGGING
        // console.log("Fetched Food Items:", foodData);
        // console.log("Fetched Food Categories:", foodCategoryData);
        global.food_item = foodData;
        global.foodCategory = foodCategoryData;

    } catch (error) {
        console.log("Error:", error);
    }
};

module.exports = mongoDB;
