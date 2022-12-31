let homeScore = document.getElementById("homeScore"), guestScore = document.getElementById("guestScore"), scoreHome = 0 ,scoreAway = 0, displayTimer = document.getElementById("display"), startGame = document.getElementById("startGame-btn"), isShow = true, currentQuarter = document.getElementById("quarter")

const startTime = 12
let countDown = startTime * 60

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
    }
    currentQuarter.textContent = "Q1"
}


function start(){
    let refreshIntervalId = setInterval(updateCountdown, 1000)
    
    function updateCountdown(){
        let minutes = Math.floor(countDown/ 60)
        let seconds = countDown % 60
        
        seconds = seconds < 10 ? '0' + seconds : seconds
        minutes = minutes < 10 ? '0' + minutes : minutes
            
        displayTimer.innerText = `${minutes}:${seconds}`
        countDown--;
        
        if(countDown < 0){
           countDown = 0
           clearInterval(refreshIntervalId)
           currentQuarter.textContent = "Q2"
        }

    }
    
    startGame.style.display = "none"
}