import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const Testimonials = () => {
// useRef helps us access DOM elements and stores a mutable value that doesnt causes re-render upon load of the page, in this case we are accesiing the ul.
const slider = useRef();
let tx = 0;


// Logic for back & nextButton
const slideForward = ()=> {
    if(tx > -50) {
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
// If translatex is -> 50 and on click render the next and vice versa with back button 

const slideBackward = ()=> {
    if(tx < 0) {
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}


  return (
    <div className='testimonials'>
        <img src={next_icon} alt='' className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt='' className='back-btn' onClick={slideBackward}/>

        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_1} alt=''/>
                            <div>
                                <h3>William Jackson 1</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>
                            Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                        </p>
                    </div>
                </li>
{/* images profiles and descriptions */}
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_2} alt=''/>
                            <div>
                                <h3>William Jackson 2</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>
                            Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                        </p>
                    </div>
                </li>

                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_3} alt=''/>
                            <div>
                                <h3>William Jackson 3</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>
                            Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                        </p>
                    </div>
                </li>

                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_4} alt=''/>
                            <div>
                                <h3>William Jackson 4</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>
                            Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                        </p>
                    </div>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Testimonials