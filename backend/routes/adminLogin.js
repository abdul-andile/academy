const express = require("express");
const prisma = require("../db");
const router = express.Router();
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!(username && password)) {
      return res.status(400).json({ message: "Input Required!" });
    }
    const user = await prisma.admin.findFirst({
      where: {
        username: {
          contains: username,
        },
      },
    });

    //compare database username/password with the input
    if (user.username === username && user.password === password) {
      //return user
      return res.status(200).json({ message: "Login succesffuly" });
    }
    return res.status(401).json(user);
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = router;
