import React, { useState }  from 'react'
import styles from '../styles/LoginPage.module.css'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword]= useState('')

  const [totalEntry, setTotalEntry]= useState([])
  const submitformbutton =(e)=>{
    const totalEntry ={email: email, password: password};
          setTotalEntry([...allEntry])
           e.preventDefault();
  }
  
  return (
    <form action='' className={styles.container} onSubmit={submitformbutton} >
    <div className={styles.main}  >
        <div>
           <label><h2 className={styles.login}>Log in</h2></label>
        </div>
    <div className={styles.inputfield} >
      <label htmlFor="input"> Email</label>
         <input type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <label htmlFor="input"> Password</label>
         <input type="password" name='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
    </div > 
    <button className={styles.btn} type='submit'> submit</button> 
    </div>
   
</form>
  )
}
