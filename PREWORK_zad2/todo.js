let tasksList = [];

function btClick() {
  getTasksLS();
  addTask();
  showTasks();
}

function getTasksLS() {
  tasksList = JSON.parse(localStorage.getItem("tasksList")) ?? [];
}

function addTask() {
  let task = document.querySelector("#taskTxt");
  tasksList.push({ val: task.value, isDone: false, guid: createGuid() });
  task.value = "";
  localStorage.setItem("tasksList", JSON.stringify(tasksList));
}

function showTasks() {
  const listaUL = document.querySelector("#listaToDo");
  let taskStr = "";

  tasksList.forEach((el) => {
    taskStr += `<div id='${el.guid}'><input type='checkbox' onclick='chckClick(this)' ${
      el.isDone ? "checked" : ""
    }> 
    <span ${el.isDone ? "class='done'" : "class='noTdone'"}> ${el.val}</span></div><br/>`;
  });

  listaUL.innerHTML = taskStr + "<br/>";
}
// zrobić usuwanie i modyfikację w localStorage
function chckClick(el) {
  let element = el.parentElement;
  let ele = element.querySelector("span");
  console.log(el.parentElement);
  console.log(element.id);
  if (ele.classList.contains("done")) {
    ele.classList.remove("done");
    ele.classList.add("noTdone");
  } else {
    ele.classList.remove("noTdone");
    ele.classList.add("done");
  }
}

function createGuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    let r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function init() {
  getTasksLS();
  showTasks();
}
window.addEventListener("load", init, false);
