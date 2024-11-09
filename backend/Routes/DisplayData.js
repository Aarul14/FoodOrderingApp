const express = require('express');
const router = express.Router();
// const mongoDB = require('../db'); 
// mongoDB();
router.post('/foodData', (req, res) => {
    try {
        if (global.food_item && global.foodCategory) {
            res.send([global.food_item, global.foodCategory]);
            console.log("->",global.food_item)
        } else {
            res.status(500).send("Data not yet available or server error.");
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;
