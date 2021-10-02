const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  taskDesc:{
    type:String,
    required:true
  },
  taskCat:{
    type:String,
  },
  taskDate:{
    type:Date,
    required:true
  },
  
});

const Task = mongoose.model('task',taskSchema);
module.exports=Task;