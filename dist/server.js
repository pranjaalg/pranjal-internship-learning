"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const usersRoutes = require('./routes/users');
const app = (0, express_1.default)();
const PORT = parseInt(process.env.PORT || '3000');
// Middleware
app.use(body_parser_1.default.json());
// Routes
app.use('/api/users', usersRoutes);
// Home route
app.get('/', (req, res) => {
    res.send('User Management API - Use /api/users endpoint');
});
// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
