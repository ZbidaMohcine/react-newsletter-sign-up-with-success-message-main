import { useState } from 'react'
import Signup from './components/Signup'
import Redirection from './components/redirection'
import './App.css'

function App() {
  const [isForm, setIsForm] = useState(true)
  const [email,setEmail]= useState("");

  return (
    <>
      <div>
    {isForm ? <Signup setIsForm={setIsForm} setEmail={setEmail} email={email}/> : <Redirection setIsForm={setIsForm} email={email}/> }
      </div>
      
    </>
  )
}

export default App
