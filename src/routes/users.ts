import express, { Request, Response, Router } from 'express';
import User from '../models/User';

const router: Router = express.Router();

// Get all users
router.get('/', (req: Request, res: Response): void => {
  res.json(User.findAll());
});

// Get user by ID
router.get('/:id', (req: Request, res: Response): void => {
  const id: string = req.params.id;
  const user = User.findById(id);
  
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Create a new user
router.post('/', (req: Request, res: Response): void => {
  const { firstname, lastname } = req.body;
  
  // Validation
  if (!firstname || !lastname) {
    res.status(400).json({ message: 'firstname and lastname are required' });
    return;
  }
  
  const newUser = User.create({ firstname, lastname });
  res.status(201).json(newUser);
});

// Update user
router.put('/:id', (req: Request, res: Response): void => {
  const id: string = req.params.id;
  const { firstname, lastname } = req.body;
  
  // Validation
  if (!firstname && !lastname) {
    res.status(400).json({ message: 'firstname or lastname is required' });
    return;
  }
  
  const updatedUser = User.update(id, { firstname, lastname });
  
  if (updatedUser) {
    res.json(updatedUser);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Delete user
router.delete('/:id', (req: Request, res: Response): void => {
  const id: string = req.params.id;
  const deleted = User.delete(id);
  
  if (deleted) {
    res.status(200).json({ message: 'User deleted successfully' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

module.exports = router;
