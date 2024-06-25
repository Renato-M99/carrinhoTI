const addBtn = document.querySelector(".addBtn");//botão adicionar
const clear = document.querySelector(".clearBtn");//botão limpar

// armazenar as opções do select em um array 
let options = Array.from(document.querySelectorAll("option"));
// usar para indexar o array
let products = document.querySelector(".products");
//produtos adicionados 
let addedProducts = Array.from(document.querySelectorAll(".showProduct"));
let itens = document.querySelector('ul');
// preços num array:
let itensPrice = [29.90, 69.90, 129.90, 19.90, 69.90, 9.90];
// contagem geral de produtos adicionados no carrinho
let productCount = 0;
// preço total
let total = 0;



/* Checando se armazenou os itens no array */
console.log(products);
console.log(itens);
console.log(itensPrice);

addProduct();
clearBtn();

function addProduct() {
    addBtn.addEventListener("click", (e) => {
        let qtd = Number(document.querySelector(".qtd").value);

        let item = document.createElement('li');


        if (qtd != '' || qtd != 0) {
            productCount++;
            itens.append(item);
            item.textContent = `${qtd}x ${options[products.value].textContent}`;
            console.log(itensPrice[productCount - 1]);
            let currentPrice = itensPrice[productCount - 1] * qtd;
            
            
            
            
        
            
            addedProducts.push(item);
            
            total += currentPrice;
        
            document.querySelector('h3').innerText = `Total - R$ ${total.toFixed(2)} `;
           
            
        }
        else {
            alert("erro - insira a quantidade");
        }

        
       
    })
   
    
}

function clearBtn() {
    clear.addEventListener("click", (e) => {
   
        addedProducts.pop();
        document.querySelector(".qtd").value = '';
        document.querySelector("ul").innerHTML = '';
        document.querySelector('h3').innerText = '';
        total = 0;
    })
    
}



