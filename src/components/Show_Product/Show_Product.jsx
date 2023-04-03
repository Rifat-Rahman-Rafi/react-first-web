import React, { useState, useEffect } from 'react';
import './Show_Product.css';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Show_Product = () => {
  const [data, setData] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);

 

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('products.json');
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);



//   const handleBookmarkClick = (course) => {
//     if (!bookmarks.includes(course)) {
//        setBookmarks([...bookmarks, course]);
//     } 
 
//   };

const handleBookmarkClick = (course) => {
    if (!bookmarks.includes(course)) {
      setBookmarks([...bookmarks, course]);
      toast.success('Course bookmarked!');
    } else {
      toast.error('This course is already bookmarked!');
    }
  };

  const [totalReadTime, setTotalReadTime] = useState(0);
  const handleMakeAsReadClick = (time) => {
    setTotalReadTime(totalReadTime + time);
  };
  

  return (
    <>

<div class='container-fluid main_container container'>

<div class='row test '>


  <div class='col-sm-12 col-md-6 col-lg-6'>
    
  
  <div class="card-body">
  <div className='view_card '>
        {data.map((item) => (
          <div key={item.id}>
            <div className='product-info'>
              <div className='card mb-3'>
                <img style={{width:"98%",justifyContent: "center;"}}src={item.img} className='card-img-top' alt='...' />
                <div className='card-body'>
                  <div className='user_con_main'>
                    <div className='user_img_con'>
                      <img style={{ borderRadius: '10%', height: '80px', width: '75px' }} src={item.user_img}></img>
                      <div className='users_details'>
                        <h2 className='product-name'>{item.name}</h2>
                        <p>{item.pb_date}</p>
                      </div>
                    </div>
                    <div className='user_img_con_read'>
                      <p className='read_time'>{item.read_time}</p>
                      
                    
                      <button  onClick={() => handleBookmarkClick(item.cources)} className='bookmark_btn'>
                        <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' className='bi bi-bookmark' viewBox='0 0 16 16'>
                          <path d='M4.5 1A.5.5 0 0 0 4 1.5v13.793l4-2.285 4 2.285V1.5A.5.5 0 0 0 12.5 1h-8zM5 2h6v9.707l-2.5-1.429L6 11.707l-2.5-1.43L5 11.707V2z' />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <h3 className='cources_det'>{item.cources}</h3>
                <h6  className='cources_det' style={{color:"gray"}}>{item.who_uses}</h6>

                
                <button   onClick={() => handleMakeAsReadClick(item.time)}  className='make-as-read-btn cources_det'>Make as Read</button>

                
              </div>
            </div>
          </div>
        ))}
      </div>
  </div>



  </div>



  <div class='col-sm-12 col-md-6 col-lg-6'>

     <div className='Bookmark_List'>
        <nav class='navbar  mb-3' style={{ borderRadius: '10px', backgroundColor: 'rgba(96, 71, 236, 0.1)' }}>
          <div class='container-fluid'>
            <span style={{fontSize:"30px",}} class='navbar-brand mb-0 h1 text-wrap'>Spent time on read : {totalReadTime} min </span>
          </div>
        </nav>
        <div class='card 'style={{backgroundColor:"lightgray"}}>
            <h1 style={{marginTop:"10px"}}>Bookmarked Blogs : {bookmarks.length}</h1>
          <div class='card-body'>
          {bookmarks.map((bookmark) => (
            <div key={bookmark}>
              <h2 style={{padding:"10px",backgroundColor:"White",margin:"10px",borderRadius:"10px"}}>{bookmark}</h2>
            </div>
          ))}
            {/* {bookmarks.map((bookmark, index) => (
              <div key={index}>
             <h5 class="card-title">Card title</h5>
     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
     <a href="#" class="btn btn-primary">Button</a>
   </div>
))} */}
</div>

      </div>
  </div>
</div>




</div>


</div>




    
     

 
  

  <h1 style={{marginTop:"30px"}}>What is the difference between props and state?</h1>
  <h3>Props : The Data is passed from one component to another.Props are read-only.</h3>
  <h3>State : The Data is passed within the component only.State is both read and write.</h3>
  
  <h1 style={{marginTop:"30px"}}>How does use state works?</h1>
  <h3>useState returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</h3>


  <h1 style={{marginTop:"30px"}}>where we use useEffect?</h1>
  <div style={{fontSize:"25px"}}>
  <li>Fetching data</li>
  <li>State change</li>
  <li>Props change</li>
  <li>Cling up function</li>
  <li>Handling user interactions</li>
  </div>
  <h1 style={{marginTop:"30px"}}>How does React works?</h1>
  <h3>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</h3>
<br></br>


 
  

  </>
       
    );
};

export default Show_Product;


