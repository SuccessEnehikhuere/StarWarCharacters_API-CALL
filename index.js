//display names of characters dynamically when page loads
//each name should display a photo, and other details dynamically when you click on them


const API_URL = "https://swapi.dev/api/people";

let characterList = document.querySelector('.character-list');
let profileDisplayer = document.querySelector('.container-image');


//function to display list of  names

const displayCharacterNames = (characters) => {
  characters.forEach((character) => {
    const characterListItem = document.createElement('li');
    characterListItem.textContent = character.name;
    characterListItem.classList.add('character-list-item');
    
    // Set up the click event with a function that passes arguments to displayProfiles
    characterListItem.onclick = () => {
      // Pass arguments to the displayProfiles function when calling it
      displayProfiles(character);
    };

    // Append the list item to the character list
    characterList.appendChild(characterListItem);
  });
}


//function to get each character details
const displayProfiles = (profile)=>{
 // console.log(profile)
    profileDisplayer.innerHTML += `
      <h2> ${profile.name} </h2> 
      <p> ${profile.gender} </p> 
      <p> ${profile.height} </p>  
      
      `
  
}




//function to get data
async function getCharactersDetails(url){
  try{
  const response = await fetch(url);
  const data = await response.json();
  const characters = data.results;
  if (response.ok){
    console.log(characters);
    
   displayCharacterNames(characters);
 
     
  }

  }
  catch(error){
    throw new Error (error);

  }
}

// console.log(getCharactersDetails(API_URL));


window.addEventListener('DOMContentLoaded',()=>{
  getCharactersDetails(API_URL);
   
})





characterList.addEventListener('click',(event)=>{

  if(event.target.tagName === 'LI'){
    // console.log('hello');
    profileDisplayer.style.display = 'block';
  }  
  });

 



