import React from 'react';
// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';
import {useState} from 'react' ;
function Contact(){
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');
//     const [touched, setTouched] = useState(false);

//     const [errorMessage, setErrorMessage] = useState('');
//     const handleInputChange = (e) => {
//         // Getting the value and name of the input which triggered the change
//         const { target } = e;
//         const inputType = target.name;
//         const inputValue = target.value;
    
//         // // Based on the input type, we set the state of either email, username, and password
//         // // TODO: Add an else statement to the end that will set the password to the value of 'inputValue'
//         // if (!validateEmail(email) || !name || !message) {
//         //     setErrorMessage('Email or name or message is invalid  ');
//         //     // We want to exit out of this code block if something is wrong so that the user can correct it
//         //     return;
//         //     // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
//         //   }
    
//           if (inputType === 'email') {
//             setEmail(inputValue);
//           } else if (inputType === 'userName') {
//             setName(inputValue);
//           } else if (inputType === 'message') {
//             setMessage(inputValue);
//           }
//       };

//       const handleFormSubmit = (e) => {
//         // Preventing the default behavior of the form submit (which is to refresh the page)
//         e.preventDefault();
        
//       };
//       const validateMessage =(e) =>
//       {
//         const { target } = e;
//         const inputType = target.name;
//         const inputValue = target.value;
//         if(!inputValue){
//             alert('please type some message')
//         }
//       }
//     return (
//         <div>
//         <p>Contact </p>
//         <form className="form">
//         <input
//             value={name}
//             name="name"
         
//             type="text"
//             placeholder="name"
//             onChange={(e) => setName(e.target.value)}
//           />
//           <input
//             value={email}
//             name="email"
           
//             type="email"
//             placeholder="email"
//             onChange={(e) => setEmail(e.target.value)}
           
//           />
//           <div className="form-group">
// <label htmlFor="message">Message</label>
// <textarea className="form-control" rows="5" value={message}  onChange={(e) => setMessage(e.target.value)} required/>
// </div>
       
//           <button type="button" onClick={handleFormSubmit}>
//             Submit
//           </button>
//         </form>
//         {errorMessage && (
//           <div>
//             <p className="error-text">{errorMessage}</p>
//           </div>
//         )}
//       </div>
//     );
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

  // Based on the input type, we set the state of either email, username, and password
  // TODO: Add an else statement to the end that will set the password to the value of 'inputValue'

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

  // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
  if (!validateEmail(email) || !name ) {
    setErrorMessage('Email or name is invalid');
    // We want to exit out of this code block if something is wrong so that the user can correct it
    return;
    // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
  }
  // if (!checkPassword(password)) {
  //   setErrorMessage(
  //     `Choose a more secure password for the account: ${userName}`
  //   );
  //   return;
  // }

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
  // if(inputType === 'name')
  // {
  //   if(!inputValue)
  //   setErrorMessage('please enter your name')
  //   else
  //   setErrorMessage('')
  // }


}
return (
  <div>
   
    <form className="form">
      <input
        value={name}
        name="name"
        onChange={handleInputChange}
        type="text"
        placeholder="name" onBlur={validate} 
      />
    <br/>
      {/* TODO Add another input field with a value, name, type, and placeholder of "password" */}
      {/* TODO Add a `onChange` attribute with a value of `handleInputChange` */}
      <input
        value={email}
        name="email"
        onChange={handleInputChange}
        type="email"
        placeholder="email" required onBlur={validate}
      />
       <br/>
        <textarea
        value={message}
        name="message"
        onChange={handleInputChange}
        type="text"
        placeholder="message" onBlur={validate}
      />
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

