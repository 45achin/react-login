import React, { useState } from 'react'

function Authform() {
   const[islogin,setisLogin]=useState(true);

  return (
    <div className='container'>
      <div className='form-container'>
          <div className='form-toggle'>
            <button className={islogin?'active' : ""} onClick={()=>setisLogin(true)}>Login</button>
            <button className={!islogin?'active' : ""} onClick={()=>setisLogin(false)}>Signup</button>
               
               </div>
               {islogin?<>
               <div className='form'>
                 <h2>Login form</h2>
                 <input type='email' placeholder='Email'/>
                 <input type='password' placeholder='password'/>
                 <a href="#">Forget password</a>
                 <button>Login</button>
                 <p>Not a Member?<a href="#" onClick={()=>setisLogin(false)}>Signup now</a></p>
               </div>
               
               </>:
               
               <> 
               <div className='form'>
               <h2>Signup form</h2>
                 <input type='email' placeholder='Email'/>
                 <input type='password' placeholder='password'/>
                 <input type='password' placeholder='Confirm password'/>
                 <button>Signup</button>
                 </div>
               </>}    
          </div>
    </div>
  )
}

export default Authform
