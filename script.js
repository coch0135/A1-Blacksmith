// Assignment 1: Blacksmith — The Tiny Forge

// PLAN: Write a short pseudocode plan for making a sword here.
// pseudocode plan for makeSword:
// function makeSword(){
//     if(forgeHeat >= 30){
//         forgeHeat = forgeHeat - 30
//         // ++ means +1, works the same with -- (Taro)
//         swordCount++
//         updateForge()
//         return "sword created"
//     }
//     else{
//         updateForge()
//         return "not enough heat"
//     }
// }

//(From Directions) Build in this order:
// Select the existing page elements and create the two state variables.
// Build getForgeStatus() and updateForge().
// Build resetForge() and call it to initialize the page.
// Build and test heatForge(amount).
// Build and test both outcomes of makeSword().

//My code starts here

// 1. Select the forge, heat, sword count, status, image, and message elements.
//    Find their IDs in index.html.
// ELEMENT VARIABLES
const $forge = document.getElementById("forge")
const $heatValue= document.getElementById("heat-value")
const $swordCount = document.getElementById("sword-count")
const $forgeImage = document.getElementById("forge-image")
const $forgeStatus = document.getElementById("forge-status")
const $forgeMessage = document.getElementById("action-message")

// 2. Create the two state variables: heat and swords made.
// STATE VARIABLES
let forgeHeat = 20
let swordCount = 0 

// FUNCTIONS

// 3. Write getForgeStatus(heatValue). Return the correct status string.
// Use if / else if / else to choose the status from the table above (Brightspace).
// Return the status as a string.
// Keep this function focused on choosing a value; it should not change the page.
function getForgeStatus(heatValue){

}

// 4. Write updateForge(). Update text and apply one status class.
//    Change the supplied forge image src and alt to match the heat.
//    Keep the most recent action message visible.
// Display the current heat and sword count using textContent.
// Call getForgeStatus() and display its returned value.
// Use classList to apply the matching starter CSS class: is-cold, is-ready, or is-roaring.
// Remove the previous status classes so only one remains.
// Update the supplied image’s src and alt attributes to match the heat, as in the monster demo (Brightspace chart in assignment instructions)
// Call resetForge() once when the script loads so the page starts in the correct state.
function updateForge(){

}

// 5. Write resetForge(). Restore the state, message, and display.
// Restore heat to 20 and swords made to 0.
// Replace the previous action message with a starting message.
// Call updateForge().
function resetForge(){

}

// 6. Write heatForge(amount). Add heat, cap it, and update the page.
// Add amount to the current heat.
// Stop the heat at 100 if the addition would exceed 100.
// Display a short message confirming that the forge was heated.
// Call updateForge().
// For this assignment, the player will supply whole-number amounts from 0 to 100. You do not need to handle text, missing arguments, or other invalid inputs.
// Example command: heatForge(20).
function heatForge(amount){

}

// 7. Write makeSword(). Handle both success and insufficient heat.
// If heat is at least 30, subtract 30 heat and add one sword.
// Display a success message when a sword is made.
// Otherwise, leave both numbers unchanged and display a message explaining that more heat is needed.
// Call updateForge() after either result.
// Exactly 30 heat is enough. Each call makes at most one sword.
function makeSword(){

}

// 8. Call resetForge() once to start the game.
resetForge()

// Use the tests in ASSIGNMENT.md to check your work.