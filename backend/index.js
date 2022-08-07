const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;
app.use(express.json());
app.use(cors());
app.use("/admin", require("./routes/northinoTV"));
app.use("/admin", require("./routes/adminLogin"));
app.listen(port);
