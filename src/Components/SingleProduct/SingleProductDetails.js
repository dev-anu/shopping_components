import React from 'react'

import "../../Styles/SingleProduct.css"
import Button from '../Buttons/Button'
import Colors from '../Colors/Colors'
import ThumbDetails from '../Image/ThumbDetails'

const SingleProductDetails = ({title,price,colors,description,content,myRef,src,handleTab}) => {
    return (
            <>
                <div className="row">
                    <h2>{title}</h2>
                    <span>${price}</span>
                </div>

                <Colors colors={colors} />

                <p>{description}</p>
                <p>{content}</p>

                <ThumbDetails
                    myRef={myRef}
                    src={src}
                    handleTab={handleTab}
                 />
                 <Button className="cart" title="Add to cart" />
                {/* <button className="cart ">Add to cart</button> */}
                 </>           
        
    )
}

export default SingleProductDetails
