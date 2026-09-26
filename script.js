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


// 1. Select the forge, heat, sword count, status, image, and message elements.
//    Find their IDs in index.html. - Done 

// 2. Create the two state variables: heat and swords made. - Done

// 3. Write getForgeStatus(heatValue). Return the correct status string.

// 4. Write updateForge(). Update text and apply one status class.
//    Change the supplied forge image src and alt to match the heat.
//    Keep the most recent action message visible.

// 5. Write resetForge(). Restore the state, message, and display.

// 6. Write heatForge(amount). Add heat, cap it, and update the page.

// 7. Write makeSword(). Handle both success and insufficient heat.

// 8. Call resetForge() once to start the game.

// Use the tests in ASSIGNMENT.md to check your work.

//(From Directions) Build in this order:
// Select the existing page elements and create the two state variables.
// Build getForgeStatus() and updateForge().
// Build resetForge() and call it to initialize the page.
// Build and test heatForge(amount).
// Build and test both outcomes of makeSword().

//My code starts here

// ELEMENT VARIABLES
const $forge = document.getElementById("forge")
const $heatValue= document.getElementById("heat-value")
const $swordCount = document.getElementById("sword-count")
const $forgeImage = document.getElementById("forge-image")
const $forgeStatus = document.getElementById("forge-status")
const $forgeMessage = document.getElementById("action-message")

// STATE VARIABLES
let forgeHeat = 20
let swordCount = 0 
