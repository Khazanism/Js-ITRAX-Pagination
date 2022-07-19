let products = [
  "product1",
  "product2",
  "product3",
  "product4",
  "product5",
  "product6",
  "product7",
  "product8",
  "product9",
  "product10",
  "product11",
  "product12",
  "product13",
  "product14",
];

// Num of products 10
let productsperpage = 3;
// let pages = products.length / productsperpage;
let pages = Math.ceil(products.length / productsperpage);

// console.log(pages);


// DOM elements
let container = document.getElementById("data");
let paginationList = document.getElementById("pagination-list");

function createPaginationList() {
  for (var i = 1; i <= pages; i++) {
    paginationList.innerHTML += `
    <button onclick="displayProducts(${i})"> ${i} </button>
    `;
  }
}

createPaginationList();

function displayProducts(page) {
  let start = (page - 1) * productsperpage;
  let end = page * productsperpage;

  let productsToShowInPage = products.slice(start, end);
  // console.log(productsToShowInPage);

  // deleting products
  container.innerHTML = "";

  //writing the product number
  for (let i = 0; i < productsToShowInPage.length; i++) {
    container.innerHTML += `
    <p>${productsToShowInPage[i]}</p>
    `;
  }
}

displayProducts(1);

/*
let products = [
  "product1",
  "product2",
  "product3",
  "product4",
  "product5",
  "product6",
  "product7",
  "product8",
  "product9",
  "product10",
  "product11",
  "product12",
];

// num of product 10
let productsperpage = 2;
// let pages = products.length / productsperpage;
let pages = Math.ceil(products.length / productsperpage); // Math.ceil to round a number

// DOM Elms
let container = document.getElementById("data");
let paginationlist = document.getElementById("pagination-list");

function createpaginationlist(params) {
  for (var i = 0; i < pages; i++) {
    paginationlist.innerHTML += `
        <button onclick="displayproducts(${i})"> ${i + 1} </button>
        `;
  }
}

createpaginationlist();

function displayproducts(page) {
  let start = (page - 1) * productsperpage; // detect start index for pagination.
  let end = page * productsperpage;
  let productsToShowInPage = products.slice(start, end);

  container.innerHTML = "";
  for (var i = 0; i < productsToShowInPage.length; i++) {
    container.innerHTML += `<p> ${productsToShowInPage[i]} </p>`;
  }
}

displayproducts(1);
*/
