import React from 'react'
import "../../Styles/SingleProduct.css"

const Colors = ({colors}) => {
    return (
        <div className="colors">
            {
                colors.map((color,index)=>(
                                        <button style={{background:color}} key={index}></button>
                ))
           }
        </div>
    )
}

export default Colors