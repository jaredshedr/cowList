const mysql = require('mysql2');
let { Sequelize, DataTypes } = require('sequelize');
let CowList = new Sequelize('cowlist', 'root', '', {host: '127.0.0.1', dialect:'mysql'});


try {
  CowList.authenticate()
  console.log('we in there database established')
} catch (error) {
  console.log('unable to connect to database', err)
}

let Cows = CowList.define('Cows', {
  cow_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
});


Cows.sync()
  .then((data) => {
    console.log('database synced', data)
  })
  .catch((err) => {
    console.log('error syncing', err)
  })


let readAll = function (callback) {
  Cows.findAll()
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      console.log(err);
      callback(err, null);
    })
}


let addOne = function (data, callback) {
  Cows.create({name: data.name, description: data.description})
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    })
}

let deleteOne = function (data, callback) {
  Cows.destroy({ where: {cow_id: data.cowId}})
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
    callback(err, null);
    })
}

module.exports.CowList = CowList;
module.exports.readAll = readAll
module.exports.addOne = addOne;
module.exports.deleteOne = deleteOne;


// Cows.findOrCreate({where: {cow_id: data.cowId}})