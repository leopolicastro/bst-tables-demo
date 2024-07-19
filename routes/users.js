const knex = require("knex")(require("../knexfile"));
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const users = await knex("users");
    res.json(users);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await knex("users").where({ id: req.params.id });
    res.json(user);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/", async (req, res) => {
  try {
    await knex("users").insert(req.body);
    res.json({ message: "User created" });
  } catch (error) {
    res.json({ message: error });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    await knex("users").where({ id: req.params.id }).update(req.body);
    res.json({ message: "User updated" });
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;

// new
// create
// edit
// update
// destroy
