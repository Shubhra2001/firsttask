import React from 'react'
import '../styles/Signup.css'
import { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NavbarOnlyLogo from '../components/NavbarOnlyLogo';

const CreateAccount = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confPassword, setConfPassword] = useState();

   return (
      <div>
      <div class="green-bg"></div>                                            
    <div class="white-bg"></div>
         <Header />
         <NavbarOnlyLogo />
         <div class="row container-fluid mainContent">
        <div class= "mainLeft col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div class="mainLeftContent d-md-none d-lg-block">
                <img src="Images/Sign Up Illustration.svg" alt="" />
                <p>
                  To get exciting discounts, offers, free study resources, <br /> special
                  programs from Kids Galaxy
                  <span class="blue"> Sign Up here.</span>
                </p>
          </div>
        </div>
        <div class="middleLine d-md-none d-lg-block"></div>
        <div class= "mainRight col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div class="card loginCard">
            <div class="cardContent">
              <div class="title">
                <h1>Create Account</h1>
              </div>

              <form>
                <span>
                  <label for="email" class="text-small-uppercase"
                    style={email? {transform: "translate(0,0)"} : null}   >Email</label>
                  <input class="text-body" id="email" name="email" type="email" required
                    onChange={(e) => setEmail(e.target.value)} />
                </span>
                <span>
                  <label for="password" class="text-small-uppercase"
                     style={password? {transform: "translate(0,0)"} : null}   >Password</label>
                  <input class="text-body" id="password" name="password" type="password" required
                     onChange={(e) => setPassword(e.target.value)}  />
                </span>
                <span>
                  <label for="confPassword" class="text-small-uppercase"
                    style={confPassword? {transform: "translate(0,0)"} : null}   >Confirm Password</label>
                   <input class="text-body" id="confPassword" name="confPassword" type="password" required
                      onChange={(e) => setPassword(e.target.value)} />
                </span>
                <span>
                  {/* <input class="text-small-uppercase-button" id="submit" type="submit" value="Submit"/> */}
                  <button type="button" class="btn btn-sm text-small-uppercase-button login_btn" id="submit">Next</button>
                </span>
              </form>

              <div class="orLogin">
                <div class="hero">
                  <span class="hr"></span>
                  <p>Or log in using</p>
                  <span class="hr"></span>
                </div>
                <div class="faceG">
                  <img src="Images/Facebook.svg" alt="" />
                  <img src="Images/Gmail Icon.svg" alt="" />
                  <p>
                    New User?
                    <a href="#" >
                      <span class="blue"> Sign Up</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <Footer />
      </div>
   )
}

export default CreateAccount
