import React, { useState } from 'react';
import './Contact.css';
import firebase from '../firebase';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        firebase.firestore().collection('contacts').add({
            name: name,
            email: email,
            message: message
        })
            .then(() => {
                alert("Message has been Submitted ✌");
                setLoader(false);
            })
            .catch(error => {
                alert(error.message);
                setLoader(false);
            });

        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form__data">
                <div className="form__info">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <textarea
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
            </div>
            <button type="submit" style={{ background: loader ? "#ccc" : "rgba(21, 18, 37, 0.8)" }}>Submit</button>
        </form>
    )
}

export default Contact;

