// TODO: info date

const dateNumber = document.getElementById ('dateNumber');
const dateText = document.getElementById ('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

// TODO: task container

const taskContainer = document.getElementById('taskContainer');

const setDate = () => {
    const date = new Date();
    
    dateNumber.textContent = date.toLocaleString('es', {day: 'numeric' });
    dateText.textContent = date.toLocaleString('es', {weekday: 'long'});
    dateMonth.textContent = date.toLocaleString('es', {month: 'short'});
    dateYear.textContent = date.toLocaleString('es', {year: 'numeric'});
    //* el 'es' especifica que los datos sean mostrados en español
};

const addNewTask =event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState)
    task.textContent = value;
    taskContainer.prepend(task);
    event.target.reset();
};

const changeTaskState = event => {
    event.target.classList.toggle('done');
};

const order = () => {
    const Done = [];
    const toDo = [];
    taskContainer.childNodes.forEach(el => {
        el.classList.contains('done') ? Done.push(el) : toDo.push(el)
    })
    return [...toDo, ...Done];
}

const renderOrderedTask = () => {
    order().forEach(el => taskContainer.appendChild(el)) 
}

setDate();