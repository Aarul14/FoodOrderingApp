const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://Aarul1:Aarul1@cluster0.l8zuhzc.mongodb.net/foodfleetmern'
// const mongoDB = async () => {

//     await mongoose.connect(mongoURI,

//     ).then(() => console.log('Connected Sucessfully')

//     )
//         .catch((err) => { console.log(err); });

// }

const mongoDB = async () => {

    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {

        if (err) console.log("---", err)
        else {

            console.log("connected");
            const fetched_data = await mongoose.connection.db.collection("fooditems");
            fetched_data.find({}).toArray(async function (err, data) {
                const foodCategory = await mongoose.connection.db.collection("foodcategory");
                foodCategory.find({}).toArray(function (err, catData) {
                    if (err) console.log(err);
                    else {
                        global.food_item = data;
                        global.foodCategory = catData;
                    }
                })

            })
        }
    });


}

module.exports = mongoDB;