import React from 'react'
import { Link, useNavigate } from 'react-router-dom'



export const Navbar = (props) => {
  const navigation = useNavigate()
  
  const goToHome = () => {
    navigation('/', {
      state: {
        userId: 12,
        postId: 1,
      }
    })
  }

  
  return (
    <>
      <div>
        <nav>
          <ul>
            <li><Link to='/'>Go to home page</Link></li>
            <li><button onClick={() => goToHome()}>Go to home</button></li>
            <li><Link to='/hello/25/temp/10w0q0q'>Go to hello</Link></li>
          </ul>
        </nav>
        <hr/>
      </div>
      <div>
        {props.children}
      </div>
    </>
  )
}
