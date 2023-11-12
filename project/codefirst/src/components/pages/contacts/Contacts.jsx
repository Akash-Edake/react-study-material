import React,{useState} from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import TrialArea from '../../layout/TrialArea'

function Contacts() {
    let navigate = useNavigate();
    const [user, setuser] = useState({
      fullName: "",
      email: "",
      message: "",
    });
    const { fullName, email,message } = user;
  
    const onInputChange = (e) => {
      setuser({ ...user, [e.target.name]: e.target.value });
    };
  
    const onSubmit = async (e) => {
      e.preventDefault();
      await axios.post("https://fake-heroku2.herokuapp.com/product", user);
      navigate("/about");
    };
  return (
    <>
 
<section class="contact-area pt-120 pb-120">
    <div class="container">
        <div class="">
            <div class="row justify-content-center justify-content-lg-between">
                <div class="col-lg-6 col-md-8 order-2 order-lg-0">
                    <div class="section-title-two mb-30">
                        <h5 class="sub-title">Contact Us</h5>
                        <h2 class="title">Let's Talk Question<span>.</span></h2>
                    </div>
                    <div class="contact-wrap-content">
                        <p>Making for software espially of the relating espeially of the face costa when unknown galley of type and scrambled.</p>
                        <form onSubmit={(e) => onSubmit(e)} class="contact-form">
                            <div class="form-grp">
                                <label for="name">Your Name <span>*</span></label>
                                <input type="text" id="name" placeholder="full name" name='fullName' value={fullName} onChange={(e) => onInputChange(e)}/>
                            </div>
                            <div class="form-grp">
                                <label for="email">Your Email <span>*</span></label>
                                <input type="text" id="email" placeholder="info.example@.com" name='email' value={email} onChange={(e) => onInputChange(e)}/>
                            </div>
                            <div class="form-grp">
                                <label for="message">Your Message <span>*</span></label>
                                <textarea  id="message" placeholder="Opinion..." name='message' value={message} onChange={(e) => onInputChange(e)}></textarea>
                            </div>
                            <div class="form-grp checkbox-grp">
                                <input type="checkbox" id="checkbox"/>
                                <label for="checkbox">Don’t show your email address</label>
                            </div>
                            <button type="submit" class="btn">Send Now</button>
                        </form>
                    </div>
                </div>
                <div class="col-xl-5 col-lg-6 col-md-8">
                    <div class="contact-info-wrap">
                        <div class="contact-img">
                            <img src={'/img/images/contact_img.png'} alt=""/>
                        </div>
                        <div class="contact-info-list">
                            <ul>
                                <li>
                                    <div class="icon"><i class="fas fa-map-marker-alt"></i></div>
                                    <div class="content">
                                        <p>Sai Samrudhhi, Chinchwade Nagar, Swapnshilp Colony, Pimpri-Chinchwad, Maharashtra 411035</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="icon"><i class="fas fa-phone-alt"></i></div>
                                    <div class="content">
                                        <p>+91-9970611896 / 9890411896</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="icon"><i class="fas fa-envelope-open"></i></div>
                                    <div class="content">
                                        <p>info@codefirstacademy.com</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* <div class="contact-social">
                            <ul>
                                <li><Link to={'#'}><i class="fab fa-facebook-f"></i></Link></li>
                                <li><Link to={'#'}><i class="fab fa-twitter"></i></Link></li>
                                <li><Link to={'#'}><i class="fab fa-linkedin-in"></i></Link></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

{/* <TrialArea/> */}

    </>
  )
}

export default Contacts