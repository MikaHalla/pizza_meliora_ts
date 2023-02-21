import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// @desc     register new user
// @route    POST /api/users/register
// @access   public
export const registerUser = asyncHandler(async (req, res) => {
  const { name, password } = req.body;

  // is all the required form info in the request body?
  if (!name || !password) {
    res.status(400);
    throw new Error('Please fill all required fields.');
  }

  // is the username available??
  const userAlreadyExists = await User.findOne({ name });
  if (userAlreadyExists) {
    res.status(400);
    throw new Error('Username taken.');
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // create user
  const user = await User.create({
    name,
    password: hashedPassword,
  });

  // generate token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  // succesful response
  res
    .status(201)
    .json({ message: 'User created.', token, name: user.name });
});

// @desc     sign in existing user
// @route    POST /api/users/login
// @access   public
export const loginUser = asyncHandler(async (req, res) => {
  const { name, password } = req.body;

  // is all the required form info in the request body?
  if (!name || !password) {
    res.status(400);
    throw new Error('Incomplete credentials.');
  }

  // does the user exist in the database? does the password match?
  const user = await User.findOne({ name });

  if (user && (await bcrypt.compare(password, user.password))) {
    // generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });

    // succesful response
    res
      .status(200)
      .json({ message: 'Logged in.', token, name: user.name });
  } else {
    res.status(401);
    throw new Error('Incorrect credentials.');
  }
});
