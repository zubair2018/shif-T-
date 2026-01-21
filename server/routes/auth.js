const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const User = require("../models/User");
const { jwtSecret } = require("../config");

const router = express.Router();

const registerSchema = Joi.object({ email: Joi.string().email().required(), password: Joi.string().min(6).required(), name: Joi.string().allow("") });

// register (for simplicity, allow creating admin via env or DB seed later)
router.post("/register", async (req, res, next) => {
  try {
    const { error, value } = registerSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.message });

    const exists = await User.findOne({ email: value.email });
    if (exists) return res.status(400).json({ error: "User already exists" });

    const hash = await bcrypt.hash(value.password, 10);
    const user = new User({ email: value.email, passwordHash: hash, name: value.name });
    await user.save();
    res.status(201).json({ success: true });
  } catch (err) {
    next(err);
  }
});

const loginSchema = Joi.object({ email: Joi.string().email().required(), password: Joi.string().required() });

router.post("/login", async (req, res, next) => {
  try {
    const { error, value } = loginSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.message });

    const user = await User.findOne({ email: value.email });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    const ok = await bcrypt.compare(value.password, user.passwordHash);
    if (!ok) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user._id, email: user.email, role: user.role }, jwtSecret, { expiresIn: "7d" });
    res.json({ token });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
