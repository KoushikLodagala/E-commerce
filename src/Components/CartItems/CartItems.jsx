// import React, { useContext } from 'react'
// import './CartItems.css'
// import { ShopContext } from '../../Context/ShopContext'
// import remove_icon from '../Assets/cart_cross_icon.png'

// const CartItems = () => {

//     const {getTotalCartAmount,all_products,cartItems,removeFromCart} = useContext(ShopContext)
//   return (
//     <div className='cartitems' >
//         <div className="cartitems-format-main">
//             <p>Products</p>
//             <p>Title</p>
//             <p>Price</p>
//             <p>Quantity</p>
//             <p>Total</p>
//             <p>Remove</p>
//         </div>
//         <hr />
//         {all_products.map((e)=>{
//                 if(cartItems[e.id]>0)
//                     {
//                     return <div>
//                     <div className="classitems-format cartitems-format-main">
//                         <img src={e.image} alt="" className='carticon-product-icon' />
//                         <p>{e.name}</p>
//                         <p>${e.new_price}</p>
//                         <button className='cartitems-quantity' >{cartItems[e.id]}</button>
//                         <p>${e.new_price*cartItems[e.id]}</p>
//                             <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                        
//                     </div>
//                     <hr />
//                 </div>

//                 }
//                 // return null
//             })}
//             <div className="cartitems-down">
//                 <div className="cartitems-total">
//                     <h1>Cart Totals</h1>
//                     <div>
//                         <div className="cartitems-total-item">
//                             <p>Subtotal</p>
//                             <p>${getTotalCartAmount()}</p>
//                         </div>
//                         <hr />
//                         <div className="cartitems-total-item">
//                             <p>Shipping Fee</p>
//                             <p>Free</p>
//                         </div>
//                         <hr />
//                         <div className="cartitems-total-item">
//                             <h3>Total</h3>
//                             <h3>${getTotalCartAmount()}</h3>
//                         </div>
//                     </div>
//                     <button>Proceed To Checkout</button>
//                 </div>
//                 <div className="cartitems-promocode">
//                     <p>If you havea promo code, Enter it here</p>
//                     <div className="cartitems-promobox">
//                         <input type="text" placeholder='Promo code' />
//                         <button>Submit</button>
//                     </div>
//                 </div>
//             </div>
       
//     </div>
//   )
// }

// export default CartItems




// import React, { useContext } from 'react';
// import './CartItems.css';
// import { ShopContext } from '../../Context/ShopContext';
// import remove_icon from '../Assets/cart_cross_icon.png';

// const CartItems = () => {
//   const { getTotalCartAmount, all_products, cartItems, removeFromCart } = useContext(
//     ShopContext
//   );

//   // Check if all_products is available before mapping
//   if (!all_products) return null; // Display nothing if no products

//   return (
//     <div className='cartitems'>
//       <div className="cartitems-format-main">
//         <p>Products</p>
//         <p>Title</p>
//         <p>Price</p>
//         <p>Quantity</p>
//         <p>Total</p>
//         <p>Remove</p>
//       </div>
//       <hr />
//       {all_products.map((e) => {
//         const quantityInCart = cartItems[e.id] || 0; // Default quantity to 0

//         return (
//           <div key={e.id}> {/* Add key prop for better performance */}
//             <div className="classitems-format cartitems-format-main">
//               <img src={e.image} alt="" className='carticon-product-icon' />
//               <p>{e.name}</p>
//               <p>${e.new_price}</p>
//               <button className='cartitems-quantity'>{quantityInCart}</button>
//               <p>${e.new_price * quantityInCart}</p>
//               <img
//                 className='cartitems-remove-icon'
//                 src={remove_icon}
//                 onClick={() => removeFromCart(e.id)}
//                 alt=""
//               />
//             </div>
//             <hr />
//           </div>
//         );
//       })}
//       <div className="cartitems-down">
//         <div className="cartitems-total">
//           <h1>Cart Totals</h1>
//           <div>
//             <div className="cartitems-total-item">
//               <p>Subtotal</p>
//               <p>${getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="cartitems-total-item">
//               <p>Shipping Fee</p>
//               <p>Free</p>
//             </div>
//             <hr />
//             <div className="cartitems-total-item">
//               <h3>Total</h3>
//               <h3>${getTotalCartAmount()}</h3>
//             </div>
//           </div>
//           <button>Proceed To Checkout</button>
//         </div>
//         <div className="cartitems-promocode">
//           <p>If you have a promo code, Enter it here</p>
//           <div className="cartitems-promobox">
//             <input type="text" placeholder='Promo code' />
//             <button>Submit</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItems;


import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
    const { getTotalCartAmount, all_products, cartItems, removeFromCart } = useContext(ShopContext);

    // Ensure all_products and cartItems are available
    if (!all_products || !cartItems) return <div>Loading...</div>;

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_products.map((e) => {
                const quantity = cartItems[e.id] || 0; // Default to 0 if not found

                if (quantity > 0) {
                    return (
                        <div key={e.id}> {/* Add key prop for better performance */}
                            <div className="classitems-format cartitems-format-main">
                                <img src={e.image} alt="" className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>{quantity}</button>
                                <p>${e.new_price * quantity}</p>
                                <img
                                    className='cartitems-remove-icon'
                                    src={remove_icon}
                                    onClick={() => removeFromCart(e.id)}
                                    alt="Remove"
                                />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null; // Return null if quantity is 0
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>Proceed To Checkout</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='Promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;