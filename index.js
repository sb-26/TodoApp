const express = require('express');
const path = require('path');
const db = require('./config/mongoose');
const Task = require('./models/task');

const port = 3000;
const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname));
app.use(express.urlencoded());
app.use(express.static('assets'))

app.get('/',function(req,res){
  Task.find({},function(err,tasks){
    res.render('./views/home',{
      title:'Todo App',
      task:tasks,
    });
  });
});

app.post('/',function(req,res){
  Task.create({
    taskDesc:req.body.taskDesc,
    taskDate:req.body.taskDate,
    taskCat:req.body.taskCat
  },function(err,newTask){
    console.log(newTask.taskCat);
    res.redirect('back');
  });
  
});

app.post('/delete',function(req,res){
    var deleteItems = req.body.checkbox;
    for(var i in deleteItems){
      Task.findByIdAndDelete(i,function(err){
        if(err){
          Task.findByIdAndDelete(deleteItems,function(err){});
        }
      });
    }
  res.redirect('back');
});

app.listen(port,function(){
  console.log('server is running');
});
