//===============VARIABLES =================
const getpokemonbtn = document.getElementById("pokeget-btn")
showpokemon = false //Decide on if to show the pokemon
Randomshowpokemon = false //Used to get the random pokemon
Entershowpokemon = false //Used with the enter button
dexbody = document.getElementById("dex-body") //Show the info dex box with the pokemon info
poke_ball_top = document.getElementById("poketop-red") //Top part of the pokeball
poke_ball_bottom = document.getElementById("pokebottom-white") //bottom part of the pokeball
setEverythingBack = document.getElementById("monContainer") //Is used to set everything back to normal
//pokeball variables
const poke_search_btn = document.getElementById("poke-btn") //the button for searching
pokeball_red = document.querySelector(".top-part") //top part of pokeball
pokeball_white = document.querySelector(".bottom-part") //bottom part of pokeball
hideaway = document.querySelector("hide-away") //hides the og data
pokeicon = document.getElementById("pokemon-icon") //shows the pokemon icon
nopokemon = document.getElementById("no-pokemon") //will show if there is no pokemon
const pokemonName = document.getElementById("pokemon-name") //The pokemon's name
poketype = document.getElementById("poke-type")
const origin_game = document.getElementById("origin-game")
const spanHolderForbtn = document.getElementById("setToNormal") //Is the span that which innerHTML will be changed
const spanHolderForSearch = document.getElementById("search-section") //Is the span that which innerHTML will be changed so we have the input still there
const pokeball_red_Storage = document.getElementById("TopSection") //Will store the red half of the ball
const pokeball_white_Storage = document.getElementById("BottomSection") //Will store the white half of the ball
moveslist = document.getElementById("moves-list") //Gets the movelist 

//get the abilites
abilitylist = document.getElementById("Abilites-list") //Will be to the abilites list 
//pokeball variables

//get type
const btnCustom = document.querySelector(".btn-custom")
//get type

const EnterText = document.getElementById("EnterText") //The text that will say Enter pokemon 

//Random Button
const RandomBtn = document.getElementById("pokeget-random") //For the random button
const RandomBtnContainer = document.getElementById("RandomBtnContainer") //Will be used for the span to hold randomContainer
//Used to get a random pokemon
//Random Button



//ARROWBTNS 
const LeftArrow = document.getElementById("left-arrow")
const RightArrow = document.getElementById("right-arrow")

//ARROWBTNS 



//stat variables
hp = document.getElementById("hp")
atk = document.getElementById("attack")
def = document.getElementById("def")
special_atk = document.getElementById("special-atk")
special_def = document.getElementById("special-def")
speed = document.getElementById("speed")
baseaddtotal = document.getElementById("basetotal")
statpercentage = document.querySelector("stat-percent")


///Number of the stat
num_hp = document.getElementById("num-hp")
num_atk = document.getElementById("num-atk")
num_def = document.getElementById("num-def")
num_specialatk = document.getElementById("num-specialatk")
num_specialdef = document.getElementById("num-specialdef")
num_speed = document.getElementById("num-speed")
const WeightOfPokemon = document.getElementById("Weight") //weight of the pokemon
///Number of the stat

stat_list = []
base_total = 0
percentinum = 0
//stat variables

//Window Height AND Width this is also for the right and left arrows
/*The window height and width will be used to for when changing 
the size and adding arrows to change to the moves,stats andotherInfo*/
const windowWidth = window.innerWidth
const windowHeight = window.innerHeight
const LeftarrowStorageSpan = document.getElementById("left-arrow")
const RightarrowStorageSpan = document.getElementById("right-arrow")
//Window Height AND Width this is also for the right and left arrows



const Helditems = document.getElementById("Helditem") //For the held items
functionpressed = 0

//Selection variables
/*These variables will be used for the selection of a pokemon */

let lastclicked = ""

getpokemonbtn.addEventListener("click", Show_that_pokemon) //Used to get a random pokemon ));

