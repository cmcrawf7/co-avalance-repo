import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-database-3aef6-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const dbList = ref(database, "kudoslist")


const kudosEl = document.getElementById("kudos-box")
const publishBtn = document.getElementById("publish-btn")
const kudosListEl = document.getElementById("kudos-list")
const clearBtn = document.getElementById("clear-btn")


publishBtn.addEventListener("click", function() {
    let inputValue = kudosEl.value

    push(dbList, inputValue)

    clearKudosField()
})

clearBtn.addEventListener("dblclick", function() {
    remove(dbList, "kudoslist")
    clearKudosList()
})


onValue(dbList, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())

        clearKudosList()

        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]

            appendItemToKudosList(currentItem)
        }
    } else {
        kudosListEl.innerHTML = "No Kudos to be found... yet"
    }
})

function clearKudosList() {
    kudosListEl.innerHTML = ""
}

function clearKudosField() {
    kudosEl.value = ""
}

function appendItemToKudosList(item) {
    let itemValue = item[1]

    let newEl = document.createElement("li")

    newEl.textContent = itemValue


    kudosListEl.append(newEl)
}


