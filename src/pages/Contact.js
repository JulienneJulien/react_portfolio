import React, {useState} from 'react';
import { validateEmail } from '../helpers/helper';
import "../styles/Contact.css";

function Contact() {

    const [formState, setFormState] = useState({name: '', email:'', message:''});

    const [error, setErrorMessage] = useState('');
    const {name, email, message} = formState;

    function handleChange(event) {
      if (event.target.name === 'email') {
        const isValid = validateEmail(event.target.value);

          if(!isValid) {
            setErrorMessage('Please provide a valid email address.');
          } else {
            setErrorMessage('');
          }
        } else {
        if (!event.target.value.length) {
          setErrorMessage(`${event.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
      
      if(!error) {
        setFormState({...formState, [event.target.name]: event.target.value})
      }
    }

      function handleSubmit(event) {
        event.preventDefault();
    }

        return (
       
        <div>
          <h2>Contact</h2> 
          <p><b><i>Please contact me below!</i></b></p>
          
          <form class="justify-content-center" id="contact-form">
              <div>
                  <label htmlFor="name">Name:</label>
                  <input class="form-control" type="text" name="name"  defaultValue={name} onBlur={handleChange}/>
              </div>
              <div >
                  <label htmlFor="email">Email:</label>
                  <input class="form-control" type="email"  name="email" defaultValue={email} onBlur={handleChange} />
              </div>
              <div>
                  <label htmlFor="message">Message:</label>
                  <textarea class="form-control" name="message" defaultValue={message} onBlur={handleChange} rows="7" />
              </div> 
              <div/>
              {error && (
              <div>
                  <p className="error-text">{error}</p>
              </div>
              )}
  
              <div>
              <button data-testid='button' class="btn btn-outline-dark mt-4" type="submit" onSubmit={handleSubmit}>Submit</button>
              </div>
          </form>
        </div>  

        );
  
  }
export default Contact;
