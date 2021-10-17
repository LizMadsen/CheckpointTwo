let spawnCollected = 0
let winCondition = 120

function mine() {
    let core1CB = clickUpgrades.core1.quantity * clickUpgrades.core1.clickBonus
    let core2CB = clickUpgrades.core2.quantity * clickUpgrades.core2.clickBonus
    let queenZealCB = clickUpgrades.queenZeal.quantity * clickUpgrades.queenZeal.clickBonus
    let schalaCB = clickUpgrades.schala.quantity * clickUpgrades.schala.clickBonus
    spawnCollected = spawnCollected + core1CB + core2CB + schalaCB + queenZealCB + 1
    checkForWin()
    updateSCUI()
}

function updateAutoUI() {
    let magusAutoUp = automaticUpgrades.magus.quantity * automaticUpgrades.magus.autoBonus
    let daltonAutoUp = automaticUpgrades.dalton.quantity * automaticUpgrades.dalton.autoBonus
    let totalAutoUp = magusAutoUp + daltonAutoUp
    document.getElementById('autoUpgradeTally').innerText = totalAutoUp.toString()
}

function updateClickUI() {
    let core1ClickUp = clickUpgrades.core1.quantity * clickUpgrades.core1.clickBonus
    let core2ClickUp = clickUpgrades.core2.quantity * clickUpgrades.core2.clickBonus
    let queenZealClickUp = clickUpgrades.queenZeal.quantity * clickUpgrades.queenZeal.clickBonus
    let schalaClickUp = clickUpgrades.schala.quantity * clickUpgrades.schala.clickBonus
    let totalClickUp = core1ClickUp + core2ClickUp + queenZealClickUp + schalaClickUp
    document.getElementById('clickUpgradeTally').innerText = totalClickUp.toString()
}

function updateSCUI() {
    document.getElementById('spawnCollected').innerText = spawnCollected.toString()
    if (spawnCollected >= automaticUpgrades.magus.price) {
        disableMagusbtn(false)
    } else {
        disableMagusbtn(true)
    }
    if (spawnCollected >= automaticUpgrades.dalton.price) {
        disableDaltonbtn(false)
    } else {
        disableDaltonbtn(true)
    }
    if (spawnCollected >= clickUpgrades.core1.price) {
        disableC1btn(false)
    } else {
        disableC1btn(true)
    }
    if (spawnCollected >= clickUpgrades.core2.price) {
        disableC2btn(false)
    } else {
        disableC2btn(true)
    }
    if (spawnCollected >= clickUpgrades.queenZeal.price) {
        disableZealbtn(false)
    } else {
        disableZealbtn(true)
    }
    if (spawnCollected >= clickUpgrades.schala.price) {
        disableSchalabtn(false)
    } else {
        disableSchalabtn(true)
    }
}

// Purchase Functions

function buyMagus() {
    automaticUpgrades.magus.quantity++
    document.getElementById('magusCollected').innerText = automaticUpgrades.magus.quantity.toString()
    spawnCollected -= automaticUpgrades.magus.price
    automaticUpgrades.magus.price = Math.floor(automaticUpgrades.magus.price * automaticUpgrades.magus.inflation)
    document.getElementById('magusCostElem').innerText = automaticUpgrades.magus.price.toString()
    updateSCUI()
    updateAutoUI()
}

function buyDalton() {
    automaticUpgrades.dalton.quantity++
    document.getElementById('daltonCollected').innerText = automaticUpgrades.dalton.quantity.toString()
    spawnCollected -= automaticUpgrades.dalton.price
    automaticUpgrades.dalton.price = Math.floor(automaticUpgrades.dalton.price * automaticUpgrades.dalton.inflation)
    document.getElementById('daltonCostElem').innerText = automaticUpgrades.dalton.price.toString()
    updateSCUI()
    updateAutoUI()
}

function buyCore1() {
    clickUpgrades.core1.quantity++
    document.getElementById('core1Collected').innerText = clickUpgrades.core1.quantity.toString()
    spawnCollected -= clickUpgrades.core1.price
    clickUpgrades.core1.price = Math.floor(clickUpgrades.core1.price * clickUpgrades.core1.inflation)
    document.getElementById('core1CostElem').innerText = clickUpgrades.core1.price.toString()
    updateSCUI()
    updateClickUI()
}

