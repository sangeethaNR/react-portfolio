import React from 'react';
// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';
import {useState} from 'react' ;
function Contact(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [touched, setTouched] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');
    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        // // Based on the input type, we set the state of either email, username, and password
        // // TODO: Add an else statement to the end that will set the password to the value of 'inputValue'
        // if (!validateEmail(email) || !name || !message) {
        //     setErrorMessage('Email or name or message is invalid  ');
        //     // We want to exit out of this code block if something is wrong so that the user can correct it
        //     return;
        //     // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
        //   }
    
          if (inputType === 'email') {
            setEmail(inputValue);
          } else if (inputType === 'userName') {
            setName(inputValue);
          } else if (inputType === 'message') {
            setMessage(inputValue);
          }
      };

      const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
        
      };
      const validateMessage =(e) =>
      {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
        if(!inputValue){
            alert('please type some message')
        }
      }
    return (
        <div>
        <p>Contact </p>
        <form className="form">
        <input
            value={name}
            name="name"
         
            type="text"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            value={email}
            name="email"
           
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
           
          />
          <div className="form-group">
<label htmlFor="message">Message</label>
<textarea className="form-control" rows="5" value={message}  onChange={(e) => setMessage(e.target.value)} required/>
</div>
       
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    );
  }



export default Contact

{/* <div className="form-group">
<label htmlFor="message">Message</label>
<textarea className="form-control" rows="5" value={message} onBlur={validateMessage}  onChange={(e) => setMessage(e.target.value)} required/>
</div>
        */}