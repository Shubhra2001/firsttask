import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
   return (
      <div class= "footer up">
      <div class="footer-container">
         <div class= "social">
            <img src="Images/Facebook Icon.svg" alt="" style={{padding: "5px"}} />
            <img src="Images/Instagram Icon.svg" alt="" style={{padding: "5px"}} />
            <img src="Images/LinkedIn Icon.svg" alt="" style={{padding: "5px"}} />
         </div>
         <div class= "arrow">
            <img src="Images/Footer Up Icon.svg" alt="" />
         </div>
         <div class= "contacts">
            <img src="Images/Icon material-chat.svg" alt="" />
            <h2>Contact</h2>
         </div>
      </div>
    </div>
   )
}

export default Footer
