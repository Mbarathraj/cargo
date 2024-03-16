import React from 'react'
import CloseIcon from '../assests/img/close.png';

function PriceFinder() {
  return (
   
    <div className="row d-flex flex-column p-3">
         <h3 className='text-center'>Price Finder</h3>
         <p>Here You Can Check the price</p>
        <form action="">
        <label htmlFor="">Weight :</label>
         <input type="number" className='form-control'/>
         <button className='btn btn-outline-primary mt-3 col-12'>Find</button>
        </form>
        <img src={CloseIcon} alt="" style={{width:"45px",top:"0px",right:"1px"}} className='closeIcon' onClick={()=> document.querySelector('.priceFinder').classList.remove('show')}/>
        

    </div>
  )
}

export default PriceFinder
