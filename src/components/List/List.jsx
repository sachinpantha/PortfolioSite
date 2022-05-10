import React from 'react'
import Product from '../Product/Product'
import { products } from '../../data'
import './List.css'
const List = () => {
  return (
    <div className='pl'>
        <div className="pl-texts">
            <h1 className="pl-title">My Projects</h1>
            <p className='pl-desc'>Here i listed some of my projects that i created while learning the things in my programming journey.</p>
        
        </div>
        <div className="pl-list">
            {products.map((item)=>(
                <Product title={item.title} key={item.id} img={item.img} link={item.link}/>
            ))}
        </div>
    </div>
  )
}

export default List