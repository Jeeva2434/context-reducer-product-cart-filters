import React from 'react'
import { CartState } from '../context/Context'
import Ratings from './Ratings';
import Filter from './Filter';

const Home = () => {

    const {
        state:{product,cart},
        dispatch,
        productState
    } = CartState(); 

    console.log(productState);
    let filteredProducts = product;

    const transformData = () => {
        if(productState.searchQuery?.length > 0){
            filteredProducts = filteredProducts.filter(item => item.name.toLowerCase().includes(productState.searchQuery.toLowerCase())) 
        }
        if(productState?.sort === 'Low_To_High'){
            filteredProducts = filteredProducts.sort(function(a,b){
                return a.price - b.price;
            })
        }
        if(productState?.sort === 'High_To_Low'){
            filteredProducts = filteredProducts.sort(function(a,b){
                return b.price - a.price;
            })
        }

        if(productState.byStock){
            filteredProducts = filteredProducts.filter((item)=> item.inStock !== 0);
        } 

        if(productState.byFastDelivery){
            filteredProducts = filteredProducts.filter((item)=> item.fastDelivery);
        }

        if(productState.byRating){
            filteredProducts = filteredProducts.filter((item)=> productState.byRating === item.ratings)
        }

        return filteredProducts;
    }

    return (
        <main className='home'>
        <section className='filter'>
            <Filter/>
        </section>
        <section className='product'>
            <div className='product_list'>
                {product && transformData().map((item)=>{
                   return (
                    <div className='product_item' key={item.id}>
                        <div className='item_image_wrapper'>
                            <img src={item.image} alt={item.name}/>
                        </div>

                        <div className='item_description'>
                            <div>{item.name}</div>
                            <div>Rs {Number(item.price).toFixed(0)}</div>
                            <div>{item.fastDelivery ? 'Fast Delivery' : '3-7 days delivery'}</div>
                            <Ratings ratings={item.ratings} styles={{pointerEvents:'none'}}/>

                            {cart.some((cartItem) => cartItem.id === item.id)?(
                                <button type='button' className='btn-danger ml-2 rounded'
                                onClick={()=>dispatch({
                                    type:'Remove_cart',
                                    payload : item
                                })}
                                >Remove cart</button>    
                            ):(
                                <button type='button' className='btn-primary rounded'
                                onClick={()=>dispatch({
                                    type:'Add_to_cart',
                                    payload : item
                                })}
                                >Add To Cart</button>
                            )}
                        </div>
                    </div>
                   )
                })}
           </div>
        </section>
        </main>
    )
}

export default Home