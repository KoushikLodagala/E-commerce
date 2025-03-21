// import React from 'react'
// import './Breadcrum.css'
// import arrow_icon from '../Assets/breadcrum_arrow.png'

// const Breadcrum = (props) => {
//     const {product} = props
//   return (
//     <div className='breadcrum'>
//         {/* HOME <img src={arrow_icon} alt="" />SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name} */}
//     </div>
//   )
// }

// export default Breadcrum



// import React from 'react'
// import  './Breadcrum.css'
// import arrow_icon from '../Assets/breadcrum_arrow.png'
// // import all_product  from '../Components/Assets/all_product'



// const Breadcrum = (props) => {
//   const {product} = props
//   return (
   
//       <div className="breadcrum">
//         HOME <img src={arrow_icon} alt='' /> SHOP  <img src={arrow_icon}  alt='' />  <img src={arrow_icon} alt='' /> 
//       </div>
    
//   )
// }

// export default Breadcrum



import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrum = (props) => {
    const { product } = props;

    // Check if product is defined and has the required properties
    const category = product && product.category ? product.category : 'Category';
    const name = product && product.name ? product.name : 'Product Name';

    return (
        <div className='breadcrum'>
            HOME <img src={arrow_icon} alt="" /> 
            SHOP <img src={arrow_icon} alt="" /> 
            {category} <img src={arrow_icon} alt="" /> 
            {name}
        </div>
    );
}

export default Breadcrum;