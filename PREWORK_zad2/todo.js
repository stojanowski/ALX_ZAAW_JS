function btClick() {
    let listaUL = document.getElementById("listaToDo");
    let task = document.getElementById("taskTxt");
    listaUL.innerHTML += "<input type='checkbox'>";
    listaUL.innerHTML += task.value + "<br/>";
    task.value = "";
};