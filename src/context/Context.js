import React, { createContext, useContext, useReducer } from 'react'
import {faker} from '@faker-js/faker';
import {cartReducer,productReducer} from './Reducers';

const Cart = createContext();

const Context = ({children}) => {

    const products = [...Array(20)].map((_,index)=>{
        return ({
            id : faker.string.uuid(),
            image : faker.image.url(),
            name : faker.commerce.productName(),
            price : faker.commerce.price(),
            inStock : faker.helpers.arrayElement([0,1,2,3,4]),
            fastDelivery : faker.datatype.boolean(),
            ratings : faker.helpers.arrayElement([0,1,2,3,4,5]),
        })
    })
    // console.log(products);

    const[state,dispatch] = useReducer(cartReducer,{
        product : products,
        cart : []
    })

    const[productState,productDispatch] = useReducer(productReducer,{
        byStock : false,
        byFastDelivery : false,
        byRating : 0,
        searchQuery : ''
    })

    return (
        <Cart.Provider
        value={{
            state,
            dispatch
        }}
        >
            {children}
        </Cart.Provider>
    )
}

export const CartState = () => {
    return useContext(Cart);
}

export default Context