import React from 'react'
import '../styles/Signup.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NavbarOnlyLogo from '../components/NavbarOnlyLogo';

const EducationalDetails = () => {
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
            <div class="card loginCard edu_card">
            <div class="cardContent">
              <div class="title edu_title">
                        <h1 style={{ fontSize: "49px"}}>Educational Details</h1>
              </div>
              <form>
                <div>
                <span>
                  <label for="board" class="text-small-uppercase edu_text">Select your Board</label>
                </span>
              </div>
                <div class="inputs edu_inputs">
                <div class="EducationalDetailsBoard row">
                  <div class="CBSE EducationalDetailsBoard_board edu_board col-3">
                    <p>CBSE</p>
                  </div>
                  <div class="ICSE EducationalDetailsBoard_board edu_board col-3">
                    <p>ICSE</p>
                  </div>
                  <div class="State EducationalDetailsBoard_board edu_board col-3">
                    <p>State</p>
                  </div>
                </div>
              </div>
              <span>
                  <label for="class" class="text-small-uppercase edu_text">Select your Class</label>
                  <input class="text-body" id="class" name="class" type="text" required />
              </span>
              <span>
                <div class="checkbox">
                    <div class="rememberBox">
                      <input type="checkbox" />
                        <p class="blue edu_checkbox">I would like to receive Kids Galaxy's newsletter.</p>
                    </div>
                </div>
              </span>
              <span class="buttons">
                  {/* <input class="text-small-uppercase-button backBtn edu_text_btn" id="submit" type="submit" value="Back" />
                  <input class="text-small-uppercase-button edu_text_btn" id="submit" type="submit" value="Submit"/> */}
                  <button type="button" class="btn btn-sm text-small-uppercase-button login_btn back_btn" id="submit">Back</button>
                  <button type="button" class="btn btn-sm text-small-uppercase-button login_btn back_btn" id="submit">Next</button>
              </span>
            </form>
              <div class="orLogin">
                <div class="hero">
                  <span class="hr"></span>
                  <p>Or signup using</p>
                  <span class="hr"></span>
                </div>
                <div class="faceG">
                  <img src="Images/Facebook.svg" alt="" />
                  <img src="Images/Gmail Icon.svg" alt="" />
                  <p>
                    Already a member?
                    <a href="#">
                      <span class="blue"> Log in</span>
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

export default EducationalDetails
