const bookshelf = require('../index').bookshelf;
const Restaurant = require('./Restaurants');
const Customer = require('./Customers');
const Comment = require('./Comments');

const Reservation = bookshelf.Model.extend({
  tableName: 'reservations',
  byId(id) {
    return this.forge().query({ where: { id } }).fetch();
  },
  restaurant() {
    return this.belongsTo('Restaurant');
  },
  customer() {
    return this.belongsTo('Customer');
  },
  comment() {
    return this.hasMany('Comment', 'customer_id');
  },
});

module.exports = bookshelf.model('Reservation', Reservation);
