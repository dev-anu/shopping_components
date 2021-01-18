import React from 'react'
import "../../Styles/SingleProduct.css"

const Button = ({className,title}) => {
    return (
        <div>
            <button className={className}>{title}</button>
        </div>
    )
}

export default Button
