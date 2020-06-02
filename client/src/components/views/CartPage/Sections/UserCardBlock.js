import React from 'react'
import Table from '@material-ui/core/Table'

import styles from './UserCardBlock.module.css'

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
                    <img style={{ width:'200px' }} alt='product' 
                    src={renderCartImage(product.images)}
                />
                </td>
                <td>{product.title}</td>
                <td className={styles.description}>{product.description}</td>
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
            <Table className={styles.contentTable}>
                <thead>
                    <tr className={styles.tableHeader}>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Remove from Cart</th>
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
