import 'reflect-metadata';
import express from 'express';
import bodyParser from 'body-parser';
import { AppDataSource } from './ormconfig';
import bookRoutes from './routes/bookRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', bookRoutes);

// Start the server
AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
