import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeCart } from '../Feature/Cart/CartSlice';



export default function CartContainer() {
    const { cartItems } = useSelector((store) => store.cart)
    const dispatch = useDispatch();
  return (
      <div className='containers'>
          {cartItems.map((item) => {
              const { id, title ,img, price } = item;
              return (
                  <div className='card_flex'>
                    <img className='images' src={img} alt="" />
                    <div>
                      <div className='title' key={id}>{title}</div>
                      <p>{price}$</p>
                      <button onClick={() => {dispatch(removeCart(id))}}>remove</button>
                    </div>
                  </div>
              )
            })}
          <button onClick={() => {
              dispatch(clearCart());
            }}>clearCart</button>
    </div>
  )
}
