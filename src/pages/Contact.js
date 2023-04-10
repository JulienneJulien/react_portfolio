import React, {useState} from 'react';

function Contact() {

    const [formState, setFormState] = useState({name: '', email:'', message:''});

    const [error, setErrorMessage] = useState('');
    const {name, email, message} = formState};

    



















  return (
    <div>Contact</div>
  )
}

export default Contact


