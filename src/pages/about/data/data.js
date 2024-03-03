import { nanoid } from "nanoid"

import choose1 from "/public/about/icons/choose1.svg"
import choose2 from "/public/about/icons/choose2.svg"
import choose3 from "/public/about/icons/choose3.svg"
import choose4 from "/public/about/icons/choose4.svg"

import team1 from "/public/about/team1.jpg"
import team2 from "/public/about/team2.jpg"
import team3 from "/public/about/team3.jpg"

import contact1 from "/public/about/icons/team1.svg"
import contact2 from "/public/about/icons/team2.svg"

import products1 from "/public/about/products1.png"
import products2 from "/public/about/products2.png"
import products3 from "/public/about/products3.png"
import products4 from "/public/about/products4.png"

export const chooseCardData = [
    {
        id: nanoid(),
        icon: choose1,
        name: "Return Policy",
        text: "Simply dummy text of the printintypesetting industry.",
    },
    {
        id: nanoid(),
        icon: choose2,
        name: "100% Fresh",
        text: "Simply dummy text of the printintypesetting industry.",
    },
    {
        id: nanoid(),
        icon: choose3,
        name: "Support 24/7",
        text: "Simply dummy text of the printintypesetting industry.",
    },
    {
        id: nanoid(),
        icon: choose4,
        name: "Secured Payment",
        text: "Simply dummy text of the printintypesetting industry.",
    },
]

export const teamCardData=[
    {
        img:team1,
        id:nanoid(),
        name:"Giovani Bacardo",
        job:"Farmer",
        icon:contact1,
    },
    {
        img:team2,
        id:nanoid(),
        name:"Marianne Loreno",
        job:"Designer",
        icon:contact2,
    },
    {
        img:team3,
        id:nanoid(),
        name:"Riga Pelore",
        job:"Farmer",
        icon:contact2,
    },
]

export const productsData=[
    {
        img:products1,
        name:"Spicy",
        id:nanoid(),
    },
    {
        img:products2,
        name:"Nuts & Feesd",
        id:nanoid(),
    },
    {
        img:products3,
        name:"Fruits",
        id:nanoid(),
    },
    {
        img:products4,
        name:"Vegetable",
        id:nanoid(),
    },
]

