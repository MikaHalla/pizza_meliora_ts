import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';

import userRoutes from './routes/userRoutes.js';
import pizzaRoutes from './routes/pizzaRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import connectDB from './config/db.js';
import errorHandler from './middleware/errorMiddleware.js';
// import authMiddleware from './middleware/authMiddleware.js';

const app = express();
dotenv.config();
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', userRoutes);
app.use('/api/pizza', pizzaRoutes);
app.use('/api/orders', orderRoutes);

app.use(errorHandler);
// app.use(authMiddleware);

const port = process.env.PORT || 5000;
const mode = process.env.NODE_ENV;

app.listen(port, () =>
  console.log(
    `Server running on port ${port} in ${mode} mode.`.cyan.underline
  )
);
