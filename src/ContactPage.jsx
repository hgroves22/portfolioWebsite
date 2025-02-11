import React from 'react';
import './components/ContactPage.css';
import { useForm } from '@formspree/react';

function Contact() {

  const [state, handleSubmit] = useForm("manqdoza");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

  return (
    <div className="cp-main">
      <div className="cp-left-flex cp-side">
        <h2 className="cp-left-header">Contact Me</h2>
        <a href="mailto:henryjgroves24@gmail.com" className="cp-left-sub">henryjgroves24@gmail.com</a>
      </div>

      <div className="cp-right-flex cp-side">
        <h1 className="cp-right-header">Send A Note</h1>

        <form onSubmit={handleSubmit}>
          <input 
            className="form-name" 
            type="name" 
            name="name"
            placeholder="Name"
            autocomplete = "off" 
            required>
          </input>

          <input 
            className="form-email" 
            name="email"
            type="email" 
            placeholder="Email Address"
            autocomplete = "off" 
            required>
          </input>

          <textarea
            name="message"
            className="form-message" 
            rows="5" 
            cols="60" 
            placeholder="Enter Message"
            autocomplete = "off" 
            required>
          </textarea>
          
          <br></br>
          <button 
            className="cp-submit" 
            type="submit">
              
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;