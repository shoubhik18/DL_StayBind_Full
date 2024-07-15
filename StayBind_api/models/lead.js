// const { DataTypes } = require('sequelize');
// const sequelize = require('./index');

// const Lead = sequelize.define('Lead', {
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   mobileNumber: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   noOfProperties: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   location: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   agreedToTerms: {
//     type: DataTypes.BOOLEAN,
//     allowNull: false,
//   },
// }, {});

// module.exports = Lead;


const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Lead = sequelize.define('Lead', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobileNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    noOfProperties: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    agreedToTerms: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {});

  return Lead;
};
