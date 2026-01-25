
const VALID_TOKENS = {
  'token-123-abc': {
    userId: '1',
    username: 'john_doe',
    email: 'john@example.com'
  },
  'token-456-def': {
    userId: '2',
    username: 'jane_smith',
    email: 'jane@example.com'
  },
  'token-789-ghi': {
    userId: '3',
    username: 'admin',
    email: 'admin@example.com',
    role: 'admin'
  }
};

// Authentication Middleware
const authenticateToken = (req, res, next) => {
  // Get token from Authorization header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Format: "Bearer TOKEN"

  // Check if token exists
  if (!token) {
    return res.status(401).json({
      error: 'Access denied',
      message: 'No token provided'
    });
  }

  // Verify token
  const user = VALID_TOKENS[token];

  if (!user) {
    return res.status(403).json({
      error: 'Forbidden',
      message: 'Invalid token'
    });
  }

  // Attach user to request
  req.user = user;
  next();
};


export default authenticateToken;