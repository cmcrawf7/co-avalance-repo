let homeScore = document.getElementById("home-score")
let awayScore = document.getElementById("away-score")
let homeFouls = document.getElementById("foul-count-home")
let awayFouls = document.getElementById("foul-count-away")

homeScoreCount = 0
awayScoreCount = 0
homeFoulCount = 0
awayFoulCount = 0

function add1PointHome() {
    homeScoreCount += 1
    homeScore.textContent = homeScoreCount
    highlightLeader()
} function add2PointHome() {
    homeScoreCount += 2
    homeScore.textContent = homeScoreCount
    highlightLeader()
} function add3PointHome() {
    homeScoreCount += 3
    homeScore.textContent = homeScoreCount
    highlightLeader()
} function add1PointAway() {
    awayScoreCount += 1
    awayScore.textContent = awayScoreCount
    highlightLeader()
} function add2PointAway() {
    awayScoreCount += 2
    awayScore.textContent = awayScoreCount
    highlightLeader()
} function add3PointAway() {
    awayScoreCount += 3
    awayScore.textContent = awayScoreCount
    highlightLeader()
}

function highlightLeader() {
    if (homeScoreCount > awayScoreCount) {
        homeScore.style.border = "2px solid yellow"
        awayScore.style.border = "none"
    } else if (awayScoreCount > homeScoreCount) {
        awayScore.style.border = "2px solid yellow"
        homeScore.style.border = "none"
    } else {
        awayScore.style.border = "none"
        homeScore.style.border = "none"
    }
}

function newGame() {
    homeScoreCount = 0
    homeFoulCount = 0
    awayScoreCount = 0
    awayFoulCount = 0
    homeScore.textContent = homeScoreCount
    homeFouls.textContent = homeFoulCount
    awayScore.textContent = awayScoreCount
    awayFouls.textContent = awayFoulCount
    highlightLeader()
}

function add1foulHome() {
    homeFoulCount += 1
    console.log(homeFoulCount)
    homeFouls.textContent = homeFoulCount
}function add1foulAway() {
    awayFoulCount += 1
    console.log(homeFoulCount)
    awayFouls.textContent = awayFoulCount
}
