import React, { useState } from 'react';
import NavBar from '../components/navBar';
import { auth } from '../firebaseModule';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
	const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password.length < 6) {
            alert('Passwords must be atleast 6 character');
            return;
        }
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
	await auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
		console.log('user session is here', response)
        localStorage.setItem("session", response);
        navigate("/home");
      })
      .catch((err) => {
        console.error(err);
        alert(err.message);
      });
        console.log('User signup data:', { email, password });
        // Here, you can add your signup logic, like sending a request to your server
    }

    return (
        <div id="page-wrapper">
            {/* Header */}
            <section id="header" className="wrapper header-height">
                {/* Logo */}
                <div id="logo">
                    <h1><a href="#">Sahayog</a></h1>
                    <p>SMALL COMMUNITIES, BIG DREAM</p>
                </div>
                <NavBar />
            </section>
            {/* Intro */}
            <section id="intro" className="wrapper style1">
                <div className="title">Join with us</div>
                <div className="container col-10">
                    {/* Contact Form */}
                    <section>
                        <form method="post" onSubmit={handleSubmit} className="signup-form">
                            <div className="row gtr-50">
                                <div className="col-12">
                                    <input
                                        type="email"
                                        name="email"
                                        id="contact-email"
                                        placeholder="Email"
                                        className="input-field"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-6 col-12-small">
                                    <input
                                        type="password"
                                        name="password"
                                        id="contact-password"
                                        placeholder="Password"
                                        className="input-field"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-6 col-12-small">
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        id="confirm-password"
                                        placeholder="Confirm Password"
                                        className="input-field"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-12">
                                    <ul className="actions">
                                        <li><input type="submit" className="style1" value="Signin" /></li>
                                        <li><input type="reset" className="style2" value="Reset" /></li>
                                    </ul>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </section>
            {/* Footer */}
            <section id="footer" className="wrapper">
                <div className="title">Keep in touch</div>
                <div className="container">
                    <ul>
                        <li>&copy; All rights reserved Sahayog</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Signup;
