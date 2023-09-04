import React from 'react'
import Ratings from './Ratings'
import  {CartState} from '../context/Context';
import { Container } from 'react-bootstrap';


const Filter = () => {
    const {productDispatch,productState} = CartState(); 

    const {byFastDelivery} = productState; 

    const onStarClick = (i) =>{
       productDispatch({
        type:'Change_ratings',
        payload: i+1
       })
    }

    return (
        <Container>
            <section className='filterSection'>
                <header className='bg-dark'><h4>Filter</h4></header>
                <main className='filter_content'>
                    <label htmlFor='asc'>
                    <input type="radio" id="asc" name="order" 
                        checked = {productState.sort === 'Low_To_High'}
                        onChange={()=>productDispatch({
                            type:'Low_To_High'
                        })}
                    />
                        Ascending
                    </label>

                    <br/>

                    <label htmlFor='desc'>
                    <input type="radio" id="desc" name="order"  
                        checked = {productState.sort === 'High_To_Low'}
                        onChange={()=>productDispatch({
                            type:'High_To_Low'
                        })}
                    />
                        Descending
                    </label>
                    
                    <br/>
                    
                    <label htmlFor='inStock'>
                        <input type='checkbox' id="inStock" name="inStock" checked={productState.byStock} 
                        onChange={()=>productDispatch({
                        type:'byStock'
                        })}
                    />
                        In Stock
                    </label>
                    
                    <br/>
                    
                    <label htmlFor='freeDelivery' >
                        <input type='checkbox' id="freeDelivery" 
                        name="freeDelivery" checked = {byFastDelivery} onChange={()=>productDispatch({
                            type:'byFastDelivery'
                        })}/>
                        Fast Delivery
                    </label>
                    
                    <br/>
                    
                    <Ratings ratings={productState.byRating} starClick={onStarClick} styles={{pointerEvents:'auto',cursor:'pointer'}} />
                    
                    <br/>
                    
                    <button type="button" id="clearAllFilter" onClick={()=> productDispatch({
                        type:'clearAllFilter'
                    })}>Clear All Filters</button>
                </main>
            </section>
        </Container>
    )
}

export default Filter