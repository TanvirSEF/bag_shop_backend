const cookieParser = require("cookie-parser");
const express = require("express");
const port = 3000;
const app = express();
const db = require("./config/mongoose-connection");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
app.set("view engine", "ejs");

app.use("/owners", require("./routes/owner-routes"));
app.use("/users", require("./routes/user-routes"));
app.use("/products", require("./routes/product-routes"));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
