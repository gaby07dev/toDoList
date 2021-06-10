let btn = document.getElementById("enter");
let input = document.getElementById("userInput");
let ul = document.querySelector("ul");


function inputLength () {
    return input.value.length;
}

function createListElement(){
    let li = document.createElement('li');
    let btn_del = document.createElement('button'); 
    let check = document.createElement('input');
    let span = document.createElement('span');
    // createElement crea un elemento HTML.

    check.type = "checkbox"; // creando un checkbox
    check.className = "checkbox"; // agregando la clase 
    li.appendChild(check); // añadiendolo dentro del li

    span.className = "text";
    span.appendChild(document.createTextNode(input.value));
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
    if(inputLength() > 0){ // comprobamos que no se ingrese un valor vacío.
        createListElement();               
    }
}

function addListAfterEnter(event){ 
    if(inputLength() > 0 && event.keyCode === 13){ // comprobamos que no se ingrese un valor vacío y que se haya tecleado el enter.
            createListElement();
    }
}



function capturarElemento(item){
    if(item.target.className === "checkbox"){
        
        item.target.parentElement.classList.toggle("done");

    } else if(item.target.className === "btn-del"){
        item.target.parentElement.remove();
    }
}

 
// addEventListener sirve para escuchar los eventos que suceden dentro del DOM.
// addEventListener( evento , funcipon) {} 

btn.addEventListener("click", addListAfterClick);


input.addEventListener("keypress", addListAfterEnter);

ul.addEventListener("click", capturarElemento);

// li.addEventListener("click", capturarElemento);

/*
Al usar los archivos de la lista de compras de los videos anteriores, actualice la aplicación de la lista de compras para hacer lo siguiente:

1. Si hace clic en el elemento de la lista, activa y desactiva la clase .done.

2. Agregue botones junto a cada elemento de la lista para eliminar el elemento cuando haga clic en su botón de eliminación correspondiente.

3. BONIFICACIÓN: al agregar un nuevo elemento de la lista, automáticamente agrega el botón de eliminar junto a él (pista: ¡asegúrese de verificar si también se puede hacer clic en los elementos nuevos!)

¡Buena suerte!

Tenga en cuenta que:

En el navegador, la mayor parte del código está impulsado por eventos y la escritura de aplicaciones interactivas en JavaScript a menudo se trata de esperar y reaccionar ante eventos, para alterar el comportamiento del navegador de alguna manera. Los eventos ocurren siempre que sucede algo en una página en función de la interacción del usuario. Todos estos están definidos por w3c.

Para reaccionar a un evento, lo escucha y proporciona una función que será invocada por el navegador cuando ocurra el evento. Esta función se conoce como devolución de llamada. Para leer más, consulte este enlace: https://blog.codeanalogies.com/2016/04/11/javascript-callbacks-explained-using-minions/

PD: si tiene alguna pregunta, comuníquese con nuestra comunidad en el canal #js o #helpme en Discord (la lección 2 proporciona el enlace si aún no se ha unido).
*/