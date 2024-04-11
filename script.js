var lista = [
    {
        id: 0,
        item: "prueba lengua",
        fecha: new Date().getTime(),
        check: false,
        tacho: '',
        fin: "",
    }
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
        if (item.check==true)
        {
            h.innerHTML +=`
                <label>- ${finDate(new Date(item.fin))}</label>
                `;
            
        }
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
    const txt = document.getElementById(id);
    const tarea = lista.find(t => t.id === id);
    tarea.tacho = new Date().getTime();
    tarea.check = true;
}

function rapido(){
    var h = document.getElementById("checklist");
    h.innerHTML= ``;
    let masRa = 0;
    let cual = ""
    console.log(lista);
    for(let i = 0; i < lista.length; i++){
        if(masRa<lista[i].tacho){
            masRa=lista[i].tacho;
            cual = lista[i].item
        }
    }
    h.innerHTML= `<p> El mas rapido en realizarse fue ${cual}</p>`;
    lista.forEach(function(item) {

    });
}