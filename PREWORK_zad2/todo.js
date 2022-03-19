function btClick() {
    let listaUL = document.getElementById("listaToDo");
    let task = document.getElementById("taskTxt");
    listaUL.innerHTML += "<li>a "+task.innerText+"</li>";
};