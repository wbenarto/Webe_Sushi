import React from 'react'
import { Carousel } from 'antd';


function ImageSlider(props) {
    
    return (
        <div style={{ width:'100%', height:'310.66px', overflow:'hidden', verticalAlign:'middle', position: 'relative'}}>
            <Carousel autoplay>
                {props.images.map((image,index)=>(
                    <div key={index}>
                        <img style={{ width:'100%', position: 'relative'}} src={`http://localhost:5000/${image}`} alt='productImage' />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}
//adding more images into slider. more sushi to come!!!!
export default ImageSlider
