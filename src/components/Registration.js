// import { useState } from 'react';
// import axios from 'axios';



// function Registration() {

//     const [name, setName] = useState("");
//     const [phoneNumber, setPhoneNumber] = useState("");
//     const [Address, setAddress] = useState("");

//     const handleNameChange = (value) => { setName(value); }
//     const handlePhoneNoChange = (value) => { setPhoneNumber(value); }
//     const handleAddressChange = (value) => { setAddress(value); }
//     const handleSave = () => {
//         const data =
//         {
//             Name: name,
//             PhoneNumber: phoneNumber,
//             Address: Address,
//             IsActive: 1
//         };

//         const url = 'https://localhost:44383/api/Test/Registration';
//         axios.post(url, data).then((result) => {
//             alert(result.data);
//         }).catch((error) => {
//             alert('error');
//         })

//     }


//     return (
//         <div className='Registration'>
//             <div className='RegistrationContent'>
//             <label htmlFor='uname'>Username </label>
//             <input type="text" name="uname" placeholder='Enter your name' id='txtName' onChange={(e) => handleNameChange(e.target.value)} />
//             <br>
//             </br>
//             <label>Phone Number </label>
//             <input type="text" name="uname" placeholder='Enter your phone number' id='txtName' onChange={(e) => handlePhoneNoChange(e.target.value)} />
//             <br>
//             </br>
//             <label>Address </label>
//             <input type="text" name="uname" placeholder='Enter your Address' id='txtName' onChange={(e) => handleAddressChange(e.target.value)} />
//             <br>
//             </br>
//             <button onClick={() => handleSave()}>Save</button>
//         </div>
//         </div>
// )}
// export default Registration

import Login from './Login';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import CloseIcon from '../assests/img/close.png';


const RegistrationForm = () => {
    const Navi = useNavigate()

    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [Address, setAddress] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data =
        {
            Name: name,
            PhoneNumber: phoneNumber,
            Address: Address,
            IsActive: 1
        };

        const url = 'https://localhost:44383/api/Test/Registration';
        axios.post(url, data).then((result) => {
            alert(result.data);
        }).catch((error) => {
            alert('error');
        })
    };
    function handleLog() {
        Navi('/Login')
    }

    return (
        <div className='Registration'>
            <h1>Cargo Manager System</h1>

            <div className="container1 row">
                <h3>Create Account</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label htmlFor="Phone">Phone No :</label>
                    <input
                        type="number"
                        id="Phone"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <label htmlFor="Address">Address :</label>
                    <input
                        type="text"
                        id="Address"
                        required
                        value={Address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <div className="row d-flex justify-content-center m-2">
                    <button  className='btn1 col-8' type="submit">Create Account</button>
                    </div>
                </form>
                <img src={CloseIcon} alt="" style={{width:"45px"}} className='closeIcon' onClick={()=> document.querySelector('.signUp').classList.remove('show')}/>
                {/* <p>
                    Already have an account? <span className='siginbtn' onClick={() => handleLog()}>Sign in</span>
                </p> */}
            </div>
        </div>
    );
};

export default RegistrationForm;