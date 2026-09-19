import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from "../../assets/mail_icon.svg"
import call_icon from "../../assets/call_icon.svg"
import location_icon from "../../assets/location_icon.svg"
import { useState } from 'react'


const Contact = () => {
const [inputValues,setInputValue]=useState({name:"",email:"",message:""})
console.log(inputValues)

     const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ab765b88-de91-4933-8ec7-9c1352e545bf");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
        setInputValue({name:"",email:"",message:""})
      alert(res.message)
    }
  };




    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I’m a fresher passionate about web development, currently looking for job opportunities where I can learn, grow, and contribute my skills to real-world projects. Feel free to reach out!</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /><p>deepakbareth@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /><p>+91-8000678983</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /><p>Noida</p>

                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor="">Your Name</label>
                    <input name="name" value={inputValues.name} onChange={(e)=>setInputValue({...inputValues,[e.target.name]:e.target.value})} type="text" placeholder='Enter your name'/>
                    <label htmlFor="">Your email</label>
                    <input  name="email" value={inputValues.email} onChange={(e)=>setInputValue({...inputValues,[e.target.name]:e.target.value})} type="text" placeholder='Enter your email'/>
                    <label htmlFor="">Write your message here</label>
                    <textarea value={inputValues.message} onChange={(e)=>setInputValue({...inputValues,[e.target.name]:e.target.value})} name="message" rows="8" placeholder='Enter your message'></textarea>
                    <button type='submit' className='contact-submit'>Submit now</button>
                    
                </form>
            </div>
        </div>
    )
}

export default Contact