function buyCore2() {
    clickUpgrades.core2.quantity++
    document.getElementById('core2Collected').innerText = clickUpgrades.core2.quantity.toString()
    spawnCollected -= clickUpgrades.core2.price
    clickUpgrades.core2.price = Math.floor(clickUpgrades.core2.price * clickUpgrades.core2.inflation)
    document.getElementById('core2CostElem').innerText = clickUpgrades.core2.price.toString()
    updateSCUI()
    updateClickUI()
}

function buyZeal() {
    clickUpgrades.queenZeal.quantity++
    document.getElementById('zealCollected').innerText = clickUpgrades.queenZeal.quantity.toString()
    spawnCollected -= clickUpgrades.queenZeal.price
    clickUpgrades.queenZeal.price = Math.floor(clickUpgrades.queenZeal.price * clickUpgrades.queenZeal.inflation)
    document.getElementById('zealCostElem').innerText = clickUpgrades.queenZeal.price.toString()
    updateSCUI()
    updateClickUI()
}

function buySchala() {
    clickUpgrades.schala.quantity++
    document.getElementById('schalaCollected').innerText = clickUpgrades.schala.quantity.toString()
    spawnCollected -= clickUpgrades.schala.price
    clickUpgrades.schala.price = Math.floor(clickUpgrades.schala.price * clickUpgrades.schala.inflation)
    document.getElementById('schalaCostElem').innerText = clickUpgrades.schala.price.toString()
    updateSCUI()
    updateClickUI()
}

// Buy Buttons toggle

function disableMagusbtn(value) {
    if (value) { document.getElementById("buyMagusButton").setAttribute('disabled', 'disabled') }
    else {
        document.getElementById("buyMagusButton").removeAttribute('disabled')
    }
}

function disableDaltonbtn(value) {
    if (value) { document.getElementById("buyDaltonButton").setAttribute('disabled', 'disabled') }
    else {
        document.getElementById("buyDaltonButton").removeAttribute('disabled')
    }
}

function disableC1btn(value) {
    if (value) { document.getElementById("buyCore1Button").setAttribute('disabled', 'disabled') }
    else {
        document.getElementById("buyCore1Button").removeAttribute('disabled')
    }
}

function disableC2btn(value) {
    if (value) { document.getElementById("buyCore2Button").setAttribute('disabled', 'disabled') }
    else {
        document.getElementById("buyCore2Button").removeAttribute('disabled')
    }
}

function disableZealbtn(value) {
    if (value) { document.getElementById("buyZealButton").setAttribute('disabled', 'disabled') }
    else {
        document.getElementById("buyZealButton").removeAttribute('disabled')
    }
}

function disableSchalabtn(value) {
    if (value) { document.getElementById("buySchalaButton").setAttribute('disabled', 'disabled') }
    else {
        document.getElementById("buySchalaButton").removeAttribute('disabled')
    }
}

disableMagusbtn(true)
disableDaltonbtn(true)
disableC1btn(true)
disableC2btn(true)
disableZealbtn(true)
disableSchalabtn(true)

function startAutoUpgrades() {
    setInterval(magus, 3000)
    setInterval(dalton, 8000)
}

function magus() {
    let magusAB = automaticUpgrades.magus.quantity * automaticUpgrades.magus.autoBonus
    spawnCollected = spawnCollected + magusAB
    checkForWin()
    updateSCUI()
}

function dalton() {
    let daltonAB = automaticUpgrades.dalton.quantity * automaticUpgrades.dalton.autoBonus
    spawnCollected = spawnCollected + daltonAB
    checkForWin()
    updateSCUI()
}

startAutoUpgrades()

// Upgrade Key

let automaticUpgrades = {
    magus: {
        price: 50,
        inflation: 1.1,
        quantity: 0,
        autoBonus: 2,
    },
    dalton: {
        price: 80,
        inflation: 1.2,
        quantity: 0,
        autoBonus: 6,
    }
};

let clickUpgrades = {
    core1: {
        price: 100,
        inflation: 1.1,
        quantity: 0,
        clickBonus: 2
    },
    core2: {
        price: 200,
        inflation: 1.2,
        quantity: 0,
        clickBonus: 10
    },
    queenZeal: {
        price: 5000,
        inflation: 1.5,
        quantity: 0,
        clickBonus: 100
    },
    schala: {
        price: 10000,
        inflation: 2,
        quantity: 0,
        clickBonus: 800
    }
};

function checkForWin() {
    if (spawnCollected >= winCondition) {
        document.getElementById('winConditionElem').removeAttribute('hidden')
        document.getElementById('fullGameUIElem').setAttribute('hidden', 'hidden')
    }
}

checkForWin()

document.addEventListener('contextmenu', event => event.preventDefault());