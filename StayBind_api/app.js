// app.js

// const express = require('express');
// const { sequelize } = require('./models'); // Import sequelize instance from models
// require('dotenv').config();
// const app = express();
// const port = process.env.PORT || 5432;

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Routes
// const authRoutes = require('./routes/auth');
// const leadRoutes = require('./routes/lead');
// const userRoutes = require('./routes/user'); // Add userRoutes

// app.use('/api/auth', authRoutes);
// app.use('/api/leads', leadRoutes);
// app.use('/api/users', userRoutes); // Mount userRoutes

// // Test DB connection and sync models
// sequelize.authenticate()
//   .then(() => {
//     console.log('Database connected...');
//     return sequelize.sync();
//   })
//   .then(() => {
//     console.log('Models synchronized...');
//     // Start the server
//     app.listen(port, () => {
//       console.log(`Server running on port ${port}`);
//     });
//   })
//   .catch(err => console.error('Error connecting to the database:', err));



const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models'); // Import sequelize instance from models
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5432;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:5173', // Update with your frontend URL and port
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Routes
const authRoutes = require('./routes/auth');
const leadRoutes = require('./routes/lead'); // Import lead routes
const userRoutes = require('./routes/user'); // Import user routes

app.use('/api/auth', authRoutes);
app.use('/api/leads', leadRoutes); // Mount lead routes
app.use('/api/users', userRoutes); // Mount user routes

// Test DB connection and sync models
sequelize.authenticate()
  .then(() => {
    console.log('Database connected...');
    return sequelize.sync();
  })
  .then(() => {
    console.log('Models synchronized...');
    // Start the server
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(err => console.error('Error connecting to the database:', err));
