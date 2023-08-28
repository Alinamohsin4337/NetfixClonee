const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const userRoutes=require('./routes/userRoutes.js')
const app=express();
app.use(cors());
app.use(express.json());
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}) .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });
  app.use('/api/user',userRoutes)
app.listen(5000,console.log('server started'));