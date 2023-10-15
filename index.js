//display names of characters dynamically when page loads
//each name should display a photo, and other details dynamically when you click on them


const API_URL = "https://swapi.dev/api/people";

let characterList = document.querySelector('.character-list');
// const detailsHolder = document.getElementById('details-holder');

let characterDetails = [];

let characterObject = {};
let currentIndex = 0;


const displayCharacterNames = (characters)=>{
  characters.forEach((character)=>{
    characterList.innerHTML += `
    <ul class="character-list">
    <li>${character.name}</li>
    </ul>   
    `
  });
   
}
 

async function getCharactersDetails(url){
  try{
  const response = await fetch(url);
  const data = await response.json();
  const characters = data.results;
  if (response.ok){
    console.log(characters);
    
   displayCharacterNames(characters);

    // characterDetails = result;
    // // console.log(characterDetails);

    // characterObject = result.results[currentIndex];
    // // console.log(characterObject);
    
  }

  }
  catch(error){
    throw new Error (error);

  }
}

console.log(getCharactersDetails(API_URL));


window.addEventListener('DOMContentLoaded',()=>{
  getCharactersDetails(API_URL);
   
})













// characterNames.addEventListener('click',(event)=>{
//   if(event.target.tagName === 'LI'){
//     console.log('hello');
     
//   }
// const details= detailsHolder.classList("container-image");
// console.log(details);

// })