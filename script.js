var lista = [
]

function AgregarItem() {
    var obj = {
        id: lista.length,
        item: document.getElementById("Input").value,
        fecha: new Date().getTime(),
        check: false,
        tacho: ''
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
    });
}

function formatDate(date) {
    return date.getDate()+'/'+date.getMonth()+'/'+ date.getFullYear() + '      ' + date.getHours() + ':' + date.getMinutes();
}

function finDate(date)
{
    date= new Date().getTime();
}

function Tachado(id) {
    for(let i = 0; i< lista.length; i++){
        if (lista[i].id == id){
            lista[i].tacho = new Date().getTime();
            lista[i].check = true;
        }
    }
}

function rapido(){
    var h = document.getElementById("checklist");
    h.innerHTML= ``;
    let masRa = 0;
    let cual = '';
    console.log(lista);
    for(let i = 0; i < lista.length; i++){
        if(masRa<lista[i].tacho){
            console.log("ahora: " + lista[i].item)
            masRa=lista[i].tacho;
            cual = lista[i].item;
        }
    }
    h.innerHTML= `<p> El mas rapido en realizarse fue ${cual}</p>`;
}