const toDoForm = document.querySelector('.js-toDoForm'),
  toDoInput = toDoForm.querySelector('input'),
  toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';
let toDos = [];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(todo){
        return todo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement('li');
    const inputList = document.createElement('input');
    const newId = toDos.length+1;
    li.id = newId;
    inputList.id = `checkbox-${newId}`;
    inputList.type = 'checkbox';
    const labelList = document.createElement('label');
    labelList.htmlFor = `checkbox-${newId}`;
    labelList.innerHTML = text;
    const delBtn = document.createElement("button");
    delBtn.innerText = "␡";
    delBtn.addEventListener("click",deleteToDo);
    const hr = document.createElement("hr");
    li.appendChild(inputList);
    li.appendChild(labelList);
    li.appendChild(delBtn);
    li.appendChild(hr);
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentvalue = toDoInput.value;
    paintToDo(currentvalue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}
init();