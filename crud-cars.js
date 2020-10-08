const cars = [
    { id: 1, marca: 'Jeep', modelo: 'Todo Terreno'},
    { id: 2, marca: 'Cadillac', modelo: 'GX'},
	{ id: 3, marca: 'Seat', modelo: 'Cupra'},
    { id: 4, marca: 'Cadillac', modelo: 'Clasico'}	
];

function printCars() {
    const tableBody = document.getElementById('table-users-body');
    tableBody.innerHTML = '';

    cars.forEach(car => {
        const tr = `<tr>
                        <td>${car.marca}</td>
                        <td>${car.modelo}</td>
                        <td>
                            <button onclick="removeCar(${car.id})" class="btn btn-danger">Eliminar</button>
                            <button onclick="editCar(${car.id})" class="btn btn-warning">Editar</button>
                        </td>
                    </tr>`;
        tableBody.innerHTML += tr;
    })
}

let editingCar = {} 

function editCar(idRecibido) {
   
    editingCar = cars.find((car) => car.id === idRecibido);

    const inputMarca = document.getElementById('marca') 
    inputMarca.value = editingCar.marca;
    

    document.getElementById('modelo').value = editingCar.modelo

}

function saveCarEdited() {

    const newBRand = document.getElementById('marca').value


    const newModel = document.getElementById('modelo').value

    editingCar.marca = newBRand;
    editingCar.modelo = newModel;

    printCars();
}


function addCar() {
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const id = getId();

    const newCar = { id, marca, modelo }
    
    
    cars.push(newCar);
    printCars();
}

function getId() {
    let maxi = 0;
    for (let i=0; i < cars.length; i++) {
        if(cars[i].id > maxi){
            maxi = cars[i].id
        }
    }
    return maxi + 1;
}
function removeCar (id) {
    const index = cars.findIndex(car => car.id === id)
    
    cars.splice(index, 1);
    printCars();
}

printCars();
