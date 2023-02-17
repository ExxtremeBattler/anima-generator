// array containing possible tank abilites
let tankAbilities = ["Shield","Steel Armor", "Rapid Regen", "Absorb", "Metallic", "Rock Solid", "Enlarge","Spikes","Elastic","Rhino",
"Muscle Mass"]

// array containing possible dps abilities
let dpsAbilities = ["Explosive Impact", "Machine Guns", "Stardust", "Onslaught", "One More", "Third Time's the Charm", "Stomach Cannon",
"Flamin' Hot", "Steel Claws", "Sonic Catapult", "Sub-Zero", "Hammer Hands", "Grenade Launcher", "Electric", "Death Wheel", "Bubble Bomb",
"Magnetic", "Gravity Rush", "Arm Blade", "Whip", "Tempest", "Psycho","Eye Beam", "Darkness", "Nebula"]

// array containing possible support abilities

let supportAbilities = ["Phase", "Duplicate", "Midas Touch", "Slip n' Slide", "Danger Sense", "Rift", "Shadow Step", "Angel Wings",
"Hyper Form", "Swap", "Engineer", "Rejuvenation", "Rewind", "Bard", "Time Stop", "Time Skip"]

// Functions to generate abilities of each category
function getTankAbility() {

  let tankAbility = getRandom(tankAbilities)
  
  return tankAbility
  
}

function getDpsAbility() {

  let dpsAbility = getRandom(dpsAbilities)
  
  return dpsAbility
  
}

function getSupportAbility() {

  let supportAbility = getRandom(supportAbilities)
  
  return supportAbility
  
}




// Function for getting a random element from an array (X)
function getRandom(arr) {
return arr[Math.floor(Math.random() * arr.length)]
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writeAbilities() {
  var tankAbility = getTankAbility()
  var dpsAbility = getDpsAbility()
  var supportAbility = getSupportAbility()
  var abilityText = document.querySelector('#anima');

  abilityText.value = "Your Anima's abilities are: \n " + tankAbility + "," + "\n" +
                      dpsAbility + "," + "\n" +
                      " and " + supportAbility + "!"
}

// Add event listener to generate button
generateBtn.addEventListener('click', writeAbilities);