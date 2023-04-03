// import React from 'react';
// import { useState } from 'react';
// import './Product.css';


// const Product = (props) => {
   
//     const {img,name,price,seller,ratings,user_img,pb_date,read_time,cources,who_uses,time} = props.product;




    

//      const handleAddToCart =props.handleAddToCart;

//      const handleAddToCartTime=props.handleAddToCartTime;


//     return (
//         <div >
       
//        <div className='product-info'>
  

  


//   <div class="card mb-3">
//   <img src={img} class="card-img-top" alt="..."/>
//   <div class="card-body">
//   <div className='user_con_main'>
//   <div className='user_img_con'>

// <img  style={{borderRadius:"10%",height:"80px",width:"75px"}}src={user_img}></img>
// <div className='users_details'>
// <h2 className='product-name'>{name}</h2>
// <p >{pb_date}</p>
// </div>

// </div>

// <div className='user_img_con_read'>

// <p className='read_time'>{read_time}</p>
// <button  onClick={()=>handleAddToCart({cources})}  className='bookmark_btn'>
// <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
// <path d="M4.5 1A.5.5 0 0 0 4 1.5v13.793l4-2.285 4 2.285V1.5A.5.5 0 0 0 12.5 1h-8zM5 2h6v9.707l-2.5-1.429L6 11.707l-2.5-1.43L5 11.707V2z"/>
// </svg>

// </button>




// </div>
//   </div>
//   </div>

//   <h3>{cources}</h3>
//   <h6 style={{textAlign: "start",color:"gray"}}>{who_uses}</h6>

//   <button onClick={()=>handleAddToCartTime({time})}class="make-as-read-btn">Make as Read</button>



// </div>



 


//        <p>Price : ${price}</p>
//        <p>Menufacturer : {seller}</p>
//        <p>Rating : {ratings} Stars</p>
//        </div>
//        {/* <button  onClick={()=>handleAddToCart(props.product)} className='btn-cart'>
//         Add To Cart
        
//         </button> */}

        



//         </div>
//     );
// };

// export default Product;




















import React, { useState } from 'react';
import './Product.css';

const Product = (props) => {
    const [showBookmarkCard, setShowBookmarkCard] = useState(false);

    console.log(props)

    const { img, name, price, seller, ratings, user_img, pb_date, read_time, cources, who_uses, time } = props.product;

    const handleAddToCart = props.handleAddToCart;
    const handleAddToCartTime = props.handleAddToCartTime;

    const handleBookmarkClick = () => {
        setShowBookmarkCard(true);
    }

    return (
        <div>
            <div className='product-info'>
                <div className='card mb-3'>
                    <img src={img} className='card-img-top' alt='...' />
                    <div className='card-body'>
                        <div className='user_con_main'>
                            <div className='user_img_con'>
                                <img style={{ borderRadius: '10%', height: '80px', width: '75px' }} src={user_img}></img>
                                <div className='users_details'>
                                    <h2 className='product-name'>{name}</h2>
                                    <p>{pb_date}</p>
                                </div>
                            </div>
                            <div className='user_img_con_read'>
                                <p className='read_time'>{read_time}</p>
                                <button onClick={handleBookmarkClick} className='bookmark_btn'>
                                    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' className='bi bi-bookmark' viewBox='0 0 16 16'>
                                        <path d='M4.5 1A.5.5 0 0 0 4 1.5v13.793l4-2.285 4 2.285V1.5A.5.5 0 0 0 12.5 1h-8zM5 2h6v9.707l-2.5-1.429L6 11.707l-2.5-1.43L5 11.707V2z' />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <h3>{cources}</h3>
                    <h6 style={{ textAlign: 'start', color: 'gray' }}>{who_uses}</h6>
                    <button onClick={() => handleAddToCartTime({ time })} className='make-as-read-btn'>
                        Make as Read
                    </button>
                </div>
             
            </div>
        </div>
    );
};

export default Product;






// import React, { useState } from 'react';
// import './Product.css';
// import Cart from '../Cart/Cart';

// const Product = (props) => {
//   const [showCart, setShowCart] = useState(false);
//   const { img, name, price, seller, ratings, user_img, pb_date, read_time, cources, who_uses } = props.product;

//   const handleAddToCart = () => {
//     setShowCart(true);
//     props.handleAddToCart(props.product);
//   };

//   return (
//     <div>
//       <div className='product-info'>
//         <div className='card mb-3'>
//           <img src={img} className='card-img-top' alt='...' />
//           <div className='card-body'>
//             <div className='user_con_main'>
//               <div className='user_img_con'>
//                 <img style={{ borderRadius: '10%', height: '80px', width: '75px' }} src={user_img} alt='user' />
//                 <div className='users_details'>
//                   <h2 className='product-name'>{name}</h2>
//                   <p>{pb_date}</p>
//                 </div>
//               </div>
//               <div className='user_img_con_read'>
//                 <p className='read_time'>{read_time}</p>
//                 <button onClick={handleAddToCart} className='bookmark_btn'>
//                   <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' className='bi bi-bookmark' viewBox='0 0 16 16'>
//                     <path d='M4.5 1A.5.5 0 0 0 4 1.5v13.793l4-2.285 4 2.285V1.5A.5.5 0 0 0 12.5 1h-8zM5 2h6v9.707l-2.5-1.429L6 11.707l-2.5-1.43L5 11.707V2z' />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//           <h3>{cources}</h3>
//           <h6 style={{ textAlign: 'start', color: 'gray' }}>{who_uses}</h6>
//           <button className='make-as-read-btn'>Make as Read</button>
//         </div>
//         <p>Price : ${price}</p>
//         <p>Manufacturer : {seller}</p>
//         <p>Rating : {ratings} Stars</p>
//       </div>
//       <button onClick={handleAddToCart} className='btn-cart'>
//         Add To Cart
//       </button>
//       {showCart && <Cart cart={[props.product]} />}
//     </div>
//   );
// };

// export default Product;
