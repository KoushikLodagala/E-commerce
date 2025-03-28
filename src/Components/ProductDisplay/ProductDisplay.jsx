import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props; 
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                        {/* <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" /> */}
                        
                </div>
                <div className="productdisplay-img">
                    {/* <img className='productdisplay-main-img' src={product.image} alt="" /> */}
                </div>
            </div>
            <div className="productdisplay-right">
                    {/* <h1>{product.name}</h1> */}
                    <div className="productdisplay-right-stars">
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon}alt="" />
                        <img src={star_icon}alt="" />
                        <img src={star_dull_icon} alt="" />
                        <p>(122)</p>
                    </div>
                    <div className="productdisplay-right-prices">
                      {/* <div className="productdisplay-right-price-old">${product.old_price}</div>
                      <div className="productdisplay-right-price-new">${product. new_price}</div> */}
                    </div>
                    <div className="productdisplay-right-description">
                      A lightweight,usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.
                    </div>
                    <div className="productdisplay-right-size">
                      <h1>Select Size</h1>
                      <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                       
                      </div>
                    </div>
                    <button onClick={()=>{addToCart(product.id)}} > ADD TO CART</button>
                        <p className='productdisplay-right-category'><span>Category :</span>Women, T-Shirt, Crop Top</p>
                        <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest </p>

            </div>
    </div>
  )
}

export default ProductDisplay



// import React, { useContext } from 'react';
// import './ProductDisplay.css';
// import star_icon from "../Assets/star_icon.png";
// import star_dull_icon from "../Assets/star_dull_icon.png";
// import { ShopContext } from '../../Context/ShopContext';

// const ProductDisplay = (props) => {
//     const { product } = props; 
//     const { addToCart } = useContext(ShopContext);

//     // Check if product is defined
//     if (!product) {
//         return <div>Loading...</div>; // or any loading state you prefer
//     }

//     return (
//         <div className='productdisplay'>
//             <div className="productdisplay-left">
//                 <div className="productdisplay-img-list">
//                     {/* Render multiple images if available */}
//                     {product.images && product.images.length > 0 ? (
//                         product.images.map((img, index) => (
//                             <img key={index} src={img} alt={`Product ${index}`} />
//                         ))
//                     ) : (
//                         <p>No images available</p>
//                     )}
//                 </div>
//                 <div className="productdisplay-img">
//                     {/* Render the main product image */}
//                     {product.image ? (
//                         <img className='productdisplay-main-img' src={product.image} alt={product.name} />
//                     ) : (
//                         <p>No main image available</p>
//                     )}
//                 </div>
//             </div>
//             <div className="productdisplay-right">
//                 <h1>{product.name}</h1>
//                 <div className="productdisplay-right-stars">
//                     <img src={star_icon} alt="" />
//                     <img src={star_icon} alt="" />
//                     <img src={star_icon} alt="" />
//                     <img src={star_icon} alt="" />
//                     <img src={star_dull_icon} alt="" />
//                     <p>(122)</p>
//                 </div>
//                 <div className="productdisplay-right-prices">
//                     <div className="productdisplay-right-price-old">${product.old_price}</div>
//                     <div className="productdisplay-right-price-new">${product.new_price}</div>
//                 </div>
//                 <div className="productdisplay-right-description">
//                     A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.
//                 </div>
//                 <div className="productdisplay-right-size">
//                     <h1>Select Size</h1>
//                     <div className="productdisplay-right-sizes">
//                         <div>S</div>
//                         <div>M</div>
//                         <div>L</div>
//                         <div>XL</div>
//                         <div>XXL</div>
//                     </div>
//                 </div>
//                 <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
//                 <p className='productdisplay-right-category'><span>Category :</span>Women, T-Shirt, Crop Top</p>
//                 <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>
//             </div>
//         </div>
//     );
// }

// export default ProductDisplay;





// import React, { useContext } from 'react';
// import PropTypes from 'prop-types'; // Import PropTypes for prop validation
// import './ProductDisplay.css';
// import star_icon from "../Assets/star_icon.png";
// import star_dull_icon from "../Assets/star_dull_icon.png";
// import { ShopContext } from '../../Context/ShopContext';

// const ProductDisplay = (props) => {
//     const { product } = props; 
//     const { addToCart } = useContext(ShopContext);

//     // Check if product is defined
//     if (!product) {
//         return <div>Loading...</div>; // or any loading state you prefer
//     }

//     return (
//         <div className='productdisplay'>
//             <div className="productdisplay-left">
//                 <div className="productdisplay-img-list">
//                     {/* Render multiple images if available */}
//                     {product.images && product.images.length > 0 ? (
//                         product.images.map((img, index) => (
//                             <img key={index} src={img} alt={`Product ${index}`} />
//                         ))
//                     ) : (
//                         <p>No images available</p>
//                     )}
//                 </div>
//                 <div className="productdisplay-img">
//                     {/* Render the main product image */}
//                     {product.image ? (
//                         <img className='productdisplay-main-img' src={product.image} alt={product.name} />
//                     ) : (
//                         <p>No main image available</p>
//                     )}
//                 </div>
//             </div>
//             <div className="productdisplay-right">
//                 <h1>{product.name}</h1>
//                 <div className="productdisplay-right-stars">
//                     <img src={star_icon} alt="" />
//                     <img src={star_icon} alt="" />
//                     <img src={star_icon} alt="" />
//                     <img src={star_icon} alt="" />
//                     <img src={star_dull_icon} alt="" />
//                     <p>(122)</p>
//                 </div>
//                 <div className="productdisplay-right-prices">
//                     <div className="productdisplay-right-price-old">${product.old_price}</div>
//                     <div className="productdisplay-right-price-new">${product.new_price}</div>
//                 </div>
//                 <div className="productdisplay-right-description">
//                     A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.
//                 </div>
//                 <div className="productdisplay-right-size">
//                     <h1>Select Size</h1>
//                     <div className="productdisplay-right-sizes">
//                         <div>S</div>
//                         <div>M</div>
//                         <div>L</div>
//                         <div>XL</div>
//                         <div>XXL</div>
//                     </div>
//                 </div>
//                 <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
//                 <p className='productdisplay-right-category'><span>Category :</span>Women, T-Shirt, Crop Top</p>
//                 <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>
//             </div>
//         </div>
//     );
// }

// // Adding PropTypes for validation
// ProductDisplay.propTypes = {
//     product: PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         name: PropTypes.string.isRequired,
//         image: PropTypes.string,
//         images: PropTypes.arrayOf(PropTypes.string),
//         old_price: PropTypes.number,
//         new_price: PropTypes.number,
//     }).isRequired,
// };

// export default ProductDisplay;