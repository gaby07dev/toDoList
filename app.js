const btn = document.getElementById("enter");
const input = document.getElementById("userInput");
const ul = document.querySelector("ul");


// TODO: returna la longitud del item.
function inputLength () {
    return input.value.length;
}

// TODO: Formatea el item ingresado para que comience en mayúscula y todo lo demas en múscula. 
function returnItem(item){
    return item[0].toUpperCase() + item.slice(1, item.length).toLowerCase();
}

// TODO: Crea el elemento con el item ingresado.
function createListElement(){
    const li = document.createElement('li');
    const btn_del = document.createElement('button'); 
    const check = document.createElement('input');
    const span = document.createElement('span');
    // createElement crea un elemento HTML.

    check.type = "checkbox"; // creando un checkbox
    check.className = "checkbox"; // agregando la clase 
    li.appendChild(check); // añadiendolo dentro del li

    span.className = "text";
    
    span.appendChild(document.createTextNode(returnItem(input.value)));
    li.appendChild(span);
    // appendChild sirve para crear un elemento hijo dentro de un elemento.
    // createTextNode sirve para agregar texto en un elemento.
    btn_del.className = 'btn-del'; // le agregamos un clase
    btn_del.innerText = "X"; // le cambiamos el texto dentro del btn
    // hasta ahora creamos un elemento li con texto dentro y un btn eleminar.
    li.appendChild(btn_del);

    ul.appendChild(li);
    // Finalmente agregamos el li y el btn dentro de la lista ul.
    input.value = ""; // reseteamos el input
}

function addListAfterClick(){
    // TODO: comprobamos que no se ingrese un valor vacío.
    if(inputLength() > 0){ 
        createListElement();               
    }
}

function addListAfterEnter(event){ 
    // TODO: comprobamos que no se ingrese un valor vacío y que se haya tecleado el enter.
    if(inputLength() > 0 && event.keyCode === 13){ 
            createListElement();
    }
}


// TODO: captura lso eventos para completar o remover un item.
function capturarElemento(item){
    if(item.target.className === "checkbox"){  
        item.target.parentElement.classList.toggle("done");

    } else if(item.target.className === "btn-del"){
        item.target.parentElement.remove();
    }
}
// TODO: Limpia la lista.
function clearAll(){
    confirmationAlert("Se borrarán todos los items de la lista. ¿Continuar?", "clear");
}
// TODO: Limpia los item completados.
function clearDone(){
    confirmationAlert("Se borrarán todos los items de la lista que estén completados. ¿Continuar?", "clearDone");
}

// TODO: popup para confirmar acción de borrar items completados o todo.
function confirmationAlert(message, action) {
    alertify.confirm('Confirmar acción', message, 
    function(){ 
        if( action === "clearDone"){
            const ItemsDone = document.querySelectorAll(".done");
            ItemsDone.forEach((item) => item.remove());
        }
        if( action === "clear"){
            document.querySelector("ul").innerHTML = "";
        }
        alertify.success('Ok'); 
        }
    , function(){ 
            alertify.error('Cancel')
    });
}


// addEventListener sirve para escuchar los eventos que suceden dentro del DOM.
// addEventListener( evento , funcipon) {} 

btn.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterEnter);

ul.addEventListener("click", capturarElemento);

document.querySelector("#clear").addEventListener("click", clearAll);
document.querySelector("#clearDone").addEventListener("click", clearDone);