RandomBtn.addEventListener("click", () => {
  lastclicked = "Random"
  //poke_search_btn.style.backgroundColor ="red"
  Randomshowpokemon = true
  console.log(lastclicked)
  Show_that_pokemon()
})

poke_search_btn.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    getpokemonbtn.click();
    showpokemon = true
  }
})

//Selection variables
const pokebutton = document.getElementById("poke-btn") //used to get the input field
//===============VARIABLES =================


async function Show_that_pokemon() {


  const pokebuttonValue = document.getElementById("poke-btn").value //Takes in a pokemon name or id as a value
  const pokeChoice = pokebuttonValue
  var chosenpokemon = pokeChoice.toLowerCase()

  showpokemon = true
  if (lastclicked == "Random") {
    chosenpokemon = Math.ceil(Math.random() * 1026)
    console.log(chosenpokemon)
    poke_search_btn.textContent = "Choosing Random"
    console.log('Choosing Random');
    lastclicked = ""
    console.log(showpokemon)

  }
  try {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${chosenpokemon}`);

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }



    if (pokebutton == "") {
      nopokemon.innerText = "ENTER A NAME"
      showpokemon = false
      EnterText.textContent = "Enter the name/id of a valid pokemon"
      //This code is meant to not let the application work unless a name is entered
    }

    console.log(showpokemon)
    if (showpokemon == true || Randomshowpokemon == true) {
      nopokemon.innerText = ""
      pokeball_red.classList.add("animate-topart")
      pokeball_white.classList.add("animate-bottompart")
      poke_search_btn.style.display = "none";
      console.log("done")
      dexbody.classList.add("dex-body")
      dexbody.classList.add("anim-square")
      dexbody.classList.remove("hide-away")
      EnterText.innerText = ""
    }

    const data = await response.json()
    console.log(data)
    //get the image
    Img = document.createElement("img")
    pokeicon.appendChild(Img)
    const pokemonSprite = data.sprites.front_default;
    Img.style.scale = "2.3"
    Img.style.scale = "2.3"
    Img.classList.add("icon")
    Img.src = pokemonSprite

    //POKENAME
    // Assume data is already defined and has the property 'name'
    // chosenpokemon_name gets the name from the data
    let chosenpokemon_name = data.name

    // Split the name into characters (not necessary in this context, so removed)

    // Capitalize the first letter and append the rest of the name
    let capitalizedPokemonName = chosenpokemon_name.charAt(0).toUpperCase() + chosenpokemon_name.slice(1);

    // Check for the special case "keldeo-ordinary"
    if (chosenpokemon_name === "keldeo-ordinary") {
      capitalizedPokemonName = "Keldo"; // Change "keldeo-ordinary" to "Keldo"
    }

    // Update the HTML element with the capitalized name
    pokemonName.innerText = capitalizedPokemonName;
    console.log(capitalizedPokemonName); // Output the final name for verification
    //POKENAME


    //Get abilites
    /*How this code section will work is that it will get the abilites of the pokemon then add them to an li that will be created and appeneded to a list*/
    data.abilities.forEach(abilityname => {
      const li = document.createElement("li");
      li.textContent = abilityname.ability.name
      li.style.fontWeight = "bold";
      li.style.color = "white";
      li.style.fontSize = "20px"
      abilitylist.appendChild(li);
      console.log(abilityname)
    })
    //Get abilites

    //Get Type
    //Type section 
    /*How this code section will work is that it will the type that the pokemon is and add it in a p element*/
    data.types.forEach(PokemonType => {
      const p = document.createElement("p");
      p.classList.add("btn")
      p.classList.add("btn-custom")
      switch (PokemonType.type.name) {
        //This a switch statment that will change the colour depending on the type
        case "normal":
          p.style.backgroundColor = "LightGray";
          break;
        case "fire":
          p.style.backgroundColor = "Red";
          break;
        case "water":
          p.style.backgroundColor = "Blue";
          break;
        case "electric":
          p.style.backgroundColor = "Yellow";
          break;
        case "ice":
          p.style.backgroundColor = "LightBlue";
          break;
        case "fighting":
          p.style.backgroundColor = "Orange";
          break;
        case "poison":
          p.style.backgroundColor = "Purple";
          break;
        case "ground":
          p.style.backgroundColor = "Brown";
          break;
        case "flying":
          p.style.backgroundColor = "SkyBlue";
          break;
        case "psychic":
          p.style.backgroundColor = "Pink";
          break;
        case "bug":
          p.style.backgroundColor = "Lime";
          break;
        case "grass":
          p.style.backgroundColor = "Green";
          break;
        case "rock":
          p.style.backgroundColor = "DarkBrown";
          break;
        case "ghost":
          p.style.backgroundColor = "DarkPurple";
          break;
        case "dragon":
          p.style.backgroundColor = "DarkBlue";
          break;
        case "dark":
          p.style.backgroundColor = "Black";
          break;
        case "steel":
          p.style.backgroundColor = "Silver";
          break;
        case "fairy":
          p.style.backgroundColor = "LightPink";
          break;
          //This a switch statment that will change the colour depending on the type
      }

      p.textContent = PokemonType.type.name


      poketype.append(p)
      console.log(PokemonType)

    })


    //Get Type

    //progress section 
    /*How this code section will work is that it will get the total base total of a pokemon's stats then after that
    will give the percentage that each stat makes on the base stat and it will show it on a progress bar*/
    console.log(data.stats)
    data.stats.forEach(stats => {
      added_stat = stats.base_stat //getting the base stat
      stat_list.push(added_stat)

      base_total = base_total + added_stat
      baseaddtotal.innerText = "Base Total: " + base_total

    })

    for (let i = 0; i < stat_list.length; i++) {
      console.log(stat_list[i] + "stat"); // Log the value in stat_list at index i along with "stat"


      switch (i) {
        case 0:
          num_hp.textContent = "Hp:" + stat_list[i];
          break;
        case 1:
          num_atk.textContent = "Atk:" + stat_list[i];
          break;
        case 2:
          num_def.textContent = "Def:" + stat_list[i]; // This should set the statElement to the "def" element with the text
          break;
        case 3:
          num_specialatk.textContent = "SpAtk:" + stat_list[i];
          break;
        case 4:
          num_specialdef.textContent = "SpDef:" + stat_list[i];
          break;
        case 5:
          num_speed.textContent = "Speed:" + stat_list[i];
          break;
        default:
          break;
      }


    }


    console.log(stat_list)
    console.log(base_total)
    for (let i = 0; i < stat_list.length; i++) {
      percent_of_stat = stat_list[i] / base_total * 100;
      roundnum = percent_of_stat.toFixed(2);
      console.log(roundnum);

      // Get the corresponding stat element based on the loop index
      let statElement;
      switch (i) {
        case 0:
          statElement = hp;
          break;
        case 1:
          statElement = atk;
          break;
        case 2:
          statElement = def; // This should set the statElement to the "def" element
          break;
        case 3:
          statElement = special_atk;
          break;
        case 4:
          statElement = special_def;
          break;
        case 5:
          statElement = speed;
          break;
        default:
          break;
      }
      // Add the progresss class and set the width
      if (statElement) {
        statElement.classList.add("progresss");
        statElement.style.width = roundnum + "%";
      }
    }
    //HELD ITEMS
    data.held_items.forEach(Helditem => {
      const li = document.createElement("li")
      li.innerText = Helditem.item.name
      li.style.color = "white"
      li.style.fontWeight = "bold"
      li.style.fontSize = "20px"
      if (li.innerText == "") {

        li.innerText = "None"
      }
      Helditems.appendChild(li)
    })

    //HELD ITEMS

    //MOVES
    data.moves.forEach(Move => {
      const li = document.createElement("li")

      if (Move.version_group_details.length > 0) {
        num = Move.version_group_details.length
        console.log(num)
        movemethod = Move.version_group_details[num - 1].move_learn_method.name;
        if (movemethod == "machine") {
          movemethod = "TM"
        }
        learnmove = Move.version_group_details[num - 1].level_learned_at
      }
      moveslist.appendChild(li)
      li.innerText = Move.move.name + ":" + movemethod + "," + learnmove

      li.style.textAlign = "center"
      console.log(Move.move)
    })
    //MOVES


    //RandomBtn.style.display="none"//Remove the random btn when we get an a infocard

    //Remove randdom class





    //Weight of pokemon
    const p = document.createElement("p")
    const pokemonWeight = data.weight / 10

    p.textContent = pokemonWeight + "Kg"
    p.style.fontSize = "20px"
    p.style.fontWeight = "bold";
    p.style.color = "white";
    WeightOfPokemon.appendChild(p)
    //Weight of pokemon

    spanHolderForbtn.innerHTML = '<button style="z-index: 1;" onclick="resetPokemonInfo()"  class="pokeget-GoBack" id="GoBackToMenu">Go Back</button>'; //Create the go back button'; // create the go back button
    pokebutton.style.display = "none"
    RandomBtn.style.display = "none"
    pokeball_red_Storage.innerHTML = ""
    pokeball_white_Storage.innerHTML = ""
    //progress section 
    //Generation of pokemon
    //This will give the genartion of a pokemon depending on the id
    if (data.id > 0 && data.id <= 151) {
      origin_game.textContent = "Generation I"
      origin_game.style.fontSize = "20px"
      origin_game.style.color = "white"
      origin_game.style.fontWeight = "bold";
      console.log("worked")
    } else if (data.id >= 152 && data.id <= 251) {
      origin_game.textContent = "Generation II"
      origin_game.style.fontSize = "20px"
      origin_game.style.color = "white"
      origin_game.style.fontWeight = "bold";
      console.log("worked")
    } else if (data.id >= 252 && data.id <= 386) {
      origin_game.textContent = "Generation III"
      origin_game.style.fontSize = "20px"
      origin_game.style.color = "white"
      origin_game.style.fontWeight = "bold";
      console.log("worked")
    } else if (data.id >= 387 && data.id <= 493) {
      origin_game.textContent = "Generation IV"
      origin_game.style.fontSize = "20px"
      origin_game.style.color = "white"
      origin_game.style.fontWeight = "bold";
      console.log("worked")
    } else if (data.id >= 494 && data.id <= 649) {
      origin_game.textContent = "Generation V"
      origin_game.style.fontSize = "20px"
      origin_game.style.color = "white"
      origin_game.style.fontWeight = "bold";
      console.log("worked")
    } else if (data.id >= 650 && data.id <= 721) {
      origin_game.textContent = "Generation VI"
      origin_game.style.fontSize = "20px"
      origin_game.style.color = "white"
      origin_game.style.fontWeight = "bold";
      console.log("worked")
    } else if (data.id >= 722 && data.id <= 807) {
      origin_game.textContent = "Generation VII"
      origin_game.style.fontSize = "20px"
      origin_game.style.color = "white"
      origin_game.style.fontWeight = "bold";
      console.log("worked")
    } else if (data.id >= 810 && data.id <= 905) {
      origin_game.textContent = "Generation VIII"
      origin_game.style.fontSize = "20px"
      origin_game.style.color = "white"
      origin_game.style.fontWeight = "bold";
      console.log("worked")
    } else if (data.id >= 906 && data.id <= 1026) {
      origin_game.textContent = "Generation XI"
      origin_game.style.fontSize = "20px"
      origin_game.style.color = "white"
      origin_game.style.fontWeight = "bold";
      console.log("worked")
    } //This code will give the genaration of the pokemon depending on their id
    //MELTAN CODE
    else if (data.id == 808) {
      origin_game.textContent = " Pokémon: Let's Go Pikachu/Eevee"
      origin_game.style.fontSize = "20px"
      origin_game.style.color = "white"
      origin_game.style.fontWeight = "bold";
      console.log("worked")
    } else if (data.id == 809) {
      origin_game.textContent = " Pokémon: Let's Go Pikachu/Eevee"
      origin_game.style.fontSize = "20px"
      origin_game.style.color = "white"
      origin_game.style.fontWeight = "bold";
      console.log("worked")
      backgroundColor
    }
    //MELTAN CODE


  } catch (error) {
    console.error(error)
    EnterText.textContent = "Enter the name/id of a valid pokemon"
  }



  //MOBILE OPTIMASTION CODE
  function Arrow(){
  if (windowWidth <= 590) {
    LeftarrowImg = document.createElement("img")
    LeftarrowImg.src = "imgs/LeftArrow.png"
    LeftarrowStorageSpan.appendChild(LeftarrowImg)


    RightarrowImg = document.createElement("img")
    RightarrowImg.src = "imgs/RightArrow.png"
    RightarrowStorageSpan.appendChild(RightarrowImg)

    LeftarrowImg.classList.add("arrowbtns")
    RightarrowImg.classList.add("arrowbtns")
  }

  LeftArrow.addEventListener("click", function() {
    console.log("Left click")


  RightArrow.addEventListener("click", function() {
    console.log("Right click")
  })  })}
  //MOBILE OPTIMASTION CODE


}











//WILL RESET ALL THE INFOMATION BACK TO THE START
function resetPokemonInfo() {
  console.log(showpokemon)
  console.log(Randomshowpokemon)
  console.log(Entershowpokemon)
  LeftarrowStorageSpan.innerHTML = ""
  RightarrowStorageSpan.innerHTML = ""
  EnterText.textContent = "Enter a pokemon"
  RandomBtn.style.display = "block"
  pokebutton.style.display = "block"
  pokeball_red_Storage.innerHTML = '<img src="./imgs/poketop.png" class="img-fluid top-part" width="600px" id="poketop-red" alt="top">'
  pokeball_white_Storage.innerHTML = '<img src="./imgs/pokebottom.png" class="img-fluid bottom-part"  width="600px" alt="bottom">'
  pokeicon.innerHTML = ""; // Clear the pokemon icon
  abilitylist.innerHTML = '<b><i style="font-size: 28px; text-decoration: underline;" >Abilites</i></b>'
  poketype.innerHTML = '<p style="font-size: 28px;text-decoration: underline;"> <b><i>Types</i><b> </p>'; // Clear the pokemon types
  baseaddtotal.innerText = ""; // Reset base total text
  base_total = 0; // Reset base total
  stat_list = []; // Clear stat list
  Helditems.innerHTML = '<p style="font-size: 26px; text-decoration: underline;"><b><i>Held Items</i></b></p>'
  num_hp.textContent = "";
  num_atk.textContent = "";
  num_def.textContent = "";
  num_specialatk.textContent = "";
  num_specialdef.textContent = "";
  num_speed.textContent = "";
  hp.style.width = "0%";
  atk.style.width = "0%";
  def.style.width = "0%";
  special_atk.style.width = "0%";
  special_def.style.width = "0%";
  speed.style.width = "0%";
  WeightOfPokemon.innerHTML = '<p style="font-size: 28px; text-decoration: underline;"><b>  <i>Weight</i></b></p>'; // Clear weight
  origin_game.textContent = ""; // Clear origin game
  spanHolderForbtn.innerHTML = "" //clear button
  RandomBtn.style.display = "inline"
  moveslist.innerHTML = '<p style=" text-align: center;font-size: 28px; margin: 0; padding: 0; text-decoration: underline;"><b>Moves</b></p>'
  dexbody.classList.remove("dex-body");
  dexbody.classList.remove("anim-square");
  dexbody.classList.add("hide-away");
  spanHolderForbtn.appendChild(getpokemonbtn) //creates a clone button

  // Restore the Get Pokemon button

}
//WILL RESET ALL THE INFOMATION BACK TO THE START
