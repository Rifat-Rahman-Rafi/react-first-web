// import React, { createFactory, useEffect, useState } from 'react';
// import { addToDb, getShoppingCart } from '../../utilities/fakedb';
// import Cart from '../Cart/Cart';
// import Product from '../Product/Product';
// import './Shop.css';
// const Shop = () => {
//     const [products,setProducts] = useState([]);
//     const [cart,setCart] = useState([])
//     //data load
//     useEffect(()=>{
//         fetch('products.json')
//         .then(res =>res.json())
//         .then(data => setProducts(data))
//     },[])

//     useEffect(()=>{
//         const storedCart = getShoppingCart();
//         const savedCart= [];
//         for(const id in storedCart){
//             const addedProduct = 
//             products.find(product =>product.id === id);
//             if(addedProduct){
//            const quantity = storeCart[id];
//            addedProduct.quantity = quantity;
//             savedCart.push(addedProduct);
//             }
//             // console.log('added product',addedProduct)
//         }
//         setCart(savedCart);

//     },[products])
//     const handleAddToCart = (product) =>{
//     //    cart.push(product);
//     const newCart = [...cart,product];
//     setCart(newCart);
//     addToDb(Product.id)

//     }

//     const handleAddToCartTime = (time) =>{
//         //    cart.push(product);

//         console.log(cart)
//         const newCart = [...cart,time];
//         setCart(newCart);
        
    
//         }


  


//     return (
//         <div className='shop-container'>
//            <div className="products-container">
//                 {
//                     products.map(product => <Product
//                         key={product.id}
//                         product = {product}
//                         handleAddToCart={handleAddToCart }
//                         handleAddToCartTime={handleAddToCartTime}
//                         >
//                     </Product>)
//                 }
//             </div> 
//             <div className="cart-container">
//               <Cart cart={cart}></Cart>
//             </div>
//         </div>
//     );
// };

// export default Shop;



import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import Bookmarks from '../Bookmarks/Bookmarks'; // import the Bookmarks component
import './Shop.css';

// const Shop = () => {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     fetch('products.json')
//       .then((res) => res.json())
//       .then((data) => setProducts(data));
//   }, []);

//   useEffect(() => {
//     const storedCart = getShoppingCart();
//     const savedCart = [];
//     for (const id in storedCart) {
//       const addedProduct = products.find((product) => product.id === id);
//       if (addedProduct) {
//         const quantity = storedCart[id];
//         addedProduct.quantity = quantity;
//         savedCart.push(addedProduct);
//       }
//     }
//     setCart(savedCart);
//   }, [products]);

//   const handleAddToCart = (product) => {
//     const newCart = [...cart, product];
//     setCart(newCart);
//     addToDb(product.id);
//   };

//   const handleAddToCartTime = (time) => {
//     const newCart = [...cart, time];
//     setCart(newCart);
//   };

//   return (
//     <div className='shop-container'>
//       <div className='products-container'>
//         {products.map((product) => (
//           <Product
//             key={product.id}
//             product={product}
           
//             handleAddToCartTime={handleAddToCartTime}
//           />
//         ))}
//       </div>
//       <div className='cart-container'>
//         <Cart cart={cart} />
//         <Bookmarks cart={cart} /> {/* render the Bookmarks component */}
//       </div>
//     </div>
//   );
// };



const Shop = () =>  {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('product.json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}


export default Shop;






  // const handleAddToCartTime = (time) => {
    //     const productIndex = cart.findIndex((p) => p.id === time.id);
    //     if (productIndex >= 0) {
    //       const updatedProduct = {
    //         ...cart[productIndex],
    //         time: cart[productIndex].time + time.time,
    //       };
    //       const newCart = [...cart];
    //       newCart[productIndex] = updatedProduct;
    //       setCart(newCart);
    //     } else {
    //       const newProduct = { ...time };
    //       setCart([...cart, newProduct]);
    //     }
    //   };
      
    // const handleAddToCartTime = (time) => {
    //     const productIndex = cart.findIndex((p) => p.id === time.id);
    //     if (productIndex >= 0) {
    //       const newCart = [...cart];
    //       newCart[productIndex].time += time.time;
    //       setCart(newCart);
    //     } else {
    //       const newProduct = { ...time };
    //       setCart([...cart, newProduct]);
    //     }
    //   };
      