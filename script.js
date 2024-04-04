var lista = [
    {
        id: 0,
        item: "tarea mate",
        fecha: "26-03-2024",
        check: true,
    },
    {
        id: 0,
        item: "prueba lengua",
        fecha: "03-04-2024",
        check: true,
    }
]

function AgregarItem(){
    var obj = {
        id: lista.length,
        item: document.getElementById("Input").value,
        fecha: new Date(),
        check: false,
    };

    console.log(obj)

    lista.push(obj);
    recargarItems();
}

function recargarItems()
{
    var h = document.getElementById("checklist");
    lista.forEach(function(item) {
    h.innerHTML += `
        <input type="checkbox" ${item.check ? 'checked' : ''} id="${item.id}">
        <label>${item.item}</label><br>
        `;
    });
    
}

/*
for(let i=0; i<lista.length; i++){
    let h = document.getElementById("checklist")
    h.innerHTML +=`
    <input checked= ${lista[i].check} type="checkbox" id="${lista[i].id}"> 
    <label> ${lista[i].item} </label>`
}
class Lista {
    constructor(item){
        this.item = item;
        this.id = id;

    }
}*/