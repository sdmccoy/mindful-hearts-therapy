'use strict';


let initElement = (event) => {
  console.log(event.target.parentNode)
  let parent = event.target.parentNode
  parent.hidden = true
  setTimeout(showme, 2000, parent)
}

let showme = (parent) => {
  parent.hidden = false
}
let x = document.getElementById("hitme")

x.addEventListener("click", initElement)