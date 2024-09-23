const express = require("express");
const router = express.Router();

router.post("/foodData", async(req, res) => {
  try {
    console.log(global.food_items);
   await res.send([global.food_items, global.foodCategory]);
  } catch (error) {
    console.error(error.message);
    res.send("Server error");
  }
});

module.exports = router;