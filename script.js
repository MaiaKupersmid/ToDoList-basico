var lista = [
    {
        id: 0,
        item: "tarea mate",
        fecha: "26-03-2024",
        check: true,
    }
]

/*const AgregarItem = ()  => {
    for(let itt in lista){
        let h = document.getElementById("checklist").innerHTML +=`
        <input checked= ${lista.check} name="r" type="checkbox" id="${lista.id}"> 
        <label for="01"> ${lista.item} </label>`
    }
}*/

function AgregarItem() {
    let input = document.getElementById("Input").value; //value??
    lista.push(input);

    /*if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";*/
}