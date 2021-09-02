const icone = [
   {
     name: 'cat',
     prefix: 'fa-',
     type: 'animal',
     family: 'fas',
   },
   {
     name: 'crow',
     prefix: 'fa-',
     type: 'animal',
     family: 'fas',
   },
   {
     name: 'dog',
     prefix: 'fa-',
     type: 'animal',
     family: 'fas',
   },
   {
     name: 'dove',
     prefix: 'fa-',
     type: 'animal',
     family: 'fas',
   },
   {
     name: 'dragon',
     prefix: 'fa-',
     type: 'animal',
     family: 'fas',
   },
   {
     name: 'horse',
     prefix: 'fa-',
     type: 'animal',
     family: 'fas',
   },
   {
     name: 'hippo',
     prefix: 'fa-',
     type: 'animal',
     family: 'fas',
   },
   {
     name: 'fish',
     prefix: 'fa-',
     type: 'animal',
     family: 'fas',
   },
   {
     name: 'carrot',
     prefix: 'fa-',
     type: 'vegetable',
     family: 'fas',
   },
   {
     name: 'apple-alt',
     prefix: 'fa-',
     type: 'vegetable',
     family: 'fas',
   },
   {
     name: 'lemon',
     prefix: 'fa-',
     type: 'vegetable',
     family: 'fas',
   },
   {
     name: 'pepper-hot',
     prefix: 'fa-',
     type: 'vegetable',
     family: 'fas',
   },
   {
     name: 'user-astronaut',
     prefix: 'fa-',
     type: 'user',
     family: 'fas',
   },
   {
     name: 'user-graduate',
     prefix: 'fa-',
     type: 'user',
     family: 'fas',
   },
   {
     name: 'user-ninja',
     prefix: 'fa-',
     type: 'user',
     family: 'fas',
   },
   {
     name: 'user-secret',
     prefix: 'fa-',
     type: 'user',
     family: 'fas',
   },
 ];


 const iconeContainer = document.getElementById('icone'); // richiamo id html

//  console.log(iconeContainer);

// iconeContainer.innerHTML = ''; // svuoto html

// icone.forEach((elemento) => { // accedo al mio array e 1° argomento
//   // console.log(elemento.name)
//   const {name, family, prefix, type} = elemento // destrutturo e prendo tutte le key da elemento
//   // prendo l'id e inserisco al suo interno tanti oggetti quanti presenti nell array.
//   // con $ accedo ai metodi e prendo le key degli oggetti
//   iconeContainer.innerHTML += ` 
//     <div>
//       <i class="${family + prefix + name}"></i> 
//       <div class="titolo">${name.toUpperCase()}</div>
//     </div>
//   `
// });

const colori = ['green', 'red', 'blue'];
const coloreArray = coloriIcone(icone, colori);
print(coloreArray, iconeContainer);
const tipi = coloriIcone(coloreArray);
const select = document.getElementById('type');
console.log(select);
printOpzione(tipi, select);


function print(array, container) {
    container.innerHTML = ''; // svuoto html
    array.forEach((elemento) => { // accedo al mio array e 1° argomento
    // console.log(elemento.name)
    const {name, family, prefix, colore} = elemento // destrutturo e prendo tutte le key da elemento
    // prendo l'id e inserisco al suo interno tanti oggetti quanti presenti nell array.
    // con $ accedo ai metodi e prendo le key degli oggetti
    container.innerHTML += ` 
      <div>
        <i class="${family} ${prefix + name}" style="color: ${colore}"></i> 
        <div class="titolo">${name.toUpperCase()}</div>
      </div>
    `
  });
}

function coloriIcone(array, coloriIcone) {
  const tipi = iTipi(array);
  // console.log(tipi);

  const coloreArray = array.map((elemento) => {
    const indexTipo = tipi.indexOf(elemento.type);
    console.log(indexTipo);

    elemento.colore = coloriIcone[indexTipo];
    return elemento;
  }) 

  return coloreArray;
}

function iTipi(array) {
  const tipi = [];
  array.forEach((elemento) => {
    console.log(elemento.type);
    if(!tipi.includes(elemento.type)){
      tipi.push(elemento.type);
    }
   
  });
  return tipi;
}

function printOpzione(array, select) {

}



