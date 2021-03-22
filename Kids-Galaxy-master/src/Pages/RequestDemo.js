import React, {useState} from 'react'
import '../styles/RequestDemo.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NavbarOnlyLogo from '../components/NavbarOnlyLogo';

const RequestDemo = () => {
   const [firstName, setFirstName] = useState();
   const [lastName, setLastName] = useState();
   const [contactNo, setContactNo] = useState();
   const [email, setEmail] = useState();

   return (
      <div>
         <Header />
         <NavbarOnlyLogo />
         <div class="row mainContentRequest">
            <div class="mainLeftRequest col-md-6 ">
               <ul class="choose">
                  <li class="choose_li">
                     <div class="row align-items-center justify-content-center">
                        <div class="col-md-1">
                           <h3 class="choose_li_no">1</h3>
                        </div>
                        <div class="col-md-2 fill_in_details">
                           <div class="why-li">
                              <img src="Images/Request Demo SVG/Group 10620.svg"alt="illustration" class="why-li" />
                           </div>
                        </div>
                        <div class="col-md-8 li-text">
                           <h3 class="why-li-heading">Fill in your details</h3>
                           <span class="why-li-text">To help us know you</span>
                        </div>
                     </div>
                  </li>
                  <li class="choose_li">
                     <div class="row align-items-center justify-content-center">
                        <div class="col-md-1">
                           <h3 class="choose_li_no">2</h3>
                        </div>
                        <div class="col-md-2 call_back">
                           <div class="why-li">
                              <img src="Images/Request Demo SVG/Group 11759.svg"alt="illustration" class="why-li" />
                           </div>
                        </div>
                        <div class="col-md-8 li-text">
                           <h3 class="why-li-heading">We call you back</h3>
                           <span class="why-li-text">To analyze your needs</span>
                        </div>
                     </div>
                  </li>
                  <li class="choose_li">
                     <div class="row align-items-center justify-content-center">
                        <div class="col-md-1">
                           <h3 class="choose_li_no">3</h3>
                        </div>
                        <div class="col-md-2 evaluate_needs">
                           <div class="why-li">
                              <img src="Images/Request Demo SVG/behavior.svg"alt="illustration" class="why-li"  />
                           </div>
                        </div>
                        <div class="col-md-8 li-text">
                           <h3 class="why-li-heading">We evaluate your needs</h3>
                           <span class="why-li-text">To provide you with most suitable solution</span>
                        </div>
                     </div>
                  </li>
                  <li class="choose_li">
                     <div class="row align-items-center justify-content-center">
                        <div class="col-md-1">
                           <h3 class="choose_li_no">4</h3>
                        </div>
                        <div class="col-md-2  deliver_demo">
                           <div class="why-li">
                              <img src="Images/Request Demo SVG/online.svg"alt="illustration" class="why-li" />
                           </div>
                        </div>
                        <div class="col-md-8 li-text">
                           <h3 class="why-li-heading">And deliver a demo</h3>
                           <span class="why-li-text">To provide you with our unique e-learning experience</span>
                        </div>
                     </div>
                  </li>
                  </ul>
            </div>
            <div class="middleLineRequest"></div>
            <div class="mainRightRequest col-md-6">
               <div class="card loginCardRequest">
                  <div class="cardContentRequest">
                  <div class="title">
                     <h1>Request Demo</h1>
                  </div>
                  <div class="inputs"> 
                     <form>
                        <span>
                           <label for="firstName" class="text-small-uppercase"
                              style={firstName ? {transform: "translate(0,0)"} : null}>First Name</label>
                           <input class="text-body requestDemoInput" id="firstName" name="firstName" type="text" required
                                 onChange={(e) => setFirstName(e.target.value)}/>
                        </span>
                        <span>
                           <label for="lastName" class="text-small-uppercase"
                              style={lastName ? {transform: "translate(0,0)"} : null}>Last name</label>
                           <input class="text-body requestDemoInput" id="lastName" name="lastName" type="text" required
                              onChange={(e) => setLastName(e.target.value)}/>
                        </span>
                        <span>
                           <label for="contactNo" class="text-small-uppercase"
                              style={contactNo ? {transform: "translate(0,0)"} : null}>Contact Number</label>
                           <input class="text-body requestDemoInput" id="contactNo" name="contactNo" type="text" required
                              onChange={(e) => setContactNo(e.target.value)}/>
                        </span>
                        <span>
                           <label for="email" class="text-small-uppercase"
                              style={email ? {transform: "translate(0,0)"} : null}>Email</label>
                           <input class="text-body requestDemoInput" id="email" name="email" type="email" required
                              onChange={(e) => setEmail(e.target.value)}/>
                        </span>
                     </form>
                  </div>
                  <div class="next">
                     <a href="#"><button class="nextBtn">Next</button></a>
                  </div>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </div>
   )
}

export default RequestDemo
