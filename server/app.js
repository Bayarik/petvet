require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const FileStore = require('session-file-store')(session);

const authRouter = require('./src/routes/auth.router');

const app = express();
const PORT = process.env.PORT || 3010;

const sessionConfig = {
  name: 'user_sid',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: null,
    httpOnly: true,
  },
};

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));

app.use('/auth', authRouter);

app.listen(PORT, () => {
  console.log(`server started PORT: http://localhost:${PORT}`);
});
