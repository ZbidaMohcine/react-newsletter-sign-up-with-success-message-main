import { useState } from "react"
import image from "/assets/images/illustration-sign-up-desktop.svg"

export default function Signup({setIsForm,setEmail,email}) {

  const [isError,setIsError]= useState(false);
 const  handleClick=()=>{
    if( email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
  setIsForm(false)
  setIsError(false)
    }else{
      setIsError(true)
    }
  }
    return (
      <div className="container">
      <div>
        <div>
            <h1> Stay updated!</h1>
            <p> Join 60,000+ product managers receiving monthly updates on:</p>
        </div>
        <div>
            <ul>
                <ol><img src="assets/images/icon-list.svg"/> Product discovery and building what matters</ol>
                <ol><img src="assets/images/icon-list.svg"/> Measuring to ensure updates are a success</ol>
                <ol><img src="assets/images/icon-list.svg"/> And much more!</ol>
            </ul>
        </div>
        <div className="row">
        <div className="email">
            <span>Email address</span>
            {isError && <span className="messageError">Valid email required</span>}
        </div>
        <div className="inputButton">
        <input type="text" onChange={(e) => setEmail(e.target.value)} 
             value={email} className={isError?"inputError":""}/>
            <button onClick={handleClick}>  Subscribe to monthly newsletter</button>
        </div> 
        </div>
        </div>
      <div>
        <img src={image} alt="" />
      </div>
      </div>
    )
  }