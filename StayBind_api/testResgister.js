// const axios = require('axios');
// const userData = {
//   name: 'John Doe',
//   email: 'john.doe@example.com',
//   mobileNumber: '1234567890',
//   numberOfProperties: 3,
//   location: 'New York',
//   password: 'securepassword'
// };
// axios.post('http://localhost:5432/api/auth/register', userData)
//   .then(response => {
//     console.log('Response:', response.data);
//   })
//   .catch(error => {
//     console.error('Error:', error.response.data);
//   });

// testRegister.js

const axios = require('axios');

const userData = {
  username: 'JohnDoe',
  email: 'john.doe@example.com',
  mobileNumber: '1234567890',
  numberOfProperties: 3,
  location: 'New York',
  password: 'securepassword'
};

axios.post('http://localhost:5432/api/auth/register', userData)
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.response ? error.response.data : error.message);
  });
