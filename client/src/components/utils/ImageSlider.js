import React from 'react'
import { Carousel } from 'antd';


function ImageSlider(props) {
    
    return (
        <div style={{ width:'100%'}}>
            <Carousel autoplay>
                {props.images.map((image,index)=>(
                    <div key={index}>
                        <img style={{ width:'100%', maxHeight: '150px', objectFit: 'cover'}} src={`http://localhost:5000/${image}`} alt='productImage' />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}
//adding more images into slider. more sushi to come!!!!
export default ImageSlider
