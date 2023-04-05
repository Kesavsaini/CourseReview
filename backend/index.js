const express = require("express")
const mongoose = require('mongoose');
const cors=require('cors')
const courseRoute=require('./routes/CourseRoute');
const app = express()
const port = 3001
app.use(express.json())
app.use(cors);
mongoose.connect('mongodb+srv://reviewkarbyaky:KPREabeYMjkxwRtT@coursereview.l2bm9wv.mongodb.net/?retryWrites=true&w=majority').then(()=>{console.log("Dbconnected")}).catch((err)=>{console.log(err)});
app.use('/api',courseRoute);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
