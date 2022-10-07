import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// @desc     register new user
// @route    POST /api/users/register
// @access   public
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // is all the required form info in the request body?
  if (!name) {
    res.status(400);
    throw new Error('No user name.');
  }

  if (!email) {
    res.status(400);
    throw new Error('No email.');
  }

  if (!password) {
    res.status(400);
    throw new Error('No password.');
  }

  res.send('all good');
  // existuje uz user??

  // hash password

  // create user

  // generate token
});

// @desc     sign in existing user
// @route    POST /api/users/login
// @access   public
export const loginUser = asyncHandler(async (req, res) =>
  res.send('login user from controller')
);
