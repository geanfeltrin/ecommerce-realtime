'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {
  image () {
    return this.belongsTo('App/Model/Image')
  }

  product () {
    return this.belongsToMany('App/Model/Product')
  }
}

module.exports = Category
