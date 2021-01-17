import React from 'react'
import "../../Styles/Card.css"
import Image from '../Image/Image'

const Card = ({name,price ,src ,color1,color2}) => {
    return (
        <div className="card">
        <div className="imgBx">
            {/* <Image src="HeadPh.png.png" alt="headphone"/> */}
            <Image src={src} alt={name}/>
        </div>
        <div className="contentBx">
            <h3>{name}</h3>
            <h2 className="price">{price}.<small>99</small></h2>
            <a hred="#" className="buy">Buy Now</a>
        </div>
    </div>
    )
}

export default Card
