var tasksList = [];

function btClick() {
    showTasks();
}
function showTasks() {
    const listaUL = document.querySelector("#listaToDo");
    let task = document.querySelector("#taskTxt");
    
    tasksList.push(task.value);
    let taskStr = "";
    tasksList.forEach(element => {
        taskStr += "<input type='checkbox'>" + element + "<br/>";
    }); 
    task.value = "";
    listaUL.innerHTML = taskStr + "<br/>";
};
