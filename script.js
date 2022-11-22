let sub= document.getElementById("sub")
let answar= document.getElementById("answar")
let container= document.getElementById("container")

sub.addEventListener("click", function() {
    let answerUser= prompt ("nombre")
    answar.innerText= answerUser
})
let sub1= document.getElementById("sub1")
let answar1= document.getElementById("answar1")

sub1.addEventListener("click", function() {
    let answerUser1= prompt ("nombre")
    answar1.innerText= answerUser1
})

container.addEventListener("dblclick", function() {
    answar.innerText= ""
    answar1.innerText= ""
})

// argentina

let subArg= document.getElementById("subArg")
let answarArg= document.getElementById("answarArg")
let container2= document.getElementById("container2")

subArg.addEventListener("click", function() {
    let answerUserArg= prompt ("nombre")
    answarArg.innerText= answerUserArg
})
let subArg1= document.getElementById("subArg1")
let answarArg1= document.getElementById("answarArg1")

subArg1.addEventListener("click", function() {
    let answerUserArg1= prompt ("nombre")
    answarArg1.innerText= answerUserArg1
})
container2.addEventListener("dblclick", function() {
    answarArg.innerText= ""
    answarArg1.innerText= ""
})


// alemania

let subAle= document.getElementById("subAle")
let answarAle= document.getElementById("answarAle")
let container3= document.getElementById("container3")

subAle.addEventListener("click", function() {
    let answerUserAle= prompt ("nombre")
    answarAle.innerText= answerUserAle
})
let subAle1= document.getElementById("subAle1")
let answarAle1= document.getElementById("answarAle1")

subAle1.addEventListener("click", function() {
    let answerUserAle1= prompt ("nombre")
    answarAle1.innerText= answerUserAle1
})
container3.addEventListener("dblclick", function() {
    answarAle.innerText= ""
    answarAle1.innerText= ""
})



