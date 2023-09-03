import React from 'react'
import { Badge, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap'
import {FaShoppingCart} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartState } from '../context/Context';
import {AiFillDelete} from 'react-icons/ai';

const Header = () => {
    const {state:{cart},
           dispatch
          } = CartState(); 
    
    return (
        <Navbar bg="dark" variant="dark" style={{height:80}}>
            <Container>
                <Navbar.Brand>
                    <Link to='/'>Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl
                        style={{width:500}}
                        placeholder='Search a product'
                        className='m-auto'
                    />
                </Navbar.Text>
                <Nav>
                    <Dropdown>
                        <Dropdown.Toggle variant="success">
                            <FaShoppingCart color='white' fontSize='25px'/>{' '}
                            <Badge id="badgeNav">{cart.length}</Badge>{' '}
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{minWidth:390,paddingRight:18}}>
                            {
                                cart.length > 0 ? (
                                    <>
                                        {cart.map((cartItem)=>{
                                            const {id,name,image,price} = cartItem;
                                            return (
                                                <div key={id} className='dropdown_menu_items'>
                                                    <div className='menu_item_img_container'><img src={image} alt={name}/></div>
                                                    <div className='menu_item_title'>
                                                        <span>{name}</span>
                                                        <span>Rs {price}</span>
                                                    </div>
                                                    <div className='menu_item_delete'
                                                    onClick={()=>dispatch({
                                                        type:'Remove_cart',
                                                        payload:cartItem
                                                    })}
                                                    ><AiFillDelete/></div>
                                                </div>
                                            )
                                        })}
                                        <button type='button' className='btn-primary rounded w-100 mx-2'>
                                            <Link to='/cart' className='d-block'> View Cart </Link>
                                        </button>
                                    </>
                                ) : (
                                    <span style={{padding:10}}>Cart is Empty!</span>
                                )
                            } 
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header