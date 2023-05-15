document.querySelector("button").addEventListener("click", getFetch);
document.querySelector("#checkbox").addEventListener("click", checkingTheBox);

// let checkbox  = document.querySelector('#checkbox')
// console.log(checkbox.checked)

async function getFetch() {
  const choice = document.querySelector("input").value;
  const url = "https://pokeapi.co/api/v2/pokemon/" + choice;

  let data = await fetch(url);
  let pokemonInfo = await data.json();
  // return the name of input if found
  tellName(pokemonInfo);
  whatType(pokemonInfo);
  checkingTheBox(pokemonInfo);
  // callback fns to return the data
  // showPicture(pokemonInfo);
  // showShinyPicture(pokemonInfo);
}

function checkingTheBox(pokemonInfo) {
  let checkbox = document.querySelector("#checkbox").checked;
  // it returns Boolean value
  if (checkbox) {
    showShinyPicture(pokemonInfo);
    ƒ;
  } else {
    showPicture(pokemonInfo);
  }
}
// checkingTheBox()


// --> need to check if I need to show something different if there is no match?  It will stay as "Name?" right now

function tellName(pokemonInfo) {
  document.querySelector(".name").innerText = `Name: ${pokemonInfo.name}`;
}
function whatType(pokemonInfo) {
  console.log(pokemonInfo.types[0].type.name);
  document.querySelector(".type").innerText = `Type: ${pokemonInfo.types[0].type.name}`;
}
function showPicture(pokemonInfo) {
  document.querySelector("img").src = pokemonInfo.sprites.front_default;
}
function showShinyPicture(pokemonInfo) {
  document.querySelector("img").src = pokemonInfo.sprites.front_shiny;
}

// front_default for img?
//unless its shiny thenfront-shiny?

// function plus() {
//   stringNums += '+';
//   document.querySelector('#placeToPutResult').innerText = stringNums
// }
