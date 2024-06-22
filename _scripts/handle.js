const addBtn = document.querySelector(".addBtn");
const clear = document.querySelector(".clearBtn");

let options = Array.from(document.querySelectorAll("option"));
let products = document.querySelector(".products");
let addedProducts = Array.from(document.querySelectorAll(".showProduct"));
let productCount = 0;

/* Checando se armazenou os itens no array */
console.log(products);
addProduct();
clearBtn();
function addProduct() {
    addBtn.addEventListener("click", (e) => {
        let qtd = document.querySelector(".qtd").value;

        let item = document.createElement('li');


        productCount++;




        if (qtd != '') {

            document.querySelector(".showProduct").append(item);
            item.textContent = `${qtd}x ${options[products.value].textContent}`;

            addedProducts.push(item);


        }
        else {
            alert("erro - insira a quantidade");
        }
    })
}

function clearBtn() {
    clear.addEventListener("click", () => {
        addedProducts.pop();
        
        document.querySelector(".qtd").value = '';
        document.querySelector("ul").removeChild();
  
    })
  
}


