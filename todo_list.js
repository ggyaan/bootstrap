const inputBox=document.querySelector('.inputField input');
const addbtn=document.querySelector('.inputField button');
const todolist=document.querySelector('.todolist');
const deleteAllBtn=document.querySelector('.footer button')


inputBox.onkeyup=()=>{
    let userData=inputBox.value; // getting user data entered
    if(userData.trim() != 0){  //if user arent only space
        addbtn.classList.add("active");  //active the add button 
    }else{ 
      add.classList.remove("active");  //removing the add button 
    }
}

 



showTasks();


//if user click on the add button 

addbtn.onclick =() =>{
    let userData=inputBox.value; // getting user data entered
    let getLocalStorage=localStorage.getItem('new todo');
    if(getLocalStorage == null){
        listArr=[];
    }else{
        listArr=JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem('new todo', JSON.stringify(listArr));
    showTasks();
}



function showTasks(){
    let getLocalStorage=localStorage.getItem('new todo');
    if(getLocalStorage == null){
        listArr=[];
    }else{
        listArr=JSON.parse(getLocalStorage);
    }
    const pendingNumb=document.querySelector('.pendingNumb');
    pendingNumb.textContent=listArr.length;
    if(listArr.length > 0){
        deleteAllBtn.classList.add('active');
    }else{
        deleteAllBtn.classList.remove('active');
    }
    let newLiTag='';
    listArr.forEach((element, index) => {
        newLiTag +=` <li> ${element}buy a new lappy<span onclick(${index})="deleteTask()";><i class="fas fa-trash"></i></span></li>`
        
    });
   todolist.innerHTML=newLiTag;
   inputBox.value='';


}



//deleting the tasks


function deleteTask(){
    let getLocalStorage=localStorage.getItem('new todo');
    listArr=JSON.parse(getLocalStorage);
    listArr.splice(index,1);

    localStorage.setItem('new todo', JSON.stringify(listArr));
    showTasks();
}

//deleting all

deleteAllBtn.onclick=() =>{
    listArr=[];
    localStorage.setItem('new todo', JSON.stringify(listArr));
    showTasks();
}