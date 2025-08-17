import { Router } from 'express'
import { DeliveriesController } from '@/controllers/deliveriesController'
import { ensureAuthenticated } from '@/middlewares/ensureAutheticated'

const deliveriesRoute = Router()
const deliveriesController = new DeliveriesController()

deliveriesRoute.use(ensureAuthenticated)
deliveriesRoute.post('/', deliveriesController.create)

export { deliveriesRoute }
