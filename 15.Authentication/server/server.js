import express from 'express';
import cors from 'cors'
import authRouter from './routes/auth.js';
import userRouter from './routes/user.js';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());


app.use('/api/auth',authRouter)
app.use('/api/user',userRouter)

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});