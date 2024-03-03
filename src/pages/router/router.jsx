import React from 'react'
import { nanoid } from 'nanoid'
import {Home} from "../home"
import { About } from '../about'
import { Shop } from '../shop'
import { Detail } from '../detail'

export const mainRouterData=[
    {
        component:<Home/>,
        id:nanoid(),
    },
    {
        component:<About/>,
        path:"/about/:aboutId/:slug",
        id:nanoid(),
    },
    {
        component:<Shop/>,
        path:"/shop/:shopId/:slug",
        id:nanoid(),
    },
    {
        component:<Detail/>,
        path:"/product/:productId/:slug",
        id:nanoid(),
    }
]
