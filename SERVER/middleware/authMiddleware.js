import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const protectedRoute = asyncHandler(async (req, res, next) => {
  // headers?
  const headers = req.headers.authorization;

  if (!headers) {
    res.status(400);
    throw new Error('No token.');
  }

  // bearer token?
  if (!headers.startsWith('Bearer')) {
    res.status(400);
    throw new Error('Wrong token.');
  }

  // success
  const token = headers.split(' ')[1];
  const verified = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(verified.id).select('-password');

  next();
});

export default protectedRoute;
