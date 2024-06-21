import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';

function Signup() {
    let firstInputRef = useRef();
    let lastInputRef = useRef();
    let ageInputRef = useRef();
    let emailInputRef = useRef();
    let passwordInputRef = useRef();
    let mobileInputRef = useRef();
    let profilePicInputRef = useRef();


    let [profilePic, setProfilePic] = useState([]);


    let onSignupUsingFormData = async () => {
        alert("Sending Form data");
        let dataToSend = new FormData();
        dataToSend.append("firstName", firstInputRef.current.value);
        dataToSend.append("lastName", lastInputRef.current.value);
        dataToSend.append("age", ageInputRef.current.value);
        dataToSend.append("email", emailInputRef.current.value);
        dataToSend.append("password", passwordInputRef.current.value);
        dataToSend.append("mobile", mobileInputRef.current.value);
        for (let i = 0; i < profilePicInputRef.current.files.length; i++) {
            dataToSend.append("profilePic", profilePicInputRef.current.files[i]);
        }

        let reqOption = {
            method: "POST",
            body: dataToSend,
        }
        let JSONData = await fetch("/register", reqOption);
        let JSOData = await JSONData.json();
        console.log(JSOData);
    }

    return (
        <div className='App'>
            <form>
                <div>
                    <label>First Name</label>
                    <input ref={firstInputRef}></input>
                </div>
                <div>
                    <label>Last Name</label>
                    <input ref={lastInputRef}></input>
                </div>
                <div>
                    <label>Age</label>
                    <input ref={ageInputRef}></input>
                </div>
                <div>
                    <label>Email</label>
                    <input ref={emailInputRef}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input ref={passwordInputRef}></input>
                </div>
                <div>
                    <label>Mobile</label>
                    <input ref={mobileInputRef}></input>
                </div>
                <div>
                    <label>Profile Pic</label>
                    <input ref={profilePicInputRef} type='file' accept='image/*' onChange={(eo) => {
                        let selectedPicPath = URL.createObjectURL(eo.target.files[0])
                        setProfilePic(selectedPicPath);
                    }}></input>
                    <br></br>
                    <img alt='' src={profilePic} className='profilePicPreview'></img>
                </div>
                <div>

                    <button type='button' onClick={() => onSignupUsingFormData()}>Signup (Form Data)</button>
                </div>

            </form>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Link to="/">Login</Link>
        </div>
    )
}

export default Signup