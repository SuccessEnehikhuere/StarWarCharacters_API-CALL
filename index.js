//click on characters to take me to a new page with the details of the character
//each name should display a photo, and other details dynamically

const API_URL = "https://swapi.dev/api/people";
let characterNames = document.querySelector('.character-list');
const detailsHolder = document.getElementById('details-holder');

let characterDetails = [];




async function fetchCharacters(url){
  try{
  const response = await fetch(url);
  const result = await response.json();
  if(response.ok){
    // console.log(result);
    characterDetails = result;
    console.log(characterDetails);

  }

  }
  catch(error){
    throw new Error ('error in data', error);

  }
}


console.log(fetchCharacters(API_URL));

// characterNames.addEventListener('click',(event)=>{
//   if(event.target.tagName === 'LI'){
//     console.log('hello');
     
//   }
// const details= detailsHolder.classList("container-image");
// console.log(details);

// })