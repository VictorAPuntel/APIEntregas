import { Router } from 'express'
import { DeliveriesController } from '@/controllers/deliveriesController'
import { ensureAuthenticated } from '@/middlewares/ensureAutheticated'
import { verifyUserAuthorization } from '@/middlewares/verifyUserAuthorization'
import { DeliveriesStatusController } from '@/controllers/deliveriesStatusCOntroller'

const deliveriesRoute = Router()
const deliveriesController = new DeliveriesController()
const deliveriesStatusController = new DeliveriesStatusController()

deliveriesRoute.use(ensureAuthenticated, verifyUserAuthorization(['sale']))
deliveriesRoute.get('/', deliveriesController.index)
deliveriesRoute.post('/', deliveriesController.create)

deliveriesRoute.patch('/:id/status', deliveriesStatusController.update)

export { deliveriesRoute }
