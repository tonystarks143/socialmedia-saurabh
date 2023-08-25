import { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.scss';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [registrationResult, setRegistrationResult] = useState('');

    const history= useNavigate();
    

    const handleRegister = async (e) => {
        e.preventDefault();
      
        const newUser = { username, email, password, name };
        try {
          const response = await axios.post('http://164.52.212.11/knowledge/api/auth/signup', newUser);
      
          if (response.data) {
            setRegistrationResult('Registration successful. You can now login.');
            toast.success('Registration successful. You can now login.', {
              position: toast.POSITION.TOP_RIGHT
            });
            setTimeout(function(){
                history('/login');
               }, 1000)
          } else {
            setRegistrationResult('Registration failed. Please check your details and try again.');
          }
        } catch (error) {
          setRegistrationResult('Registration failed. Please check your details and try again.');
        }
      };
      

    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h2>Welcome to our signup page!</h2>
                    <p>
                    Create your account today to start exploring, connecting, and engaging with like-minded individuals. Our platform offers a seamless and user-friendly registration process, ensuring that you're just a few steps away from becoming a part of our vibrant community. Simply provide your desired username, a valid email address, a secure password, and your name.
                        
                    </p>
                    <span>Do you have an account?</span>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form onSubmit={handleRegister}>
                        <input type="text"
                            placeholder="Username"
                            value={username}
                            onChange={e => setUsername(e.target.value)} />
                        <input type="email"
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
                        <input type="password"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)} />
                        <input type="text"
                            placeholder="Name"
                            value={name}
                            onChange={e => setName(e.target.value)} />
                        <button type="submit">Register</button>
                    </form>
                    <p>{registrationResult}</p>
                </div>
            </div>
        </div>
    );
};

export default Register;
