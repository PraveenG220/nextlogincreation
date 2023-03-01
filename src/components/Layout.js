import React from 'react'
import LoginPage from './LoginPage'


export default function Layout(Children) {
  return (
    <div>
        <LoginPage>
             {Children}  
        </LoginPage>
     
    </div>
  )
}
