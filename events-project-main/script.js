let display = document.querySelector("#color-display")

let aqua = document.querySelector("#aqua")
let teal = document.querySelector("#teal")
let pink = document.querySelector("#pink")
let purple = document.querySelector("#purple")
let colorless = document.querySelector("#colorless")

aqua.style.backgroundColor = "aqua"
teal.style.backgroundColor = "teal"
pink.style.backgroundColor = "pink"
purple.style.backgroundColor = "purple"
colorless.style.backgroundColor = "colorless"

aqua.onclick = function() {
    display.style.backgroundColor = "aqua"
    display.innerHTML = "aqua"
}

teal.onclick = function() {
    display.style.backgroundColor = "teal"
    display.innerHTML = "teal"
}

pink.onclick = function() {
    display.style.backgroundColor = "pink"
    display.innerHTML = "pink"
}

purple.onclick = function() {
    display.style.backgroundColor = "purple"
    display.innerHTML = "purple"
}

colorless.onclick = function() {
    display.style.backgroundColor = "white"
    display.innerHTML = "colorless"
}