'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  // Routes products

  Route.get('products', 'ProductController.index')
  Route.get('products/:id', 'ProductController.show')

  // Routes Orders

  Route.get('orders', 'OrderController.index')
  Route.get('orders/:id', 'OrderController.show')
  Route.post('orders', 'OrderController.store')
  Route.put('orders/:id', 'OrderController.update')
})
  .prefix('v1')
  .namespace('Client')
