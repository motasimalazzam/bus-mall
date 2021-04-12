'use strict';

let allImages = document.getElementById('all-images');
let result = document.getElementById('result');
let button = document.getElementById('button');
let leftImage = document.getElementById('left-image');
let centerImage = document.getElementById('center-image');
let rightImage = document.getElementById('right-image');

let maxAttempt = 25;
let userAttempt = 0;

let leftIndex;
let centerIndex;
let rightIndex;

function Product(name, source) {
    this.name = name;
    this.source = source;
    this.votes = 0;
    this.views = 0;
    Product.allProducts.push(this);
}
Product.allProducts = [];
console.log('products array', Product.allProducts = []);

// create objects

new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('bubblegum', 'img/bubblegum.jpg');
new Product('chair', 'img/chair.jpg');
new Product('cthulhu', 'img/cthulhu.jpg');
new Product('dog-duck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('pet-sweep', 'img/pet-sweep.jpg');
new Product('scissors', 'img/scissors.jpg');
new Product('shark', 'img/shark.jpg');
new Product('sweep', 'img/sweep.png');
new Product('tauntaun', 'img/tauntaun.jpg');
new Product('unicorn', 'img/unicorn.jpg');
new Product('usb', 'img/usb.gif');
new Product('water-can', 'img/water-can.jpg');
new Product('wine-glass', 'img/wine-glass.jpg');

//  generat random index

function getRandomIndex() {
    return Math.floor(Math.random() * Product.allProducts.length);
}

// create render

function renderThreeImages() {
    leftIndex = getRandomIndex();
    centerIndex = getRandomIndex();
    rightIndex = getRandomIndex();
    while (leftIndex === centerIndex || leftIndex === rightIndex || centerIndex === rightIndex) {
        centerIndex = getRandomIndex();
        rightIndex = getRandomIndex();
        while (centerIndex === rightIndex) {
            rightIndex = getRandomIndex();
        }
    }
    leftImage.src = Product.allProducts[leftIndex].source;
    centerImage.src = Product.allProducts[centerIndex].source;
    rightImage.src = Product.allProducts[rightIndex].source;

    Product.allProducts[leftIndex].views++;
    Product.allProducts[centerIndex].views++;
    Product.allProducts[rightIndex].views++;

}

// handle clicking

allImages.addEventListener('click', handelClick);
alert('You have 25 attempts');
function handelClick(event) {
    userAttempt++;
    

    if (userAttempt < maxAttempt) {
        if (event.target.id === 'left-image') {
            Product.allProducts[leftIndex].votes++;
        } else if (event.target.id === 'center-image') {
            Product.allProducts[centerIndex].votes++;
        } else if (event.target.id === 'right-image') {
            Product.allProducts[rightIndex].votes++;
        }

    } else {
        allImages.removeEventListener('click', handelClick);
        button.addEventListener('click', allResult);
        let list = document.createElement('ul');
        result.appendChild(list);

        function allResult() {
            for (let i = 0; i < Product.allProducts.length; i++) {
                let resultList = document.createElement('li');
                list.appendChild(resultList);
                resultList.textContent = `${Product.allProducts[i].name} had ${Product.allProducts[i].votes} votes, and was seen ${Product.allProducts[i].views} times`;
                console.log('result', resultList);
                if (userAttempt=maxAttempt){
                button.removeEventListener('click', allResult);
                }
            }

        }

    }



    console.log(Product.allProducts);
    renderThreeImages();
}
console.log(Product.allProducts);

renderThreeImages();

