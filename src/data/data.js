import { nanoid } from "nanoid"
import category1 from "/public/imgs/category1.png"
import category2 from "/public/imgs/category2.png"

import product1 from "/public/imgs/product1.png"
import product2 from "/public/imgs/product2.png"
import product3 from "/public/imgs/product3.png"
import product4 from "/public/imgs/product4.png"
import product5 from "/public/imgs/product5.png"
import product6 from "/public/imgs/product6.png"
import product7 from "/public/imgs/product7.png"
import product8 from "/public/imgs/product8.png"
import product9 from "/public/imgs/product9.png"
import product10 from "/public/imgs/product10.png"
import product11 from "/public/imgs/product11.png"
import product12 from "/public/imgs/product12.png"
import rating from "/public/icons/rating.svg"

import profile from "/public/icons/profile.svg"

import offer1 from "/public/imgs/offer1.png"
import offer2 from "/public/imgs/offer2.png"
import offer3 from "/public/imgs/offer3.png"
import offer4 from "/public/imgs/offer4.png"
 
import foods1 from "/public/imgs/foods1.png"
import foods2 from "/public/imgs/foods2.png"
import foods3 from "/public/imgs/foods3.png"

import news1 from "/public/imgs/news1.png"
import news2 from "/public/imgs/news2.png"

import hero1 from "/public/imgs/hero1.png"
import hero2 from "/public/imgs/hero2.png"
import hero3 from "/public/imgs/hero3.png"

export const headerData=[
    {
        name:"Home",
        id:nanoid(),
        path:"/",
    },
    {
        name:"About",
        id:nanoid(),
        path:"/",
    },
    {
        name:"Pages",
        id:nanoid(),
        path:"/",
    },
    {
        name:"Shop",
        id:nanoid(),
        path:"/",
    },
    {
        name:"Projects",
        id:nanoid(),
        path:"/",
    },
    {
        name:"News",
        id:nanoid(),
        path:"/",
    },
]

export const categoryData=[
    {
        id:nanoid(),
        text:"Natural!!",
        name:"Get Garden Fresh Fruits",
        img:category1,
    },
    {
        id:nanoid(),
        text:"Offer!!",
        name:"Get 10% off on Vegetables",
        img:category2,
    },
]

export const productData=[
    {
        id:1,
        img:product1,
        type:"Vegetable",
        name:"Calabrese Broccoli",
        oldCost:"$20.00",
        newCost:"$13.00",
        rating:rating,
    },
    {
        id:2,
        img:product2,
        type:"Fresh",
        name:"Fresh Banana Fruites",
        oldCost:"$20.00",
        newCost:"$14.00",
        rating:rating,
    },
    {
        id:3,
        img:product3,
        type:"Millets",
        name:"White Nuts",
        oldCost:"$20.00",
        newCost:"$15.00",
        rating:rating,
    },
    {
        id:4,
        img:product4,
        type:"Vegetable",
        name:"Vegan Red Tomato",
        oldCost:"$20.00",
        newCost:"$17.00",
        rating:rating,
    },
    {
        id:5,
        img:product5,
        type:"Health",
        name:"Mung Bean",
        oldCost:"$20.00",
        newCost:"$11.00",
        rating:rating,
    },
    {
        id:6,
        img:product6,
        type:"Nuts",
        name:"Brown Hazelnut",
        oldCost:"$20.00",
        newCost:"$12.00",
        rating:rating,
    },
    {
        id:7,
        img:product7,
        type:"Fresh",
        name:"Eggs",
        oldCost:"$20.00",
        newCost:"$17.00",
        rating:rating,
    },
    {
        id:8,
        img:product8,
        type:"Vegetable",
        name:"Zelco Suji Elaichi Rusk",
        oldCost:"$20.00",
        newCost:"$15.00",
        rating:rating,
    },
]

