import React from 'react'
import Table from '@material-ui/core/Table'

function UserCardBlock(props) {
    console.log(props.products)
    const renderCartImage = (images) => {
        if(images.length>0) {
            let image=images[0]
            return `http://localhost:5000/${image}`
        }
    }

    const renderItems = () => (        
        props.products && props.products.map( product => 
            
            (
            
            <tr key ={product._id}>
                <td>
                    <img style={{ width:'70px' }} alt='product' 
                    src={renderCartImage(product.images)}
                />
                </td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.quantity}</td>
                <td>$ {product.price}</td>
                <td><button 
                onClick={()=>props.removeItem(product._id)}
                >Remove</button></td>
            </tr>
        ))
    )

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th style={{paddingBottom:'20px'}}>Product Image</th>
                        <th style={{paddingBottom:'20px'}}>Product Name</th>
                        <th style={{paddingBottom:'20px'}}>Description</th>
                        <th style={{paddingBottom:'20px'}}>Quantity</th>
                        <th style={{paddingBottom:'20px'}}>Price</th>
                        <th style={{paddingBottom:'20px'}}>Remove product from Cart</th>
                    </tr>
                </thead>
                <tbody>
                    {renderItems()}
                </tbody>
            </Table>
            
        </div>
    )
}

export default UserCardBlock
