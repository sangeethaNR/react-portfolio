import React from 'react';
// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';
import {useState} from 'react' ;
function Contact(){
  const inputStyle ={

    padding: '11px',
   margin : '7px'
};
const [email, setEmail] = useState('');
const [name, setName] = useState('');
// TODO: Create a password variable and a function "setPassword" using useState
const [message, setMessage] = useState('');
const [errorMessage, setErrorMessage] = useState('');

const handleInputChange = (e) => {
  // Getting the value and name of the input which triggered the change
  const { target } = e;
  const inputType = target.name;
  const inputValue = target.value;


  if (inputType === 'email') {
    setEmail(inputValue);
  } else if (inputType === 'name') {
    setName(inputValue);
  }
  else if (inputType === 'message') {
    setMessage(inputValue);
  }
};

const handleFormSubmit = (e) => {
  // Preventing the default behavior of the form submit (which is to refresh the page)
  e.preventDefault();

  // First we check to see if the email is not valid or if the name is empty. If so we set an error message to be displayed on the page.
  if (!validateEmail(email) || !name ) {
    setErrorMessage('Email or name is invalid');
   
    return;
   
  }
 

  // If successful, we want to clear out the input after registration.
  setName('');
  // TODO: Set the password back to an empty string after the user clicks submit
setMessage('');
  setEmail('');
  setErrorMessage('')

};
const validate =(e) =>{
  const { target } = e;
  const inputType = target.name;
  const inputValue = target.value;
  switch (inputType){
    case 'name' :
      if(!inputValue)
      setErrorMessage('please enter your name')
      else
      setErrorMessage('')
      break;
      case 'email' :
        if (!validateEmail(email)  ) {
          setErrorMessage('Email  is invalid');
        }
        else
        setErrorMessage('')
        break;
        case 'message' :
          if(!inputValue)
          setErrorMessage('please enter some message')
          else
          setErrorMessage('')
          break;
          default:
            setErrorMessage('')
  }



}
return (
  <div  style={{
    margin :'59px'}}
    >
   
    <form className="form" style={{
   padding :'10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    }}>
      <input
        value={name}
        name="name"
        onChange={handleInputChange}
        type="text"
        placeholder="name" onBlur={validate} style ={inputStyle}
      />
    <br/>
     
      <input
        value={email}
        name="email"
        onChange={handleInputChange}
        type="email"
        placeholder="email" required onBlur={validate} tyle ={inputStyle}
      />
       <br/>
        <textarea
        value={message}
        name="message"
        onChange={handleInputChange}
        type="text"
        placeholder="message" onBlur={validate} tyle ={inputStyle}
      />
      <button type="button" onClick={handleFormSubmit} style={{   

    marginLeft: '137px',
    marginTop: '34px'

 }}>
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


