// import React, { useState } from 'react';
// import axios from 'axios';

// const Signup = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('/api/auth/register', { name, email, password });
//       alert('User registered successfully');
//     } catch (error) {
//       alert('Registration failed');
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <form onSubmit={handleSignup}>
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { TextField, Button, Typography, Container, Box, Link } from '@mui/material';

function Signup() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('Both fields are required');
      return;
    }

    console.log('Signup successful', formData);
    navigate('/Login');
  };

  return (
    <Container maxWidth="xs" style={{ paddingTop: '50px' }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        style={{ backgroundColor: '#f7f7f7', padding: '30px', borderRadius: '8px' }}
      >
        <Typography variant="h4" gutterBottom>
          Signup
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            required
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '20px' }}
          >
            Signup
          </Button>
        </form>
        <Box display="flex" justifyContent="center" marginTop="10px">
          <Link href="/forgot-password" variant="body2">
            Forgot Password?
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default Signup;