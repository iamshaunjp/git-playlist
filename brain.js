const body = document.querySelector("body")
const btn = document.querySelector("#btn")
const pee = document.querySelector("#pee")

let colors = ["gray","serpia","indigo","orange","violet","cyan","purple"]
const change_bg = ()=>{
  let random = Math.floor(Math.random()*colors.length)
  console.log(colors[random])
  body.style.backgroundColor = colors[random]
  pee.style.display = "block"
}

change_bg()
btn.addEventListener("click",change_bg)