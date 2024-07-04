document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.querySelectorAll('addButton');
    document.querySelectorAll('button.border-a').forEach(button => {
        button.addEventListener('click', () => { incrementQty() })
    })
    // console.log(infoButtons)
})

const incrementQty = () => {
    const beerProducts = document.querySelectorAll('.beer-item')
    // const beerId = document.getAttribute('data-name')
    console.log(beerProducts)
    beerProducts.forEach(beer => beer.addEventListener('click', () => console.log(beer.dataset.id)))
    // const inputQty = document.querySelectorAll('input')
    // console.log(inputQty)
}