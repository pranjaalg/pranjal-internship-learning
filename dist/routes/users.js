"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = __importDefault(require("../models/User"));
const router = express_1.default.Router();
// Get all users
router.get('/', (req, res) => {
    res.json(User_1.default.findAll());
});
// Get user by ID
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const user = User_1.default.findById(id);
    if (user) {
        res.json(user);
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }
});
// Create a new user
router.post('/', (req, res) => {
    const { firstname, lastname } = req.body;
    // Validation
    if (!firstname || !lastname) {
        res.status(400).json({ message: 'Firstname and lastname are required' });
        return;
    }
    const newUser = User_1.default.create({ firstname, lastname });
    res.status(201).json(newUser);
});
// Update user
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const { firstname, lastname } = req.body;
    // Validation
    if (!firstname && !lastname) {
        res.status(400).json({ message: 'Firstname or lastname is required' });
        return;
    }
    const updatedUser = User_1.default.update(id, { firstname, lastname });
    if (updatedUser) {
        res.json(updatedUser);
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }
});
// Delete user
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const deleted = User_1.default.delete(id);
    if (deleted) {
        res.status(200).json({ message: 'User deleted successfully' });
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }
});
module.exports = router;
