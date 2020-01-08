const express = require("express");
const router = express.Router();

const db = require("../data/db-config.js");

router.get("/:Type",  (req, res) => {
    const { Type } = req.params;
    console.log("req params", req.params)
    
  
    db("posts")
      .returning("Type")
      .where({Type})
       //.where({ id, user_id: req.decodedToken.subject })
      
      .then(post => {
        if (post) {
          res.status(200).json(post);
        } else {
          res
            .status(404)
            .json({ error: "You cannot access the post with this specific id." });
        }
      })
      .catch(error => {
        res.status(500).json({
          error: "The action with the specified ID could not be retrieved"
        });
      });
  });

module.exports = router;