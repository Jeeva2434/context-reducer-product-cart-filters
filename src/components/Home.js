import React from 'react'
import { CartState } from '../context/Context'
import Ratings from './Ratings';

const Home = () => {

    const {
        state:{product},
        dispatch
    } = CartState(); 

    console.log(product);

    return (
        <main className='home'>
        <section className='filter'></section>
        <section className='product'>
            <div className='product_list'>
                {product && product.map((item,index)=>{
                   return (
                    <div className='product_item' key={item.id}>
                      <div className='item_image_wrapper'>
                        <img src={item.image} alt={item.name}/>
                      </div>

                      <div className='item_description'>
                        <div>{item.name}</div>
                        <div>Rs {Number(item.price).toFixed(0)}</div>
                        <div>{item.fastDelivery ? 'Fast Delivery' : '3-7 days delivery'}</div>
                        <Ratings ratings={item.ratings}/>
                        <button type='button' className='btn-primary rounded'
                         onClick={()=>dispatch({
                            type:'AddToCart',
                            payload : {item}
                         })}
                        >Add to Cart</button>
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