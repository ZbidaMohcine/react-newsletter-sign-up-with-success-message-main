export default function Redirection({setIsForm,email}) {
const handleClick=()=>{
  setIsForm(true)
}

    return (
      <div className="container1">
    
        <img className="icone1" src="assets/images/icon-list.svg"/>
        <h1>Thanks for subscribing!</h1>
      <p>
      A confirmation email has been sent to {email}. 
      Please open it and click the button inside to confirm your subscription.
      </p>            
     <button  onClick={handleClick}>Dismiss message </button>
     
      </div>
    )
  }