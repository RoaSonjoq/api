async function getProoduct(){
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    const products = data.products;
    const result = products.map(function(ele){
        return `
        <div class="products">
        <h2>${ele.title}</h2>
        <img src=${ele.thumbnai}/>
        <p>${ele.price}$</p>
        </div>
        `;
    }).join(' ');
    document.querySelector(".product").innerHTML=result;
}

getProoduct();