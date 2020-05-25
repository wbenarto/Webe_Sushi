import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCartItems, removeCartItem } from '../../../_actions/user_actions'
import UserCardBlock from '../CartPage/Sections/UserCardBlock'
import { Result, Empty } from 'antd';

function CartPage(props) {
    const dispatch = useDispatch();

    const [Total, setTotal] = useState(0)

    useEffect(()=>{
        let cartItems = [];
        if(props.user.userData && props.user.userData.cart) {
            if(props.user.userData.cart.length > 0) {
                props.user.userData.cart.forEach(item => {
                    cartItems.push(item.id)
                })
                dispatch(getCartItems(cartItems, props.user.userData.cart))
            }
        }
    }, [props.user.userData])

    useEffect(()=> {
        if(props.user.cartDetail && props.user.cartDetail.length > 0) {
            calculateTotal(props.user.cartDetail)
        }
    }, [props.user.cartDetail])

    const calculateTotal = (cartDetail) => {
        let total = 0;

        cartDetail.map(item=>{
            total += parseInt(item.price, 10) * item.quantity
        })
        setTotal(total)
    }

    const removeFromCart = (productId) => {
        dispatch(removeCartItem(productId))
        .then()
    }

    return (
        <div style={{ width:'85%', margin: '3rem auto'}}>
            <h1>My Cart</h1>
            <div>
                <UserCardBlock 
                    products={props.user.cartDetail}
                    removeItem={removeFromCart}

                />
                <div style={{ marginTop: '3rem'}}>
                    <h2>Total amount: $ {Total} </h2>
                </div>

                <Result
                    status='success'
                    title='Successfully Purchased'
                />
                <div style={{
                    width:'100%', display:'flex', flexDirection: 'column', justifyContent: 'center'
                }}>
                    <br />
                    <Empty description={false}/>
                    <p>No Items In the Cart</p>
                </div>

            </div>
        </div>
    )
}

export default CartPage