export const data={
    productData:[
        {
            id:1,
            img:product1,
            type:"Vegetable",
            name:"Calabrese Broccoli",
            oldCost:"$20.00",
            newCost:"$13.00",
            rating:rating,
        },
        {
            id:2,
            img:product2,
            type:"Fresh",
            name:"Fresh Banana Fruites",
            oldCost:"$20.00",
            newCost:"$14.00",
            rating:rating,
        },
        {
            id:3,
            img:product3,
            type:"Millets",
            name:"White Nuts",
            oldCost:"$20.00",
            newCost:"$15.00",
            rating:rating,
        },
        {
            id:4,
            img:product4,
            type:"Vegetable",
            name:"Vegan Red Tomato",
            oldCost:"$20.00",
            newCost:"$17.00",
            rating:rating,
        },
        {
            id:5,
            img:product5,
            type:"Health",
            name:"Mung Bean",
            oldCost:"$20.00",
            newCost:"$11.00",
            rating:rating,
        },
        {
            id:6,
            img:product6,
            type:"Nuts",
            name:"Brown Hazelnut",
            oldCost:"$20.00",
            newCost:"$12.00",
            rating:rating,
        },
        {
            id:7,
            img:product7,
            type:"Fresh",
            name:"Eggs",
            oldCost:"$20.00",
            newCost:"$17.00",
            rating:rating,
        },
        {
            id:8,
            img:product8,
            type:"Vegetable",
            name:"Zelco Suji Elaichi Rusk",
            oldCost:"$20.00",
            newCost:"$15.00",
            rating:rating,
        },
    ],
    shopData:[
        {
            id:1,
            img:product1,
            type:"Vegetable",
            name:"Calabrese Broccoli",
            oldCost:"$20.00",
            newCost:"$13.00",
            rating:rating,
        },
        {
            id:2,
            img:product2,
            type:"Fresh",
            name:"Fresh Banana Fruites",
            oldCost:"$20.00",
            newCost:"$14.00",
            rating:rating,
        },
        {
            id:3,
            img:product3,
            type:"Millets",
            name:"White Nuts",
            oldCost:"$20.00",
            newCost:"$15.00",
            rating:rating,
        },
        {
            id:4,
            img:product4,
            type:"Vegetable",
            name:"Vegan Red Tomato",
            oldCost:"$20.00",
            newCost:"$17.00",
            rating:rating,
        },
        {
            id:5,
            img:product5,
            type:"Health",
            name:"Mung Bean",
            oldCost:"$20.00",
            newCost:"$11.00",
            rating:rating,
        },
        {
            id:6,
            img:product6,
            type:"Nuts",
            name:"Brown Hazelnut",
            oldCost:"$20.00",
            newCost:"$12.00",
            rating:rating,
        },
        {
            id:7,
            img:product7,
            type:"Fresh",
            name:"Eggs",
            oldCost:"$20.00",
            newCost:"$17.00",
            rating:rating,
        },
        {
            id:8,
            img:product8,
            type:"Vegetable",
            name:"Zelco Suji Elaichi Rusk",
            oldCost:"$20.00",
            newCost:"$15.00",
            rating:rating,
        },
        {
            id:9,
            img:product9,
            type:"Health",
            name:"Mung Bean",
            oldCost:"$20.00",
            newCost:"$11.00",
            rating:rating,
        },
        {
            id:10,
            img:product10,
            type:"Nuts",
            name:"White Hazelnut",
            oldCost:"$20.00",
            newCost:"$12.00",
            rating:rating,
        },
        {
            id:11,
            img:product11,
            type:"Fresh",
            name:"Fresh Corn",
            oldCost:"$20.00",
            newCost:"$17.00",
            rating:rating,
        },
        {
            id:12,
            img:product12,
            type:"Fresh",
            name:"Organic Almonds",
            oldCost:"$20.00",
            newCost:"$15.00",
            rating:rating,
        },
    ],
    offerData:[
        {
            id:nanoid(),
            img:offer1,
            type:"Vegetable",
            name:"Mung Bean",
            oldCost:"$20.00",
            newCost:"$11.00",
            rating:rating,
        },
        {
            id:nanoid(),
            img:offer2,
            type:"Vegetable",
            name:"Brown Hazelnut",
            oldCost:"$20.00",
            newCost:"$12.00",
            rating:rating,
        },
        {
            id:nanoid(),
            img:offer3,
            type:"Vegetable",
            name:"Onion",
            oldCost:"$20.00",
            newCost:"$17.00",
            rating:rating,
        },
        {
            id:nanoid(),
            img:offer4,
            type:"Vegetable",
            name:"Cabbage",
            oldCost:"$20.00",
            newCost:"$17.00",
            rating:rating,
        },
    ]
}


