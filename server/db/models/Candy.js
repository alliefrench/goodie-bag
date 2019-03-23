const Sequelize = require('sequelize');
const db = require('../database');
const Op = Sequelize.Op;

module.exports = db.define('candy', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    allowEmpty: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    allowEmpty: false,
  },
  quantity: {
    type: Sequelize.INTEGER,
    [Op.lnte]: 10,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'http://www.ocsaccess.com/admin/clientfiles/ucsne/images/xlarge/mm%20choc.jpg',
  },
});
