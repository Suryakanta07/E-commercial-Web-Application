import React from 'react';
import Modal from 'react-modal';


import "../styles/billing.css";
import { useState } from 'react';

function Billing({price}) {

    const [open,setOpen]= useState(false)


    const openModel = () =>{
        setOpen(true)
    }

     const closeModel = () =>{
        setOpen(false)
    }
       
  console.log(price)
  return (
    <div  >
       
           

             <Modal className="modal"
          ariaHideApp={false}
          isOpen={true}
          onAfterOpen={openModel}
          onRequestClose={closeModel}
        //   style={customStyles}
          contentLabel="Example Modal"
        >
        
          <h3>Your SubTotal    {price}</h3>
          <h1>Thank You For Your Purchasing from Our site</h1>
          
        </Modal>
            
       
        
        
    </div>

)}

export default Billing;