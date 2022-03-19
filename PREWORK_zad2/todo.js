function btClick() {
    let listaUL = document.getElementById("listaToDo");
    let task = document.getElementById("taskTxt").value;
    listaUL.innerHTML += "<li>a "+task+"</li>";
};