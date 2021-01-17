import React from 'react'
import Card from './Card';
import "../../Styles/Card.css"

const CardDetails = () => {
    const products =[
        {id:1, name:"Cofee", price:"$200",src:"HeadPh.png.png",color1:"",color2:""},
        {id:2, name:"Apple", price:"$10",src:"https://images.unsplash.com/photo-1610576243507-083bdf576169?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",color1:"",color2:""},
        {id:3, name:"Berry", price:"$20",src:"https://images.unsplash.com/photo-1528873981-36c6afde7b9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",color1:"",color2:""},
        {id:4, name:"Cofee", price:"$200",src:"https://images.unsplash.com/photo-1610492273249-6406a1154eae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",color1:"",color2:""},
        {id:5, name:"Cofee", price:"$200",src:"https://images.unsplash.com/photo-1610492273249-6406a1154eae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",color1:"",color2:""},
        {id:6, name:"Cofee", price:"$200",src:"https://images.unsplash.com/photo-1610492273249-6406a1154eae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",color1:"",color2:""},
        {id:7, name:"Cofee", price:"$200",src:"https://images.unsplash.com/photo-1610492273249-6406a1154eae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",color1:"",color2:""},
        {id:8, name:"Cofee", price:"$200",src:"https://images.unsplash.com/photo-1610492273249-6406a1154eae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",color1:"",color2:""},
        {id:9, name:"Cofee", price:"$200",src:"https://images.unsplash.com/photo-1610492273249-6406a1154eae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",color1:"",color2:""},
        {id:10, name:"Cofee", price:"$200",src:"https://images.unsplash.com/photo-1610492273249-6406a1154eae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",color1:"",color2:""},
        {id:11, name:"Cofee", price:"$200",src:"https://images.unsplash.com/photo-1610492273249-6406a1154eae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",color1:"",color2:""},
    ];
    return (
        
            <div className="display_card">
            {
                products.map(product=>(
                    <Card
                       id={product.id}
                       name={product.name} 
                       price={product.price} 
                       src={product.src} 
                       color1={product.color1} 
                       color2={product.color2}
                     />
                ))
            }
            </div>
        
    )
}

export default CardDetails
