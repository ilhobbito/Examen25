const url = "https://fakestoreapi.com/products/"
const shop = document.getElementById("shop")

fetch(url)
    .then(function(response) { return response.json() })
    .then(function(data){

        let products = data

       // <div class="card">
       //   <img src="bild.jpg">
       //   <h3>Produktnamnet</h3>
       //   <p class="price">$123</p>
       //   <p class="description">En fin produkt</p>
       //   <input type="button" value="Add to cart" onclick="addtocart(1)">
       // </div>

        products.map(function(product){
            console.log(product)

            let card = document.createElement("div")
            card.setAttribute("class", "card")

            let img = document.createElement("img")
            img.src = product.image

            let title = document.createElement("h3")
            title.innerHTML = product.title

            let price = document.createElement("p")
            price.innerHTML = product.price
            price.setAttribute("class", "price")

            let description = document.createElement("p")
            description.setAttribute("class", "description")
            let maxlength = 400
            let trimmedDescription = product.description.length > maxlength ?
                product.description.substring(0, maxlength - 3) + "..." :
                product.description

            description.innerHTML = trimmedDescription

            let buybutton = document.createElement("input")
            buybutton.setAttribute("type", "button")
            buybutton.setAttribute("value", "Lägg i varukorg")
            buybutton.setAttribute("onclick", "addtocart(" + product.id + ")")


            card.appendChild(img)
            card.appendChild(title)
            card.appendChild(price)
            card.appendChild(description)
            card.appendChild(buybutton)

            shop.appendChild(card)



        })



    })
    .catch(function(error){
        console.log("Något gick fel: ", error)
    })


    function addtocart(id)
    {
        alert("Produkt tillagd: " + id)
    }