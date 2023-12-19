const express = require('express');
const bodyParser = require('body-parser');
let currId=1;

const app = express();

app.use(bodyParser.json());
app.use(express.json());

let toDoItem=[];
app.get('/todos', function (req, res){
    res.status(200).json({
      todoList : toDoItem
    });
});
app.get('/todos/:id', function (req, res){
  let idNo = req.params.id;
  var didF =0 ;
  for(var i = 0 ; i < toDoItem.length; i++){
  if(toDoItem[i].id == idNo){
    didF=1;
  }
  };
  if(didF == 1){
    res.status(200).json({
      
     todoList :  toDoItem.filter(function(val){
        if(val.id == idNo){
          return true;
        }
          return false;
    })
  });
  }
  else{
      res.status(400).json({
        msg: "Id not found!"
      })    
  }


});
app.post('/todos', function (req, res){
  
  var item = {
    title : req.body.title,
    Description :req.body.desc,
    id : currId,
      completed : false
  };
  currId++;
  toDoItem.push(item);
  res.status(201).json({
    message: "Item added successfully",
    id:item.id
  });

  
});
app.put('/todos/:id', function (req, res){
  var idNo = req.params.id;
  var title = req.body.title;
  var completed = req.body.completed;
  var didWrk=0;
  for(var i = 0 ; i < toDoItem.length; i++){
    if(toDoItem[i].id == idNo){
      toDoItem[i].title = title;
      toDoItem[i].completed = completed;
      didWrk=1;
      break;
    }
  }
  if(didWrk==1){
    res.status(200).json({
      msg:"Item found and updated!"
    })
  }
  else{
    res.status(404).json({
      msg:"Id not found!"
    })
  }
});
app.delete('/todos/:id', function (req, res){
  const idNo = req.params.id;
  var didWrk=0;
  for(var i = 0 ; i < toDoItem.length; i++){
   if(toDoItem[i].id == idNo){
      toDoItem.splice(i,1);
      res.status(200).json({
        msg:"Item deleted successfully!"
      })
      didWrk=1;
      break;
   } 
  }
  if(didWrk==1){
  res.status(200).json({
    msg:"Item deleted succesfully"
  }); 
  }
  else{
    res.status(404).json("Couldnt found item");
  }
  
});
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Ohh you are lost, read the API documentation to find your way back home :)'
    })
})

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

module.exports = app;