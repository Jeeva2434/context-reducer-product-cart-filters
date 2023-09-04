import React, { useEffect, useState } from 'react'
import { CartState } from '../context/Context' 
import Ratings from './Ratings';
import {AiFillDelete} from 'react-icons/ai';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cart = () => {

  const {state:{cart},
         dispatch  
        } = CartState();

  const[total,setTotal] = useState(0);

  useEffect(()=>{
      let sumIt = cart.reduce((acc,prod)=> acc + Number(prod.price * prod.qty),0);
      setTotal(sumIt);
  },[cart]);

  if(cart.length <= 0){
    return(
      <Container>
        <div className='emptyCart'>
          <div>Cart is Empty !</div>
          <Link to='/' className='inCartBack'>Back to home</Link>
        </div>
      </Container>
    )
  }

  return (
    <Container>
      <section className='inCart_list'>
        <h1>Total : Rs {total}</h1>
        {
          cart.map((item)=>{
            const {id,name,image,price,ratings,inStock,qty} = item
            return(
              <div className='inCart_item' key={id}>
                <div className='inCart_img_container'>
                  <img src={image} alt={name}/>
                </div>
                <div className='inCart_name'>{name}</div>
                <div className='inCart_price'>Rs {price}</div>
                <div className='inCart_ratings'>
                  <Ratings ratings={ratings} styles={{pointerEvents:'none'}}/>
                </div>
                <select className='inCart_select' value={qty} onChange={(e)=>dispatch({
                  type:'Qty_change',
                  payload : {
                    id: id,
                    qty : e.target.value
                  }
                })}>
                  {
                  [...Array(inStock)].map((_,i)=>{
                    return (
                      <option key={i}  >{i+1}</option>
                    )  
                    })
                  }
                </select>
                <div className='menu_item_delete'
                  onClick={()=>dispatch({
                      type:'Remove_cart',
                      payload:item
                  })}
                  ><AiFillDelete/></div>
              </div>
            )
          })
        }
      </section>
    </Container>
  )
}

export default Cart