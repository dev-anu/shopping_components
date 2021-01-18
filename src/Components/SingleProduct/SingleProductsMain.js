import React, { useEffect, useRef, useState } from 'react'
import "../../Styles/SingleProduct.css"
import Image from '../Image/Image';

import SingleProductDetails from './SingleProductDetails';


const SingleProductsMain = () => {
    const initialState=[
        {
        "_id": "1",
        "title": "Nike Shoes",
        "src": [
            "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
            "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
            "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
            "https://www.upsieutoc.com/images/2020/06/27/img4.jpg"
          ],
        "description": "UI/UX designing, html css tutorials",
        "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        "price": 23,
        "colors":["red","black","crimson","teal"],
        "count": 1
        }
    ]
   
    const [products, setProducts] = useState(initialState);
    const [index, setIndex] = useState(0);
    const myRef = useRef(null)
    // console.log(products)

    const handleTab=(index)=>{
        // alert(index)
        setIndex(index)
        // console.log(myRef.current.children)
        const images=myRef.current.children;
        for(let i=0;i<images.length;i++){
            images[i].className=images[i].className.replace('active', "")
        }
        images[index].className="active";
        
    }

    useEffect(() => {
         
          myRef.current.children[index].className="active"
       
    }, [index])

    return (
        <div className="app">
            {
                products.map(item=>(
                    <div className="details"  key={item._id}>
                        <div className="big-img"> 
                          <Image src={item.src[index]} />
                        </div>
                        <div className="box">
                           <SingleProductDetails 
                              title={item.title}
                              price={item.price}
                              colors={item.colors}
                              description={item.description}
                              content={item.content}
                              myRef={myRef}
                              src={item.src}
                              handleTab={handleTab}
                        />
                        
                        </div>
                     </div>
                ))
            }
            
        </div>
    )
}

export default SingleProductsMain