export const customerData=[
    {
        name:"Organic",
        id:nanoid(),
        rate:"100%",
    },
    {
        name:"Active Product",
        id:nanoid(),
        rate:"285",
    },
    {
        name:"Organic Orchads",
        id:nanoid(),
        rate:"350+  ",
    },
    {
        name:"Years of Farming",
        id:nanoid(),
        rate:"25+",
    },
]



export const foodsData=[
    {
        id:nanoid(),
        img:foods1,
        name:"Organic Juice",
    },
    {
        id:nanoid(),
        img:foods2,
        name:"Organic Food",
    },
    {
        id:nanoid(),
        img:foods3,
        name:"Nuts Cookis",
    },
]

export const newsData=[
    {
        id:nanoid(),
        icon:profile,
        author:"By Rachi Card",
        name:"The Benefits of Vitamin D & How to Get It",
        text:"Simply dummy text of the printing and typesetting industry. Lorem Ipsum"  ,
        img:news1, 
    },
    {
        id:nanoid(),
        icon:profile,
        author:"By Rachi Card",
        name:"Our Favourite Summertime Tommeto",
        text:"Simply dummy text of the printing and typesetting industry. Lorem Ipsum"  ,
        img:news2, 
    },
]

export const heroAboutData=[
    {
        id:nanoid(),
        img:hero1,
        name:"About Us",
    }
]
export const heroShopData=[
    {
        id:nanoid(),
        img:hero2,
        name:"Shop",
    }
]
export const heroDetailData=[
    {
        id:nanoid(),
        img:hero3,
        name:"Shop Single",
    }
]

export const shopData=[
    {
        id:nanoid(),
        img:product1,
        type:"Vegetable",
        name:"Calabrese Broccoli",
        oldCost:"$20.00",
        newCost:"$13.00",
        rating:rating,
    },
    {
        id:nanoid(),
        img:product2,
        type:"Fresh",
        name:"Fresh Banana Fruites",
        oldCost:"$20.00",
        newCost:"$14.00",
        rating:rating,
    },
    {
        id:nanoid(),
        img:product3,
        type:"Millets",
        name:"White Nuts",
        oldCost:"$20.00",
        newCost:"$15.00",
        rating:rating,
    },
    {
        id:nanoid(),
        img:product4,
        type:"Vegetable",
        name:"Vegan Red Tomato",
        oldCost:"$20.00",
        newCost:"$17.00",
        rating:rating,
    },
    {
        id:nanoid(),
        img:product5,
        type:"Health",
        name:"Mung Bean",
        oldCost:"$20.00",
        newCost:"$11.00",
        rating:rating,
    },
    {
        id:nanoid(),
        img:product6,
        type:"Nuts",
        name:"Brown Hazelnut",
        oldCost:"$20.00",
        newCost:"$12.00",
        rating:rating,
    },
    {
        id:nanoid(),
        img:product7,
        type:"Fresh",
        name:"Eggs",
        oldCost:"$20.00",
        newCost:"$17.00",
        rating:rating,
    },
    {
        id:nanoid(),
        img:product8,
        type:"Vegetable",
        name:"Zelco Suji Elaichi Rusk",
        oldCost:"$20.00",
        newCost:"$15.00",
        rating:rating,
    },
    {
        id:nanoid(),
        img:product9,
        type:"Health",
        name:"Mung Bean",
        oldCost:"$20.00",
        newCost:"$11.00",
        rating:rating,
    },
    {
        id:nanoid(),
        img:product10,
        type:"Nuts",
        name:"White Hazelnut",
        oldCost:"$20.00",
        newCost:"$12.00",
        rating:rating,
    },
    {
        id:nanoid(),
        img:product11,
        type:"Fresh",
        name:"Fresh Corn",
        oldCost:"$20.00",
        newCost:"$17.00",
        rating:rating,
    },
    {
        id:nanoid(),
        img:product12,
        type:"Fresh",
        name:"Organic Almonds",
        oldCost:"$20.00",
        newCost:"$15.00",
        rating:rating,
    },
]