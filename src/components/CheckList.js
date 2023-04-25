// import React from 'react';
import React,{useState} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Billing from "./Billing"
import picture2 from "../assets/picture2.jpg"
import picture3 from "../assets/picture3.png"
import picture4 from "../assets/picture4.png"

import "../styles/checkList.css";

function CheckList({price}) {

  const [show, setShow] = useState(false)
 
 const onToken = (token) => {
  console.log(token);
  setShow(true)
 }
 
  const finalPrice = price*100
  // console.log(price)

  //  const [payment, setPayment] = useState(false);
    const handleClick = () => {
     console.log("hii");
 }


  return (
    <>

        <div class="card">
  <h2>Payments</h2>
  <p>Suggested for you</p>

    <form>
      <input type="radio" id="html" name="fav_language" value="HTML"/>
       <img src={picture2} alt="Trulli" width="60" height="30"></img><br/><br/>

      <input type="radio" id="css" name="fav_language" value="CSS"/>
       <img src={picture3} alt="Trulli" width="60" height="30"></img><br/><br/>

      <input type="radio" id="css" name="fav_language" value="CSS"/>
      <img src={picture4} alt="Trulli" width="60" height="30"></img>
    </form>  <br/><br/>
    
    {/* <button className='btn1' onClick={()=>setPayment(true)}>Continue</button> */}

   
      <StripeCheckout className="paywithcard"
        token={onToken}
        onClick={handleClick}
        name="My Pay"
        currency="INR"
        amount={finalPrice}
        stripeKey="pk_test_51MwQxhSCl0jbFD3lvwyQEP8X0xycbvGLYVAozaLeR3qfmfirVKqmQh1IPw1z8X9yvkTm1H76hzXYCmIdXFGdntVg00HVYd9orv"
      />
     {show && <Billing price={price}/>}

</div>



       




{/*     
   
    
    { payment && <Form price={price}/> } */}
    
    </>
   
   

  );
}

export default CheckList;