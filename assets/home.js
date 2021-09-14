const checkBox = document.getElementsByClassName("check-box");
const taskDesc = document.getElementsByClassName("task-desc");
const catInfo = document.getElementsByClassName("cat-info");
const catInfoDiv = document.getElementsByClassName("cat-info-div");
for(let i=0;i<checkBox.length;i++){
  checkBox[i].addEventListener('click',function(){
    if(checkBox[i].checked){
      taskDesc[i].style.textDecoration="line-through";
    }else{
      taskDesc[i].style.textDecoration="none";
    }
  });
}

