const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const { mongoUri } = require('./config');

(async () => {
  if (!mongoUri) return console.warn('MONGODB_URI not set; cannot seed admin');
  await mongoose.connect(mongoUri);
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  if (!email || !password) return console.warn('ADMIN_EMAIL or ADMIN_PASSWORD not set; skipping admin seed');

  const existing = await User.findOne({ email });
  if (existing) return console.log('Admin already exists');

  const hash = await bcrypt.hash(password, 10);
  const user = new User({ email, passwordHash: hash, role: 'admin' });
  await user.save();
  console.log('Admin user created');
  process.exit(0);
})();
