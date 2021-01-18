import React from 'react'

const ThumbDetails = ({myRef,src,handleTab}) => {
    return (
        <div className="thumb" ref={myRef}>
            {
                src.map((img,index)=>(
                                        
                    <img
                     src={img} 
                     alt=""  
                     key={index} 
                     onClick={()=>handleTab(index)}
                     />
                ))
            }
        </div>
    )
}

export default ThumbDetails
