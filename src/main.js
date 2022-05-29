const ListProduct = [
    {
        id: 1,
        name:"Big and Juicy Wagyu Beef Cheeseburger",
        price:30,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"./image/home/popular-item-2.png",
        category:1
    },
    {
        id: 2,
        name:"Fresh Lime Roasted Salmon",
        price:10,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"./image/home/popular-item-2.png",
        category:1
    },
    {
        id: 3,
        name:"The Best Easy One Pot Chicken and Rice",
        price:20,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"./image/home/popular-item-2.png",
        category: 3
    },
    {
        id: 4,
        name:"Fresh and Healthy Mixed Mayonnaise ",
        price:50,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"./image/home/popular-item-2.png",
        category: 4
    },
    {
        id: 5,
        name:"The Creamiest Creamy Chicken",
        price:60,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"./image/home/popular-item-2.png",
        category: 5
    },
    {
        id: 6,
        name:"Fruity Pancake with Orange & Blueberry",
        price:15,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"./image/home/popular-item-2.png",
        category: 6
    }
]

const ListCategory = [
    {
        id:1,
        name:"breakfast",
        image:"./image/home/breakfast.png"
    },
    {
        id:2,
        name:"vegan",
        image:"./image/home/breakfast.png"
    },
    {
        id:3,
        name:"meat",
        image:"./image/home/breakfast.png"
    },
    {
        id:4,
        name:"dessert",
        image:"./image/home/breakfast.png"
    },
    {
        id:5,
        name:"lunch",
        image:"./image/home/breakfast.png"
    },
    {
        id:6,
        name:"chocolate",
        image:"./image/home/breakfast.png"
    }
]

const ListUser = [
    {
        id:1,
        email:"sontv@gmail.com",
        password:"123456",
        role:1
    },
    {
        id:2,
        email:"thienth@gmail.com",
        password:"123456",
        role:0
    },
    {
        id:3,
        email:"minhdq@gmail.com",
        password:"123456",
        role:0
    },
    {
        id:4,
        email:"datlt@gmail.com",
        password:"123456",
        role:1
    }
    
]

var popularList = document.querySelector(".popular-list")

function listPopularProduct(data){
    if(popularList){
        popularList.innerHTML = data.map(function(item){
            return `
                <div class="popular__item">
                    <img src="${item.image}" alt="">
                    <h3><a href="detail.html?id=${item.id}">${item.name}</a></h3>
                    <p>
                        <img src="./image/home/Timer.png" alt="">
                        <span>30 Minutes</span>
                        <img src="./image/home/ForkKnife.png" alt="">
                        <span>Snack</span>
                    </p>
                </div>
            `
        }).join("")
    }   
}
listPopularProduct(ListProduct)


const productInfo = document.querySelector(".product-info")
function detailProduct(){
    const prdId = new URLSearchParams(window.location.search).get('id');
    if(prdId){
        const result = ListProduct.find(function(item){
            return item.id == prdId
        })
        console.log(result);
        productInfo.innerHTML = `
            <h2>${result.name}</h2>
            <p class="price">$ ${result.price}</p>
            <p class="desc">${result.desc}</p>
            <form action="">
                <input type="text" placeholder="Quantity">
                <button type="submit">Add To Cart</button>
            </form>
        `
    }
}
detailProduct()


const showCategory = document.querySelector(".category__list")
function listCategory(){
    if(showCategory){
        showCategory.innerHTML = ListCategory.map(function(item){
            return `
                <div class="category__item">
                    <img src="${item.image}" alt="">
                    <p>${item.name}</p>
                </div>
            `
        }).join("")
    }
}
listCategory()


const filterSelect = document.querySelector("#filter-select")
function filterPrice(){
    const under30 = ListProduct.filter(function(item){
        return item.price < 30;
    })
    const over30 = ListProduct.filter(function(item){
        return item.price >= 30;
    }) 
    if(filterSelect.value == "all"){
        listPopularProduct(ListProduct)
    }
    if(filterSelect.value == "under30"){
        listPopularProduct(under30)
    }
    if(filterSelect.value == "over30"){
        listPopularProduct(over30)
    }
}
if(filterSelect){
    filterSelect.addEventListener("change",filterPrice)
}


/* ----------- Sign in ----------- */ 

// const formSignIn = document.querySelector("#signin-form")
// function signIn(e){
//     e.preventDefault()
//     const email = document.querySelector("#email")
//     const password = document.querySelector("#password")
//     for(let item of ListUser){
//         if(item.email == email.value && item.password == password.value){
//             if(item.role == 1){
//                 window.location = '../backend/dashboard.html'
//             }else{
//                 console.log(item);
//                 window.location = '/index.html'
//             }
//         }else{
//             return false
//         }
//     }
// }
// formSignIn.addEventListener("submit",signIn)


/* ----------- Product Page ----------- */ 

const productElement = document.querySelector("#list-product")
function listProductPage(data){
    if(productElement){
        productElement.innerHTML = data.map(function(item){
            return `
                <div class="popular__item">
                    <img src="${item.image}" alt="">
                    <h3><a href="detail.html?id=${item.id}">${item.name}</a></h3>
                    <p>
                        <img src="./image/home/Timer.png" alt="">
                        <span>30 Minutes</span>
                        <img src="./image/home/ForkKnife.png" alt="">
                        <span>Snack</span>
                    </p>
                </div>
            `
        }).join("")
    }   
}
listProductPage(ListProduct)

const categoryElement = document.querySelector("#cate-list")
function prdPageCategory(data){
    if(categoryElement){
        categoryElement.innerHTML = data.map(function(item){
            return `
                <li><a href="products.html?cateId=${item.id}">${item.name}</a></li>
            `
        }).join("")
    }
}
prdPageCategory(ListCategory)

function filterCategory(){
    const cateId = new URLSearchParams(window.location.search).get('cateId')
    console.log(cateId);
    if(cateId){
        productElement.innerHTML = ListProduct.map(function(item){
            if(item.category == cateId){
                return `
                <div class="popular__item">
                    <img src="${item.image}" alt="">
                    <h3><a href="detail.html?id=${item.id}">${item.name}</a></h3>
                    <p>
                        <img src="./image/home/Timer.png" alt="">
                        <span>30 Minutes</span>
                        <img src="./image/home/ForkKnife.png" alt="">
                        <span>Snack</span>
                    </p>
                </div>
            `
            }else{
                
            }
        }).join("")
    }
}
filterCategory()