'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  // Routes Categpries
  Route.resource('categories', 'CategoryController').apiOnly()

  // Routes products
  Route.resource('products', 'ProductController').apiOnly()

  // Routes coupons
  Route.resource('coupons', 'CouponController').apiOnly()

  // Routes orders
  Route.resource('orders', 'OrderController').apiOnly()

  // Routes images
  Route.resource('images', 'ImageController').apiOnly()

  // Routes users
  Route.resource('users', 'UserController').apiOnly()
})
  .prefix('v1/admin')
  .namespace('Admin')
