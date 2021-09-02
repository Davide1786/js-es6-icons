const icons = [
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


 const iconsContainer = document.getElementById('icone');

//  console.log(iconsContainer);


 iconsContainer.innerHTML = " ";

 icons.forEach((element) => {
   // console.log(element);
   const { name, family, prefix, type} = element

   iconsContainer.innerHTML += `
   <div>
      <i class="${family} ${prefix + name} cat" style="color: blu"></i>
      <div class="titolo">${name.toUpperCase()} </div>
   </div>
   `
 });


