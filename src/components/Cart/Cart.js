import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
   let totalPrice = 0 ;
   let totalShipping = 0;
   let quantity = 0 ;
   let headerName='';
   let total_time = 0;
 
   for(const product of cart){
    product.quantity = product.quantity || 1;
    totalPrice =totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
    total_time=total_time+product.time;
    headerName=product.cources;
   }
   const tax = totalPrice*7/100;
   const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart'>

<nav style={{backgroundColor:"white",}}class="navbar">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">Spent time on read : {total_time} min</span>
  </div>
</nav>


<div style={{backgroundColor: "lightgray",marginTop:"20px",}} class="card">

  <div class="card-body">
    <blockquote class="blockquote mb-0">
        <h2>Bookmarked Blogs : {quantity}</h2>
        <h3 style={{backgroundColor:"white",margin:"10px",borderRadius:"10px"}}>{headerName}</h3>

        
    <h2>Order Summary</h2>
                <p>Selected Items : {quantity}</p>
                <p>Total Price : ${totalPrice} </p>
                <p>Shiping  :${totalShipping} </p>
                <p>Tax : ${tax.toFixed(2)}</p>
                <h6>Grand Total : ${grandTotal.toFixed(2)} </h6>
    </blockquote>
  </div>
</div>
           
              
        </div>
    );
};

export default Cart;