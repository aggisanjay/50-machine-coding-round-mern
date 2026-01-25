import express from 'express'
import authenticateToken from '../middleware/auth.js';

const userRouter = express.Router();

// Protected route - Get user profile
userRouter.get('/profile', authenticateToken, (req, res) => {
  res.json({
    message: 'Profile data',
    user: req.user
  });
});

// Protected route - Get dashboard data
userRouter.get('/dashboard', authenticateToken, (req, res) => {
  res.json({
    message: 'Welcome to dashboard',
    user: req.user,
    data: {
      lastLogin: new Date().toISOString(),
      notifications: 5,
      messages: 12
    }
  });
});

// Protected route - Update profile
userRouter.put('/profile', authenticateToken, (req, res) => {
  const { username } = req.body;
  
  res.json({
    message: 'Profile updated',
    user: {
      ...req.user,
      username: username || req.user.username
    }
  });
});

export default userRouter;