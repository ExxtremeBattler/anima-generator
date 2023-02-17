// array containing possible tank abilites
let tankAbilities = ["Shield","Steel Armor", "Rapid Regen", "Absorb", "Metallic", "Rock Solid", "Enlarge","Spikes","Elastic","Rhino",
"Muscle Mass"]

let dpsAbilities = ["Explosive Impact", "Machine Guns", "Stardust", "Onslaught", "One More", "Third Time's the Charm", "Stomach Cannon",
"Flamin' Hot", "Steel Claws", "Sonic Catapult", "Sub-Zero", "Hammer Hands", "Grenade Launcher", "Electric", "Death Wheel", "Bubble Bomb",
"Magnetic", "Gravity Rush", "Arm Blade", "Whip", "Tempest", "Psycho","Eye Beam", "Darkness", "Nebula"]

// Function to prompt user for password options (X)
function getTankAbility() {

  let tankAbility = getRandom(tankAbilities)
  
  return tankAbility
  
}

function getDpsAbility() {

  let dpsAbility = getRandom(dpsAbilities)
  
  return dpsAbility
  
}

// Function for getting a random element from an array (X)
function getRandom(arr) {
return arr[Math.floor(Math.random() * arr.length)]
}

// Function to generate password with user input
function generatePassword() {
  let randomPassword = ""; 
  let desiredArrays = [] ; 

  if (characterChoiceLower === true){
    desiredArrays = desiredArrays.concat(lowerCasedCharacters)
  }

  if (characterChoiceNumeric === true){
    desiredArrays = desiredArrays.concat(numericCharacters)
  }

  if (characterChoiceSpecial === true){
    desiredArrays = desiredArrays.concat(specialCharacters)
  }

  if(characterChoiceUpper === true){
    desiredArrays = desiredArrays.concat(upperCasedCharacters)
  }

  for (let index = 0; index < passwordLength; index++) {
    randomPassword = randomPassword.concat(getRandom(desiredArrays))
  }

  console.log(randomPassword);
  console.log(desiredArrays)
  

  return randomPassword;
  

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writeAbilities() {
  var tankAbility = getTankAbility()
  var dpsAbility = getDpsAbility()
  var abilityText = document.querySelector('#anima');

  abilityText.value = "Your Anima's abilities are: \n " + tankAbility + "," + "\n" +
                      dpsAbility + "," + "\n"
}

// Add event listener to generate button
generateBtn.addEventListener('click', writeAbilities);