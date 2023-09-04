import React from 'react'
import {AiOutlineStar,AiFillStar} from 'react-icons/ai';

const Ratings = ({ratings,starClick,styles}) => {

    return (
        <section className='flex'>
        {[...Array(5)].map((_,i) => {
                if(ratings > i){
                    return (
                        <span key={i} onClick={()=>starClick(i)} style={styles}><AiFillStar/></span>
                    )
                }else{
                    return(
                        <span key={i} onClick={()=>starClick(i)} style={styles}><AiOutlineStar/></span>
                    )
                }
        })}
        </section>
    )
}

export default Ratings