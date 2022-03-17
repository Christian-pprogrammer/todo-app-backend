const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({path: './.env'});
const dbConnect = require('./db');
dbConnect();
const express = require('express');
const userRouter = require('./routes/userRoutes');
const authRouter = require('./routes/authRoutes');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/users', userRouter);
app.use('/auth', authRouter);
const port = process.env.PORT || 7000;
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})