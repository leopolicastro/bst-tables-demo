const knex = require("knex")(require("../knexfile"));
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const posts = await knex("posts");
    res.json(posts);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
