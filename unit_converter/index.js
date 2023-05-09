const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")

const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")

let lengthCalcImp = 0
let lengthCalcMet = 0
let volumeCalcImp = 0
let volumeCalcMet = 0
let massCalcImp = 0
let massCalcMet = 0


convertBtn.addEventListener("click", function () {
    calcLen()
        lengthEl.textContent = renderLength(lengthCalcImp, lengthCalcMet)

    calcVol()
        volumeEl.textContent = renderVolume(volumeCalcImp, volumeCalcMet)

    calcMass()
        massEl.textContent = renderMass(massCalcImp, massCalcMet)
})

function calcLen() {
    lengthCalcImp = (inputEl.value * 3.28084).toFixed(3)
    lengthCalcMet = (inputEl.value / 3.28084).toFixed(3)
        return [lengthCalcImp, lengthCalcMet]
} function calcVol() {
    volumeCalcImp = (inputEl.value * 0.264172).toFixed(3)
    volumeCalcMet = (inputEl.value / 0.264172).toFixed(3)
        return [volumeCalcImp, volumeCalcMet]
} function calcMass() {
    massCalcImp = (inputEl.value * 2.20462).toFixed(3)
    massCalcMet = (inputEl.value / 2.20462).toFixed(3)
    return[massCalcImp, massCalcMet]
} function renderLength(imperial, meters) {
    return `${inputEl.value} meters = ${imperial} feet | ${inputEl.value} feet = 
                                ${meters} meters`
} function renderVolume(imperial, meters) {
    return `${inputEl.value} liters = ${imperial} gallons | ${inputEl.value} gallons = 
                                ${meters} liters`
} function renderMass(imperial, meters) {
    return `${inputEl.value} kilos = ${imperial} pounds | ${inputEl.value} pounds = 
                                ${meters} kilos`
}
