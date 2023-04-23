const express = require("express")
const mongoose = require('mongoose');
const cors=require('cors')
const courseRoute=require('./routes/CourseRoute');
const teacherRoute=require('./routes/TeacherRoute');
const ratingRoute=require('./routes/RatingRoute');
const authRoute=require('./routes/authRoute');
const app = express()
const port = 3001
app.use(express.json())
app.use(cors());
mongoose.connect('mongodb+srv://reviewkarbyaky:KPREabeYMjkxwRtT@coursereview.l2bm9wv.mongodb.net/?retryWrites=true&w=majority').then(()=>{console.log("Dbconnected")}).catch((err)=>{console.log(err)});
app.use('/api/',courseRoute);
app.use('/api/',teacherRoute);
app.use('/api/',ratingRoute);
app.use('/api/',authRoute);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
