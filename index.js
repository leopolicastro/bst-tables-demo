const express = require("express");
const app = express();
require("dotenv").config();
const userRoutes = require("./routes/users");
const postRoutes = require("./routes/posts");
const PORT = process.env.PORT || 5050;

app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
