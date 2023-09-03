import React from 'react'
import {AiOutlineStar,AiFillStar} from 'react-icons/ai';

const Ratings = ({ratings}) => {

    return (
        <section className='flex'>
        {[...Array(5)].map((_,i) => {
                if(ratings > i){
                    return (
                        <span key={i}><AiFillStar/></span>
                    )
                }else{
                    return(
                        <span key={i}><AiOutlineStar/></span>
                    )
                }
        })}
        </section>
    )
}

export default Ratings