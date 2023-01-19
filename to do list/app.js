let btnElement = document.getElementById('btn')
let inputElement = document.getElementById('input');
let taskContainer = document.querySelector('.task-container')
let clearBtnElement = document.querySelector('.clear')

btnElement.addEventListener('click', onClick);

function onClick(){

   let task = inputElement.value
   if(task.length > 0){
   let divTask = document.createElement('div')
   divTask.classList.add('div-task')
   let li = document.createElement('li');
   li.classList.add('li-item');
   li.textContent=task
   let trash = document.createElement('i');
   trash.classList.add('icon')
   trash.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
   divTask.append(li);
   divTask.append(trash)
   taskContainer.append(divTask)
   inputElement.value = ''

   trash.addEventListener('click', deleting);
   li.addEventListener('click', done);
   clearBtnElement.addEventListener('click', deleteAll)

   function deleting(e){
    let item = e.target;
    let toRemove = item.parentElement;
    toRemove.parentElement.remove()
   }

   function done(e){
    let item = e.target;
    if(item.style.textDecoration == 'line-through'){
        item.style.textDecoration = 'none'
    }else{
        item.style.textDecoration = 'line-through'
    }
    
   }

   function deleteAll(){
    let elements = document.getElementsByClassName('div-task')
    for (el of elements){
        el.remove()
    }
   }
}

}


