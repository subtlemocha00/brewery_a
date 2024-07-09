import beerList from './beerList.js';

const incrementQty = () => {
    // const beerId = document.getAttribute('data-name')
    console.log("beerProducts")
    const inputQty = document.querySelectorAll('input')
    console.log(inputQty)
}

document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.querySelectorAll('addButton');
    document.querySelectorAll('button.border-a').forEach(button => {
        button.addEventListener('click', () => { incrementQty() })
    })
    // console.log(infoButtons)
    const beerProducts = document.querySelectorAll('.beer-item')
    beerProducts.forEach(beer => beer.addEventListener('click', () => console.log(beer.dataset.id)))


    const productUl = document.getElementById('productUl');
    const productsDiv = document.getElementById('products');
    const placeholderDiv = document.createElement('div');
    placeholderDiv.classList.add("col-12", "col-md-4", "my-3")
    console.log(beerList)
    beerList.map(beer => {
        const beerCard = document.createElement('li');
        beerCard.classList.add("col-12", "col-md-4", "my-3")
        beerCard.innerHTML = `
                <div class="card p-1 bg-b rounded-0 border-c h-100">
                    <img src="${beer.image}" alt="Properly Pixelated" class="img-fit-h p-1 fade-in">
                    <div class="card-body text-c d-flex flex-column h-100">
                        <h5 class="fw-bold mb-3">${beer.name}</h5>
                        <button id="" class="btn text-a border-a rounded-0 mt-auto" data-bs-toggle="modal"
                            data-bs-target="#${beer.id}">More Info</button>
                    </div>
                </div>`

        const modal = document.createElement('div');
        modal.innerHTML = `
        <div class="modal fade" id=${beer.id} tabindex="-1" aria-labelledby="beer-card" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-width border-c container row mx-auto bg-b"
                role="document">
                <div class="modal-content bg-b border-0 p-3 d-flex flex-md-row">
                    <div class="col-12 col-md-5 mb-2 border-c">
                        <img class="img-fit" src="${beer.image}" alt="product image">
                    </div>
                    <div class="col-12 col-md-7 mt-2 mt-md-0 d-flex flex-column ps-md-5">
                        <div class="beer-item" data-id="b1">
                            <h2 class="">${beer.name}</h2>
                            <h4 class="text-e">${beer.style}</h4>
                            <h6 class="text-e">${beer.abv} ABV</h6>
                            <p class="mt-2">${beer.description}</p>
                            <div class="row my-4 justify-content-between">
                                <div class="size col btn bg-b text-c border-c text-nowrap">Single</div>
                                <div class="size col btn bg-b text-c border-c text-nowrap">6-Pack</div>
                                <div class="size col btn bg-b text-c border-c text-nowrap">24-Pack</div>
                            </div>
                            <div class="row justify-content-center">
                                <button class="btn bg-c rounded-circle w-auto">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <label class="visually-hidden form-check-label" for="b${beer.id}">Quantity</label>
                                <input id="b${beer.id}" data-id=${beer.id} type="number" value="1" min="1" max="100" class="w-auto text-center mx-3">
                                <button class="btn bg-c rounded-circle w-auto" onclick="incrementQty()">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                            <div class="row justify-content-center">
                                <a href="#" class="btn bg-c rounded-pill p-sm-3 px-sm-5 mx-auto mt-3 w-auto">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        productUl.append(beerCard)
        productsDiv.append(modal)
    })
    if (beerList.length % 3 === 2) {
        productUl.append(placeholderDiv)
    }
    if (beerList.length % 3 === 1) {
        productUl.append(placeholderDiv)
        productUl.append(placeholderDiv)
    }


})

