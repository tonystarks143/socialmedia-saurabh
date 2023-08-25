import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import './register.scss';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [registrationResult, setRegistrationResult] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    const newUser = { username, email, password, name };
    try {
      const response = await axios.post('http://164.52.212.11/knowledge/api/auth/signup', newUser);

      if (response.data) {
        setRegistrationResult('Registration successful. You can now login.');
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
        {/* ... rest of your JSX */}
        <div className="right">
          <h1>Register</h1>
          <form onSubmit={handleRegister}>
            {/* ... form input fields */}
            <button type="submit">Register</button>
          </form>
          <p>{registrationResult}</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
