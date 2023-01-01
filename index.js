let homeScore = document.getElementById("homeScore"), 
guestScore = document.getElementById("guestScore"), scoreHome = 0 ,scoreAway = 0, displayTimer = document.getElementById("display"), startGame = document.getElementById("startGame-btn"), isShow = true, currentQuarter = document.getElementById("quarter"),
newGame = document.getElementById("newGame-btn")

function addOneHome(){
    scoreHome += 1
    homeScore.textContent = scoreHome
}

function addTwoHome(){
    scoreHome += 2
    homeScore.textContent = scoreHome
}

function addThreeHome(){
    scoreHome += 3
    homeScore.textContent = scoreHome
}

function addOneGuest(){
    scoreAway += 1
    guestScore.textContent = scoreAway
}

function addTwoGuest(){
    scoreAway += 2
    guestScore.textContent = scoreAway
}

function addThreeGuest(){
    scoreAway += 3
    guestScore.textContent = scoreAway
}

function reset(){
    scoreHome = 0
    scoreAway = 0
    homeScore.textContent = scoreHome
    guestScore.textContent = scoreAway
    displayTimer.textContent = "12:00"
    if(isShow){
        startGame.style.display = "Inline"
        newGame.style.display = "None"
    }
    currentQuarter.textContent = "Q1"
}


function start(){
    const startTime = 12
    let countDown = startTime * 60
    let refreshIntervalId = setInterval(updateCountdown, 1000)
    currentQuarter.textContent = "Q1"
    newGame.style.display = "none"
    scoreAway = 0
    scoreHome = 0

    
    function updateCountdown(){
        let minutes = Math.floor(countDown/ 60)
        let seconds = countDown % 60
        
        seconds = seconds < 10 ? '0' + seconds : seconds
        minutes = minutes < 10 ? '0' + minutes : minutes
            
        displayTimer.innerText = `${minutes}:${seconds}`
        countDown--;
        
        if(countDown < 0){
            if(countDown < 0 && currentQuarter.textContent === "Q1"){
                currentQuarter.textContent = "Intermission 1"
                countDown = (60 * 2) + 10
            }
            else if(countDown < 0 && currentQuarter.textContent === "Intermission 1"){
                currentQuarter.textContent = "Q2"
                countDown = startTime * 60
            }
            else if(countDown < 0 && currentQuarter.textContent === "Q2"){
                currentQuarter.textContent = "Half-time"
                countDown = startTime + 180
            }
            else if(countDown < 0 && currentQuarter.textContent === "Half-time"){
                currentQuarter.textContent = "Q3"
                countDown = startTime * 60
            }
            else if(countDown < 0 && currentQuarter.textContent === "Q3"){
                currentQuarter.textContent = "Intermission 2"
                countDown = (60 * 2) + 10
            }
            else if(countDown < 0 && currentQuarter.textContent === "Intermission 2"){
                currentQuarter.textContent = "Q4"
                countDown = startTime * 60
            }
            else if(countDown < 0 && currentQuarter.textContent === "Q4" && scoreHome == scoreAway){
                currentQuarter.textContent = "OT"
                countDown = 300
            }
            else if(countDown < 0 && currentQuarter.textContent === "OT"){
                currentQuarter.textContent = "End of Regulation!"
                countDown = 0
                clearInterval(refreshIntervalId)
                if(isShow){
                    newGame.style.display = "Inline"
                }
            }
            else if(countDown < 0 && currentQuarter.textContent === "Q4"){
                currentQuarter.textContent = "End of Regulation!"
                countDown = 0
                clearInterval(refreshIntervalId)
                if(isShow){
                    newGame.style.display = "Inline"
                }
            }
            else{
                currentQuarter.textContent = "Error!"
                countDown = 0
                clearInterval(refreshIntervalId)
            }
        }
    }
    startGame.style.display = "none"
}
