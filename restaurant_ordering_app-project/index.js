import {menuArray} from "./data.js";

const checkoutBtn = document.getElementById('checkout-btn')
const payBtn = document.getElementById('pay-btn')
const ccForm = document.getElementById('cc-form')

function getItemsHTML() {

    let checkoutArray = []
    let pricesArray = []

    document.addEventListener('click', function(e){
    if(e.target.dataset.item){
        handleAddedItem(e.target.dataset.item)
            if (checkoutArray.length > 0) {
                renderItem()

                let checkoutTotal = document.getElementById('checkout-total')
                let sum=0
                pricesArray.forEach(function (item){
                    sum += item
                })
                checkoutTotal.textContent = `$${sum}`
            }
        }
    })

    function handleAddedItem(itemName) {
        const targetItemObject = menuArray.filter(function(item){
            return item.name === itemName
        })[0]
        checkoutArray.push(targetItemObject)
        pricesArray.push(targetItemObject.price)
        return [checkoutArray, pricesArray]
    }

    function renderItem() {
        const itemRender = document.getElementById('checkout-section')
        let itemHtml = ``
        document.querySelector('footer').style.display='inherit'
        checkoutArray.forEach(function (item) {
            itemHtml += `
                <div class="checkout-container">
                    <span class="ind-checkout-item">
                        <p class="checkout-item checkout-item-name">${item.name}</p>
                        <p class="checkout-item remove-item">remove item</p>
                    </span>
                    <div class="price-container">
                        <p class="checkout-item padding-top price">$${item.price}</p>
                    </div>
                </div>`
            itemRender.innerHTML = itemHtml
        })
    }


    let itemsHtml = ``
    menuArray.forEach(function (item) {
        itemsHtml += `
                    <li id="item" >
                        <div id="item-container">
                            <p id="emoji">${item.emoji}</p>
                            <ul id="item-description">
                                <li id="item-name">${item.name}</li>
                                <li id="item-contents">${item.ingredients}</li>
                                <li id="item-price">$${item.price}</li>
                            </ul>
                        </div>
                        <span>
                            <button class="add-item-btn" data-item="${item.name}">+</button>
                        </span>
                    </li>
        `
    })
    return itemsHtml
}

function render() {
    document.getElementById('menu-items').innerHTML = getItemsHTML()
}

checkoutBtn.addEventListener('click', function (){
    document.getElementById('modal').classList.toggle('hidden')
})

ccForm.addEventListener('submit', function (e) {
    e.preventDefault()

    document.getElementById('modal').classList.toggle('hidden')
    document.querySelector('footer').style.display='none'

    const ccFormData = new FormData(ccForm)
    const fullName = ccFormData.get('fullName')
    const thankYou = document.getElementById('thank-you')

    thankYou.textContent = `Thanks, ${fullName}! Your order is on the way!`
    // thankYou.style.display='inherit'


    // console.log(fullName)

})


render()


