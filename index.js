const items = ["paper","rock","scissors"]

const play = document.getElementById("play")
const reset = document.getElementById("reset")
const mainModal = document.getElementById("mainModal")

function drawHand(){
    const index = Math.floor(Math.random()*3)
    return items[index] 
}

function renderFinal(won){
    if(won){
        return `
            <div>
                <h1>You Won &#x1F389</h1>
            </div>`
    }else{
        return `
            <div>
                <h1>You Lost &#x1F622</h1>
            </div>
        `
    }
}


class Player{
    constructor(name,gender){
        this.name = name;
        this.score = 0;
        this.hand = `${gender}`;
        this.won;
    }
    
    renderHTML(){
        return `
            <p>${this.name}: ${this.score}</p>
            <div class="img" id="computer">
                <img src="img/${this.hand}.png">
            </div>
        `
    }
        
}

let player = new Player("Omar","boy")
let computer = new Player("Computer","robot")

mainModal.innerHTML = `
    <div class="playerModal" id="thePlayer"></div>
    <img src="img/vs.png" id="vs">
    <div class="playerModal" id="theComputer"></div> 
    `
    
let thePlayer = document.getElementById("thePlayer")
let theComputer = document.getElementById("theComputer")

thePlayer.innerHTML = player.renderHTML()
theComputer.innerHTML = computer.renderHTML()


reset.addEventListener("click", ()=>{
    player = new Player("Omar","boy")
    computer = new Player("Computer","robot")
    
     mainModal.innerHTML = `
        <div class="playerModal" id="thePlayer"></div>
        <img src="img/vs.png" id="vs">
        <div class="playerModal" id="theComputer"></div> 
    `
    thePlayer = document.getElementById("thePlayer")
    theComputer = document.getElementById("theComputer")

    thePlayer.innerHTML = player.renderHTML()
    theComputer.innerHTML = computer.renderHTML()
    
    play.disabled = false
    
})

play.addEventListener("click", ()=>{
    player.hand = drawHand()
    computer.hand = drawHand()
    
    if( player.hand === "paper"){
        if(computer.hand === "paper"){
        }else if (computer.hand === "rock"){
            player.score++
        }else{
            computer.score++
        }
    }else if (player.hand === "rock"){
        if(computer.hand === "paper"){
            computer.score++
        }else if (computer.hand === "rock"){
        }else{
            player.score++
        }
    }else{
        if(computer.hand === "paper"){
            player.score++
        }else if (computer.hand === "rock"){
            computer.score++
        }else{
        }
    }
    
    if(player.score === 3){
        mainModal.innerHTML = renderFinal(true)
        play.disabled = true
    }else if (computer.score === 3){
        mainModal.innerHTML = renderFinal(false)
        play.disabled = true
    }
    
    thePlayer.innerHTML = player.renderHTML()
    theComputer.innerHTML = computer.renderHTML()   
})