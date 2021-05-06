
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}


var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}


var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

function listaFiltradaPrioridades(pPrioridad) {

    const listaDePrioridades = listaDeElementos.filter(prioridadBuscada => prioridadBuscada.prioridad === pPrioridad);
    return listaDePrioridades;
}


function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("miInput").value;
    var t = document.createTextNode(inputValue, prioridad);
    var prioridad = document.getElementsByClassName('prioridades');
    li.appendChild(t);
    if (inputValue === '' || prioridad === '') {
        alert("Tienes que escribir algo!");
    } else {
        document.getElementById("ulTareas").appendChild(li);
    }
    document.getElementById("miInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("Eliminar");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}