import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';

import userRoutes from './routes/userRoutes.js';
import pizzaRoutes from './routes/pizzaRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import connectDB from './config/db.js';
import errorHandler from './middleware/errorHandler.js';

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT;
const mode = process.env.NODE_ENV;

app.use('/api/users', userRoutes);
app.use('/api/pizza', pizzaRoutes);
app.use('/api/orders/', orderRoutes);

app.use(errorHandler);

app.listen(port, () =>
  console.log(
    `Server running on port ${port} in ${mode} mode.`.cyan.underline
  )
);
