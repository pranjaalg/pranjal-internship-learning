import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
const usersRoutes = require('./routes/users');

const app: Application = express();
const PORT: number =  3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/users', usersRoutes);


app.get('/', (req: Request, res: Response): void => {
  res.send('API endpoints');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});