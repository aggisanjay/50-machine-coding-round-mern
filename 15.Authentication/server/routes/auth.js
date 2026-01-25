import express from 'express'

const authRouter=express.Router();

const USERS = {
  'john@example.com': {
    userId: '1',
    username: 'john_doe',
    email: 'john@example.com',
    password: 'password123',
    token: 'token-123-abc'
  },
  'jane@example.com': {
    userId: '2',
    username: 'jane_smith',
    email: 'jane@example.com',
    password: 'password456',
    token: 'token-456-def'
  },
  'admin@example.com': {
    userId: '3',
    username: 'admin',
    email: 'admin@example.com',
    password: 'admin123',
    token: 'token-789-ghi',
    role: 'admin'
  }
};


authRouter.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({
      error: 'Email and password are required'
    });
  }

  // Find user
  const user = USERS[email];

  // Check credentials
  if (!user || user.password !== password) {
    return res.status(401).json({
      error: 'Invalid credentials'
    });
  }

  // Return success with token
  res.json({
    message: 'Login successful',
    token: user.token,
    user: {
      userId: user.userId,
      username: user.username,
      email: user.email,
      role: user.role || 'user'
    }
  });
});

// VERIFY TOKEN
authRouter.get('/verify', (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ valid: false });
  }

  const VALID_TOKENS = {
    'token-123-abc': { userId: '1', username: 'john_doe', email: 'john@example.com' },
    'token-456-def': { userId: '2', username: 'jane_smith', email: 'jane@example.com' },
    'token-789-ghi': { userId: '3', username: 'admin', email: 'admin@example.com', role: 'admin' }
  };

  const user = VALID_TOKENS[token];

  if (user) {
    res.json({ valid: true, user });
  } else {
    res.status(403).json({ valid: false });
  }
});

// LOGOUT
authRouter.post('/logout', (req, res) => {
  res.json({ message: 'Logout successful' });
});


export default authRouter