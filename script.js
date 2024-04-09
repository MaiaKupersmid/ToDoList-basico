var lista = [
    {
        id: 0,
        item: "prueba lengua",
        fecha: new Date().getTime(),
        check: true,
        tacho: new Date().getTime(),
    }
]

function AgregarItem() {
    var obj = {
        id: lista.length,
        item: document.getElementById("Input").value,
        fecha: new Date().getTime(),
        check: false,
    };
    lista.push(obj);
    recargarItems();
}

function recargarItems() {
    var h = document.getElementById("checklist");
    h.innerHTML= ``;
    lista.forEach(function(item) {
    h.innerHTML += `
        <input type="checkbox" onclick="Tachado(${item.id})" ${item.check ? 'checked' : ''} id="${item.id}">
        <label>${item.item} - ${formatDate(new Date(item.fecha))}</label><br>`;
        console.log(item.tacho);
    });
}

function formatDate(date) {
    return date.getDate()+'/'+date.getMonth()+'/'+ date.getFullYear() + '      ' + date.getHours() + ':' + date.getMinutes();
}

function Tachado(id) {
    const txt = document.getElementById(id);
    const tarea = lista.find(t => t.id === id);
    const cuando = 0
    if(tarea){
        cuando = tarea.tacho = new Date().getTime();
        return tarea.check = true;
    } else {
        cuando = lista.tarea.tacho = 0;
        return tarea.check = false;
    }
}

function rapido(){
    var h = document.getElementById("checklist");
    h.innerHTML= ``;
    let masRa = 0;
    let cual = ""
    for(let i = 0; i <= lista.length; i++){
        if(masRa<lista.tacho){
            masRa=lista.tacho;
            cual = lista.item
        }
    }
    console.log(masRa);
    h.innerHTML= `<p> El mas rapido en realizarse fue ${cual}</p>`;
    lista.forEach(function(item) {

    });
}